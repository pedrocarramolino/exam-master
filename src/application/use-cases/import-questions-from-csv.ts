import Papa from 'papaparse';
import { z } from 'zod';

import type { AnswerOptionInput } from '@/domain/entities/content';
import type { ContentRepository } from '@/domain/repositories/content-repository';

const csvRowSchema = z.object({
  tema: z.string().trim().min(1, 'El tema es obligatorio.'),
  enunciado: z.string().trim().min(1, 'El enunciado es obligatorio.'),
  respuesta1: z.string().trim().min(1, 'Falta la respuesta 1.'),
  respuesta2: z.string().trim().min(1, 'Falta la respuesta 2.'),
  respuesta3: z.string().trim().min(1, 'Falta la respuesta 3.'),
  respuesta4: z.string().trim().min(1, 'Falta la respuesta 4.'),
  correcta: z.coerce
    .number()
    .int()
    .min(1, 'correcta debe ser 1-4.')
    .max(4, 'correcta debe ser 1-4.'),
  explicacion: z.string().trim().optional(),
  dificultad: z.enum(['EASY', 'MEDIUM', 'HARD']).optional().default('MEDIUM'),
});

export interface ImportRowError {
  row: number;
  message: string;
}

export interface ImportQuestionsResult {
  created: number;
  errors: ImportRowError[];
}

/**
 * Formato esperado del CSV (cabecera):
 * tema,enunciado,respuesta1,respuesta2,respuesta3,respuesta4,correcta,explicacion,dificultad
 * "correcta" es el número (1-4) de la respuesta correcta. "dificultad" es opcional
 * (EASY/MEDIUM/HARD, por defecto MEDIUM). "explicacion" es opcional.
 */
export async function importQuestionsFromCsv(
  contentRepository: ContentRepository,
  examId: string,
  categoryId: string,
  csvText: string,
): Promise<ImportQuestionsResult> {
  const parsed = Papa.parse<Record<string, string>>(csvText, {
    header: true,
    skipEmptyLines: true,
  });

  const errors: ImportRowError[] = [];
  for (const err of parsed.errors) {
    errors.push({ row: (err.row ?? 0) + 2, message: err.message });
  }

  const existingTopics = await contentRepository.listTopics(categoryId);
  const topicIdByName = new Map(existingTopics.map((t) => [t.name.toLowerCase(), t.id]));

  let created = 0;

  for (const [index, rawRow] of parsed.data.entries()) {
    const rowNumber = index + 2; // +1 por índice base 0, +1 por la fila de cabecera
    const result = csvRowSchema.safeParse(rawRow);
    if (!result.success) {
      errors.push({ row: rowNumber, message: result.error.issues[0]?.message ?? 'Fila inválida.' });
      continue;
    }
    const row = result.data;

    try {
      let topicId = topicIdByName.get(row.tema.toLowerCase());
      if (!topicId) {
        const topic = await contentRepository.createTopic(categoryId, row.tema);
        topicId = topic.id;
        topicIdByName.set(row.tema.toLowerCase(), topicId);
      }

      const texts = [row.respuesta1, row.respuesta2, row.respuesta3, row.respuesta4];
      const options: AnswerOptionInput[] = texts.map((text, i) => ({
        text,
        isCorrect: i === row.correcta - 1,
        position: i + 1,
      }));

      await contentRepository.createQuestion({
        examId,
        topicId,
        statement: row.enunciado,
        explanation: row.explicacion || null,
        difficulty: row.dificultad,
        options,
      });
      created += 1;
    } catch (error) {
      errors.push({
        row: rowNumber,
        message: error instanceof Error ? error.message : 'Error al crear la pregunta.',
      });
    }
  }

  return { created, errors };
}
