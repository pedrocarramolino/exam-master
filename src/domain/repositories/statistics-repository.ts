import type { AnswerWithTopic } from '@/domain/entities/statistics';

export interface StatisticsRepository {
  getMyAnswersWithTopic(userId: string): Promise<AnswerWithTopic[]>;
}
