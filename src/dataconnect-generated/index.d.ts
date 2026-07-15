import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise, DataConnectSettings } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;
export const dataConnectSettings: DataConnectSettings;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;


export enum AttemptStatus {
  IN_PROGRESS = "IN_PROGRESS",
  FINISHED = "FINISHED",
  ABANDONED = "ABANDONED",
};



export interface AnswerOption_Key {
  id: UUIDString;
  __typename?: 'AnswerOption_Key';
}

export interface AttemptAnswer_Key {
  attemptId: UUIDString;
  questionId: UUIDString;
  __typename?: 'AttemptAnswer_Key';
}

export interface ExamAttempt_Key {
  id: UUIDString;
  __typename?: 'ExamAttempt_Key';
}

export interface ExamCategory_Key {
  id: UUIDString;
  __typename?: 'ExamCategory_Key';
}

export interface ExamEdition_Key {
  id: UUIDString;
  __typename?: 'ExamEdition_Key';
}

export interface ExamGroup_Key {
  id: UUIDString;
  __typename?: 'ExamGroup_Key';
}

export interface Exam_Key {
  id: UUIDString;
  __typename?: 'Exam_Key';
}

export interface GetAttemptByIdData {
  examAttempts: ({
    id: UUIDString;
    status: AttemptStatus;
    startedAt: TimestampString;
    finishedAt?: TimestampString | null;
    score?: number | null;
    timeSpentSeconds?: number | null;
    exam: {
      id: UUIDString;
      title: string;
    } & Exam_Key;
    answers: ({
      question: {
        id: UUIDString;
        statement: string;
      } & Question_Key;
      selectedOption?: {
        id: UUIDString;
        text: string;
      } & AnswerOption_Key;
      isCorrect?: boolean | null;
      answeredAt: TimestampString;
    })[];
  } & ExamAttempt_Key)[];
}

export interface GetAttemptByIdVariables {
  attemptId: UUIDString;
}

export interface GetAttemptReviewData {
  examAttempts: ({
    id: UUIDString;
    exam: {
      id: UUIDString;
      title: string;
      questions: ({
        id: UUIDString;
        statement: string;
        explanation?: string | null;
        optionsWithAnswer: ({
          id: UUIDString;
          text: string;
          isCorrect: boolean;
          position: number;
        } & AnswerOption_Key)[];
      } & Question_Key)[];
    } & Exam_Key;
  } & ExamAttempt_Key)[];
}

export interface GetAttemptReviewVariables {
  attemptId: UUIDString;
}

export interface GetExamForAttemptData {
  exam?: {
    id: UUIDString;
    title: string;
    durationMinutes: number;
    questions: ({
      id: UUIDString;
      statement: string;
      difficulty: QuestionDifficulty;
      options: ({
        id: UUIDString;
        text: string;
        position: number;
      } & AnswerOption_Key)[];
    } & Question_Key)[];
  } & Exam_Key;
}

export interface GetExamForAttemptVariables {
  examId: UUIDString;
}

export interface GetMyAttemptsData {
  user?: {
    attempts: ({
      id: UUIDString;
      status: AttemptStatus;
      startedAt: TimestampString;
      finishedAt?: TimestampString | null;
      score?: number | null;
      timeSpentSeconds?: number | null;
      exam: {
        id: UUIDString;
        title: string;
      } & Exam_Key;
    } & ExamAttempt_Key)[];
  };
}

export interface ListExamCategoriesData {
  examCategories: ({
    id: UUIDString;
    name: string;
    slug: string;
    description?: string | null;
  } & ExamCategory_Key)[];
}

export interface ListExamEditionsByGroupData {
  examEditions: ({
    id: UUIDString;
    year: number;
    label?: string | null;
    examDate?: DateString | null;
  } & ExamEdition_Key)[];
}

export interface ListExamEditionsByGroupVariables {
  groupId: UUIDString;
}

export interface ListExamGroupsByCategoryData {
  examGroups: ({
    id: UUIDString;
    name: string;
    slug: string;
  } & ExamGroup_Key)[];
}

export interface ListExamGroupsByCategoryVariables {
  categoryId: UUIDString;
}

export interface ListExamsByEditionData {
  exams: ({
    id: UUIDString;
    title: string;
    description?: string | null;
    durationMinutes: number;
  } & Exam_Key)[];
}

export interface ListExamsByEditionVariables {
  editionId: UUIDString;
}

export interface Question_Key {
  id: UUIDString;
  __typename?: 'Question_Key';
}

export interface Topic_Key {
  id: UUIDString;
  __typename?: 'Topic_Key';
}

export interface UpsertUserData {
  user_upsert: User_Key;
}

export interface UpsertUserVariables {
  email: string;
  displayName?: string | null;
}

export interface User_Key {
  id: string;
  __typename?: 'User_Key';
}

interface UpsertUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpsertUserVariables): MutationRef<UpsertUserData, UpsertUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpsertUserVariables): MutationRef<UpsertUserData, UpsertUserVariables>;
  operationName: string;
}
export const upsertUserRef: UpsertUserRef;

export function upsertUser(vars: UpsertUserVariables): MutationPromise<UpsertUserData, UpsertUserVariables>;
export function upsertUser(dc: DataConnect, vars: UpsertUserVariables): MutationPromise<UpsertUserData, UpsertUserVariables>;

