export type AttemptStatus = 'IN_PROGRESS' | 'FINISHED' | 'ABANDONED';

export interface ExamAttemptSummary {
  id: string;
  examId: string;
  examTitle: string;
  status: AttemptStatus;
  startedAt: string;
  finishedAt: string | null;
  score: number | null;
  timeSpentSeconds: number | null;
}

export interface AttemptAnswerDetail {
  questionId: string;
  questionStatement: string;
  selectedOptionId: string | null;
  selectedOptionText: string | null;
  isCorrect: boolean | null;
  answeredAt: string;
}

export interface ExamAttemptDetail extends ExamAttemptSummary {
  answers: AttemptAnswerDetail[];
}

export interface ExamQuestionOption {
  id: string;
  text: string;
  position: number;
}

export interface ExamQuestionForAttempt {
  id: string;
  statement: string;
  difficulty: string;
  options: ExamQuestionOption[];
}

export interface ExamForAttempt {
  id: string;
  title: string;
  durationMinutes: number;
  questions: ExamQuestionForAttempt[];
}

export interface ReviewOption extends ExamQuestionOption {
  isCorrect: boolean;
}

export interface ReviewQuestion {
  id: string;
  statement: string;
  explanation: string | null;
  options: ReviewOption[];
}

export interface ExamAttemptReview {
  id: string;
  examTitle: string;
  questions: ReviewQuestion[];
}
