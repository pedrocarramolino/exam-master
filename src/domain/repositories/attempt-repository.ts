import type {
  ExamAttemptDetail,
  ExamAttemptReview,
  ExamAttemptSummary,
  ExamForAttempt,
} from '@/domain/entities/attempt';

export interface AttemptRepository {
  getExamForAttempt(examId: string): Promise<ExamForAttempt | null>;
  getInProgressAttemptId(userId: string, examId: string): Promise<string | null>;
  startAttempt(userId: string, examId: string): Promise<string>;
  saveAnswer(
    userId: string,
    attemptId: string,
    questionId: string,
    selectedOptionId: string | null,
  ): Promise<void>;
  finishAttempt(userId: string, attemptId: string): Promise<void>;
  getMyAttempts(userId: string): Promise<ExamAttemptSummary[]>;
  getAttemptById(userId: string, attemptId: string): Promise<ExamAttemptDetail | null>;
  getAttemptReview(userId: string, attemptId: string): Promise<ExamAttemptReview | null>;
}