interface ListExamCategoriesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListExamCategoriesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListExamCategoriesData, undefined>;
  operationName: string;
}
export const listExamCategoriesRef: ListExamCategoriesRef;

export function listExamCategories(options?: ExecuteQueryOptions): QueryPromise<ListExamCategoriesData, undefined>;
export function listExamCategories(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListExamCategoriesData, undefined>;

interface ListExamGroupsByCategoryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListExamGroupsByCategoryVariables): QueryRef<ListExamGroupsByCategoryData, ListExamGroupsByCategoryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListExamGroupsByCategoryVariables): QueryRef<ListExamGroupsByCategoryData, ListExamGroupsByCategoryVariables>;
  operationName: string;
}
export const listExamGroupsByCategoryRef: ListExamGroupsByCategoryRef;

export function listExamGroupsByCategory(vars: ListExamGroupsByCategoryVariables, options?: ExecuteQueryOptions): QueryPromise<ListExamGroupsByCategoryData, ListExamGroupsByCategoryVariables>;
export function listExamGroupsByCategory(dc: DataConnect, vars: ListExamGroupsByCategoryVariables, options?: ExecuteQueryOptions): QueryPromise<ListExamGroupsByCategoryData, ListExamGroupsByCategoryVariables>;

interface ListExamEditionsByGroupRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListExamEditionsByGroupVariables): QueryRef<ListExamEditionsByGroupData, ListExamEditionsByGroupVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListExamEditionsByGroupVariables): QueryRef<ListExamEditionsByGroupData, ListExamEditionsByGroupVariables>;
  operationName: string;
}
export const listExamEditionsByGroupRef: ListExamEditionsByGroupRef;

export function listExamEditionsByGroup(vars: ListExamEditionsByGroupVariables, options?: ExecuteQueryOptions): QueryPromise<ListExamEditionsByGroupData, ListExamEditionsByGroupVariables>;
export function listExamEditionsByGroup(dc: DataConnect, vars: ListExamEditionsByGroupVariables, options?: ExecuteQueryOptions): QueryPromise<ListExamEditionsByGroupData, ListExamEditionsByGroupVariables>;

interface ListExamsByEditionRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListExamsByEditionVariables): QueryRef<ListExamsByEditionData, ListExamsByEditionVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListExamsByEditionVariables): QueryRef<ListExamsByEditionData, ListExamsByEditionVariables>;
  operationName: string;
}
export const listExamsByEditionRef: ListExamsByEditionRef;

export function listExamsByEdition(vars: ListExamsByEditionVariables, options?: ExecuteQueryOptions): QueryPromise<ListExamsByEditionData, ListExamsByEditionVariables>;
export function listExamsByEdition(dc: DataConnect, vars: ListExamsByEditionVariables, options?: ExecuteQueryOptions): QueryPromise<ListExamsByEditionData, ListExamsByEditionVariables>;

interface GetExamForAttemptRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetExamForAttemptVariables): QueryRef<GetExamForAttemptData, GetExamForAttemptVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetExamForAttemptVariables): QueryRef<GetExamForAttemptData, GetExamForAttemptVariables>;
  operationName: string;
}
export const getExamForAttemptRef: GetExamForAttemptRef;

export function getExamForAttempt(vars: GetExamForAttemptVariables, options?: ExecuteQueryOptions): QueryPromise<GetExamForAttemptData, GetExamForAttemptVariables>;
export function getExamForAttempt(dc: DataConnect, vars: GetExamForAttemptVariables, options?: ExecuteQueryOptions): QueryPromise<GetExamForAttemptData, GetExamForAttemptVariables>;

interface GetAttemptReviewRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetAttemptReviewVariables): QueryRef<GetAttemptReviewData, GetAttemptReviewVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetAttemptReviewVariables): QueryRef<GetAttemptReviewData, GetAttemptReviewVariables>;
  operationName: string;
}
export const getAttemptReviewRef: GetAttemptReviewRef;

export function getAttemptReview(vars: GetAttemptReviewVariables, options?: ExecuteQueryOptions): QueryPromise<GetAttemptReviewData, GetAttemptReviewVariables>;
export function getAttemptReview(dc: DataConnect, vars: GetAttemptReviewVariables, options?: ExecuteQueryOptions): QueryPromise<GetAttemptReviewData, GetAttemptReviewVariables>;

interface GetMyAttemptsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyAttemptsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetMyAttemptsData, undefined>;
  operationName: string;
}
export const getMyAttemptsRef: GetMyAttemptsRef;

export function getMyAttempts(options?: ExecuteQueryOptions): QueryPromise<GetMyAttemptsData, undefined>;
export function getMyAttempts(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetMyAttemptsData, undefined>;

interface GetAttemptByIdRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetAttemptByIdVariables): QueryRef<GetAttemptByIdData, GetAttemptByIdVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetAttemptByIdVariables): QueryRef<GetAttemptByIdData, GetAttemptByIdVariables>;
  operationName: string;
}
export const getAttemptByIdRef: GetAttemptByIdRef;

export function getAttemptById(vars: GetAttemptByIdVariables, options?: ExecuteQueryOptions): QueryPromise<GetAttemptByIdData, GetAttemptByIdVariables>;
export function getAttemptById(dc: DataConnect, vars: GetAttemptByIdVariables, options?: ExecuteQueryOptions): QueryPromise<GetAttemptByIdData, GetAttemptByIdVariables>;

