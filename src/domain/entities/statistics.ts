export interface AnswerWithTopic {
  isCorrect: boolean | null;
  attemptStatus: string;
  topicId: string | null;
  topicName: string | null;
}

export interface TopicStats {
  topicId: string | null;
  topicName: string;
  totalAnswers: number;
  correctAnswers: number;
  /** 0-100, redondeado a entero. */
  correctPercentage: number;
}

export interface ScorePoint {
  attemptId: string;
  finishedAt: string;
  score: number;
}

export interface UserStatistics {
  totalExams: number;
  averageScore: number | null;
  bestScore: number | null;
  worstScore: number | null;
  /** 0-100, redondeado a entero. Sobre todas las respuestas dadas. */
  correctPercentage: number | null;
  averageTimeSeconds: number | null;
  /** Nota de cada intento finalizado, ordenado por fecha ascendente (evolución). */
  evolution: ScorePoint[];
  byTopic: TopicStats[];
}
