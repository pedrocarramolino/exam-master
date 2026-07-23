import 'server-only';

import type {
  AdminGetQuestionData,
  AdminGetQuestionVariables,
  AdminListQuestionsData,
  AdminListQuestionsVariables,
  FinishExamAttemptData,
  FinishExamAttemptVariables,
  GetAttemptByIdData,
  GetAttemptByIdVariables,
  GetAttemptReviewData,
  GetAttemptReviewVariables,
  GetExamForAttemptData,
  GetExamForAttemptVariables,
  GetInProgressAttemptData,
  GetInProgressAttemptVariables,
  GetMyAttemptsData,
  SaveAttemptAnswerData,
  SaveAttemptAnswerVariables,
  StartExamAttemptData,
  StartExamAttemptVariables,
} from '@dataconnect/generated';

import type {
  AttemptStatus,
  ExamAttemptDetail,
  ExamAttemptReview,
  ExamAttemptSummary,
  ExamForAttempt,
} from '@/domain/entities/attempt';
import type { AttemptRepository } from '@/domain/repositories/attempt-repository';
import { dataConnectAdmin, impersonateAs } from '@/infrastructure/firebase/data-connect-admin';

export class DataConnectAttemptRepository implements AttemptRepository {
  async getExamForAttempt(examId: string): Promise<ExamForAttempt | null> {
    const { data } = await dataConnectAdmin.executeQuery<
      GetExamForAttemptData,
      GetExamForAttemptVariables
    >('GetExamForAttempt', { examId });
    if (!data.exam) return null;
    return {
      id: data.exam.id,
      title: data.exam.title,
      durationMinutes: data.exam.durationMinutes,
      questions: data.exam.questionsForAttempt,
    };
  }

  async getInProgressAttemptId(userId: string, examId: string): Promise<string | null> {
    const { data } = await dataConnectAdmin.executeQuery<
      GetInProgressAttemptData,
      GetInProgressAttemptVariables
    >('GetInProgressAttempt', { examId }, impersonateAs(userId));
    return data.examAttempts[0]?.id ?? null;
  }

  async startAttempt(userId: string, examId: string): Promise<string> {
    const { data } = await dataConnectAdmin.executeMutation<
      StartExamAttemptData,
      StartExamAttemptVariables
    >('StartExamAttempt', { examId }, impersonateAs(userId));
    return data.examAttempt_insert.id;
  }

  async saveAnswer(
    userId: string,
    attemptId: string,
    questionId: string,
    selectedOptionId: string | null,
  ): Promise<void> {
    const attempt = await this.getAttemptById(userId, attemptId);
    if (!attempt || attempt.status !== 'IN_PROGRESS') {
      throw new Error('Intento no encontrado o ya finalizado.');
    }

    let isCorrect: boolean | null = null;
    if (selectedOptionId) {
      const { data } = await dataConnectAdmin.executeQuery<
        AdminGetQuestionData,
        AdminGetQuestionVariables
      >('AdminGetQuestion', { questionId });
      const option = data.question?.optionsForGet.find((o) => o.id === selectedOptionId);
      isCorrect = option?.isCorrect ?? null;
    }

    await dataConnectAdmin.executeMutation<SaveAttemptAnswerData, SaveAttemptAnswerVariables>(
      'SaveAttemptAnswer',
      { attemptId, questionId, selectedOptionId, isCorrect },
    );
  }

  async finishAttempt(userId: string, attemptId: string): Promise<void> {
    const attempt = await this.getAttemptById(userId, attemptId);
    if (!attempt) throw new Error('Intento no encontrado.');
    if (attempt.status !== 'IN_PROGRESS') return; // ya finalizado: idempotente

    const { data: questionsData } = await dataConnectAdmin.executeQuery<
      AdminListQuestionsData,
      AdminListQuestionsVariables
    >('AdminListQuestions', { examId: attempt.examId });
    const totalQuestions = questionsData.questions.length;
    const correctCount = attempt.answers.filter((a) => a.isCorrect).length;
    const score = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 1000) / 100 : 0;
    const timeSpentSeconds = Math.max(
      0,
      Math.floor((Date.now() - new Date(attempt.startedAt).getTime()) / 1000),
    );

    await dataConnectAdmin.executeMutation<FinishExamAttemptData, FinishExamAttemptVariables>(
      'FinishExamAttempt',
      { attemptId, score, timeSpentSeconds },
    );
  }

  async getMyAttempts(userId: string): Promise<ExamAttemptSummary[]> {
    const { data } = await dataConnectAdmin.executeQuery<GetMyAttemptsData, undefined>(
      'GetMyAttempts',
      undefined,
      impersonateAs(userId),
    );
    return (data.user?.attempts ?? []).map((a) => ({
      id: a.id,
      examId: a.exam.id,
      examTitle: a.exam.title,
      status: a.status as AttemptStatus,
      startedAt: a.startedAt,
      finishedAt: a.finishedAt ?? null,
      score: a.score ?? null,
      timeSpentSeconds: a.timeSpentSeconds ?? null,
    }));
  }

  async getAttemptById(userId: string, attemptId: string): Promise<ExamAttemptDetail | null> {
    const { data } = await dataConnectAdmin.executeQuery<
      GetAttemptByIdData,
      GetAttemptByIdVariables
    >('GetAttemptById', { attemptId }, impersonateAs(userId));
    const a = data.examAttempts[0];
    if (!a) return null;
    return {
      id: a.id,
      examId: a.exam.id,
      examTitle: a.exam.title,
      status: a.status as AttemptStatus,
      startedAt: a.startedAt,
      finishedAt: a.finishedAt ?? null,
      score: a.score ?? null,
      timeSpentSeconds: a.timeSpentSeconds ?? null,
      answers: a.answers.map((ans) => ({
        questionId: ans.question.id,
        questionStatement: ans.question.statement,
        selectedOptionId: ans.selectedOption?.id ?? null,
        selectedOptionText: ans.selectedOption?.text ?? null,
        isCorrect: ans.isCorrect ?? null,
        answeredAt: ans.answeredAt,
      })),
    };
  }

  async getAttemptReview(userId: string, attemptId: string): Promise<ExamAttemptReview | null> {
    const { data } = await dataConnectAdmin.executeQuery<
      GetAttemptReviewData,
      GetAttemptReviewVariables
    >('GetAttemptReview', { attemptId }, impersonateAs(userId));
    const a = data.examAttempts[0];
    if (!a) return null;
    return {
      id: a.id,
      examTitle: a.exam.title,
      questions: a.exam.questionsForReview.map((q) => ({
        id: q.id,
        statement: q.statement,
        explanation: q.explanation ?? null,
        options: q.optionsWithAnswer,
      })),
    };
  }
}
