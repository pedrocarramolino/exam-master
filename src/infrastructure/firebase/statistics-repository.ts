import 'server-only';

import type { GetMyAnswersWithTopicData } from '@dataconnect/generated';

import type { AnswerWithTopic } from '@/domain/entities/statistics';
import type { StatisticsRepository } from '@/domain/repositories/statistics-repository';
import { dataConnectAdmin, impersonateAs } from '@/infrastructure/firebase/data-connect-admin';

export class DataConnectStatisticsRepository implements StatisticsRepository {
  async getMyAnswersWithTopic(userId: string): Promise<AnswerWithTopic[]> {
    const { data } = await dataConnectAdmin.executeQuery<GetMyAnswersWithTopicData, undefined>(
      'GetMyAnswersWithTopic',
      undefined,
      impersonateAs(userId),
    );
    return data.attemptAnswers.map((a) => ({
      isCorrect: a.isCorrect ?? null,
      attemptStatus: a.attempt.status,
      topicId: a.question.topic?.id ?? null,
      topicName: a.question.topic?.name ?? null,
    }));
  }
}
