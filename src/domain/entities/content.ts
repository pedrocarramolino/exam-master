export interface ExamCategory {
  id: string;
  name: string;
  slug: string;
  description: string | null;
}

export interface ExamGroup {
  id: string;
  categoryId: string;
  name: string;
  slug: string;
}

export interface ExamEdition {
  id: string;
  groupId: string;
  year: number;
  label: string | null;
  examDate: string | null;
}

export interface Exam {
  id: string;
  editionId: string;
  title: string;
  description: string | null;
  durationMinutes: number;
}

export interface Topic {
  id: string;
  categoryId: string;
  name: string;
}

export type QuestionDifficulty = 'EASY' | 'MEDIUM' | 'HARD';

export interface AnswerOptionInput {
  text: string;
  isCorrect: boolean;
  position: number;
}

export interface AnswerOption extends AnswerOptionInput {
  id: string;
}

export interface Question {
  id: string;
  examId: string;
  topicId: string | null;
  statement: string;
  explanation: string | null;
  difficulty: QuestionDifficulty;
  options: AnswerOption[];
}
