import type { ExamAttemptSummary } from '@/domain/entities/attempt';
import type {
  AnswerWithTopic,
  ScorePoint,
  TopicStats,
  UserStatistics,
} from '@/domain/entities/statistics';

const SIN_TEMA = 'Sin tema';

/**
 * Cálculo puro (sin I/O) de las estadísticas del usuario a partir de sus
 * intentos y sus respuestas etiquetadas con tema. Solo cuentan los intentos
 * FINISHED: un intento en curso aún no tiene nota y sesgaría los agregados.
 */
export function computeUserStatistics(
  attempts: ExamAttemptSummary[],
  answers: AnswerWithTopic[],
): UserStatistics {
  const finished = attempts.filter((a) => a.status === 'FINISHED' && a.score !== null);

  const scores = finished.map((a) => a.score!);
  const times = finished.map((a) => a.timeSpentSeconds).filter((t): t is number => t !== null);

  const evolution: ScorePoint[] = finished
    .filter((a) => a.finishedAt !== null)
    .map((a) => ({ attemptId: a.id, finishedAt: a.finishedAt!, score: a.score! }))
    .sort((a, b) => a.finishedAt.localeCompare(b.finishedAt));

  const finishedAnswers = answers.filter((ans) => ans.attemptStatus === 'FINISHED');
  const answeredCount = finishedAnswers.length;
  const correctCount = finishedAnswers.filter((ans) => ans.isCorrect === true).length;

  const byTopicMap = new Map<string, TopicStats>();
  for (const ans of finishedAnswers) {
    const key = ans.topicId ?? '__none__';
    let entry = byTopicMap.get(key);
    if (!entry) {
      entry = {
        topicId: ans.topicId,
        topicName: ans.topicName ?? SIN_TEMA,
        totalAnswers: 0,
        correctAnswers: 0,
        correctPercentage: 0,
      };
      byTopicMap.set(key, entry);
    }
    entry.totalAnswers += 1;
    if (ans.isCorrect === true) entry.correctAnswers += 1;
  }
  const byTopic = [...byTopicMap.values()]
    .map((t) => ({
      ...t,
      correctPercentage:
        t.totalAnswers > 0 ? Math.round((t.correctAnswers / t.totalAnswers) * 100) : 0,
    }))
    .sort((a, b) => a.topicName.localeCompare(b.topicName));

  const average = (values: number[]) =>
    values.length > 0 ? values.reduce((sum, v) => sum + v, 0) / values.length : null;

  return {
    totalExams: finished.length,
    averageScore: average(scores),
    bestScore: scores.length > 0 ? Math.max(...scores) : null,
    worstScore: scores.length > 0 ? Math.min(...scores) : null,
    correctPercentage: answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : null,
    averageTimeSeconds: average(times),
    evolution,
    byTopic,
  };
}
