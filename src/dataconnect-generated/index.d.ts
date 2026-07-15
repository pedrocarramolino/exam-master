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

export enum QuestionDifficulty {
  EASY = "EASY",
  MEDIUM = "MEDIUM",
  HARD = "HARD",
};

export enum UserRole {
  STUDENT = "STUDENT",
  ADMIN = "ADMIN",
};



export interface AdminGetQuestionData {
  question?: {
    id: UUIDString;
    examId: UUIDString;
    topicId?: UUIDString | null;
    statement: string;
    explanation?: string | null;
    difficulty: QuestionDifficulty;
    optionsForGet: ({
      id: UUIDString;
      text: string;
      isCorrect: boolean;
      position: number;
    } & AnswerOption_Key)[];
  } & Question_Key;
}

export interface AdminGetQuestionVariables {
  questionId: UUIDString;
}

export interface AdminListEditionsData {
  examEditions: ({
    id: UUIDString;
    groupId: UUIDString;
    year: number;
    label?: string | null;
    examDate?: DateString | null;
  } & ExamEdition_Key)[];
}

export interface AdminListEditionsVariables {
  groupId: UUIDString;
}

export interface AdminListExamsData {
  exams: ({
    id: UUIDString;
    editionId: UUIDString;
    title: string;
    description?: string | null;
    durationMinutes: number;
  } & Exam_Key)[];
}

export interface AdminListExamsVariables {
  editionId: UUIDString;
}

export interface AdminListGroupsData {
  examGroups: ({
    id: UUIDString;
    categoryId: UUIDString;
    name: string;
    slug: string;
  } & ExamGroup_Key)[];
}

export interface AdminListGroupsVariables {
  categoryId: UUIDString;
}

export interface AdminListQuestionsData {
  questions: ({
    id: UUIDString;
    examId: UUIDString;
    topicId?: UUIDString | null;
    statement: string;
    explanation?: string | null;
    difficulty: QuestionDifficulty;
    optionsForList: ({
      id: UUIDString;
      text: string;
      isCorrect: boolean;
      position: number;
    } & AnswerOption_Key)[];
  } & Question_Key)[];
}

export interface AdminListQuestionsVariables {
  examId: UUIDString;
}

export interface AdminListTopicsData {
  topics: ({
    id: UUIDString;
    categoryId: UUIDString;
    name: string;
  } & Topic_Key)[];
}

export interface AdminListTopicsVariables {
  categoryId: UUIDString;
}

export interface AnswerOption_Key {
  id: UUIDString;
  __typename?: 'AnswerOption_Key';
}

export interface AttemptAnswer_Key {
  attemptId: UUIDString;
  questionId: UUIDString;
  __typename?: 'AttemptAnswer_Key';
}

export interface CreateExamCategoryData {
  examCategory_insert: ExamCategory_Key;
}

export interface CreateExamCategoryVariables {
  name: string;
  slug: string;
  description?: string | null;
}

export interface CreateExamData {
  exam_insert: Exam_Key;
}

export interface CreateExamEditionData {
  examEdition_insert: ExamEdition_Key;
}

export interface CreateExamEditionVariables {
  groupId: UUIDString;
  year: number;
  label?: string | null;
}

export interface CreateExamGroupData {
  examGroup_insert: ExamGroup_Key;
}

export interface CreateExamGroupVariables {
  categoryId: UUIDString;
  name: string;
  slug: string;
}

export interface CreateExamVariables {
  editionId: UUIDString;
  title: string;
  description?: string | null;
  durationMinutes: number;
}

export interface CreateQuestionData {
  question_insert: Question_Key;
}

export interface CreateQuestionVariables {
  examId: UUIDString;
  topicId?: UUIDString | null;
  statement: string;
  explanation?: string | null;
  difficulty: QuestionDifficulty;
  option1Text: string;
  option1IsCorrect: boolean;
  option2Text: string;
  option2IsCorrect: boolean;
  option3Text: string;
  option3IsCorrect: boolean;
  option4Text: string;
  option4IsCorrect: boolean;
}

export interface CreateTopicData {
  topic_insert: Topic_Key;
}

export interface CreateTopicVariables {
  categoryId: UUIDString;
  name: string;
}

export interface DeleteAnswerOptionsByQuestionData {
  answerOption_deleteMany: number;
}

export interface DeleteAnswerOptionsByQuestionVariables {
  questionId: UUIDString;
}

export interface DeleteExamCategoryData {
  examCategory_delete?: ExamCategory_Key | null;
}

export interface DeleteExamCategoryVariables {
  categoryId: UUIDString;
}

export interface DeleteExamData {
  exam_delete?: Exam_Key | null;
}

export interface DeleteExamEditionData {
  examEdition_delete?: ExamEdition_Key | null;
}

export interface DeleteExamEditionVariables {
  editionId: UUIDString;
}

export interface DeleteExamGroupData {
  examGroup_delete?: ExamGroup_Key | null;
}

export interface DeleteExamGroupVariables {
  groupId: UUIDString;
}

export interface DeleteExamVariables {
  examId: UUIDString;
}

export interface DeleteQuestionData {
  question_delete?: Question_Key | null;
}

export interface DeleteQuestionVariables {
  questionId: UUIDString;
}

export interface DeleteTopicData {
  topic_delete?: Topic_Key | null;
}

export interface DeleteTopicVariables {
  topicId: UUIDString;
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

export interface GetUserRoleData {
  user?: {
    role: UserRole;
  };
}

export interface GetUserRoleVariables {
  userId: string;
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

export interface ReplaceAnswerOptionsData {
  answerOption_deleteMany: number;
  answerOption_insertMany: AnswerOption_Key[];
}

export interface ReplaceAnswerOptionsVariables {
  questionId: UUIDString;
  option1Text: string;
  option1IsCorrect: boolean;
  option2Text: string;
  option2IsCorrect: boolean;
  option3Text: string;
  option3IsCorrect: boolean;
  option4Text: string;
  option4IsCorrect: boolean;
}

export interface Topic_Key {
  id: UUIDString;
  __typename?: 'Topic_Key';
}

export interface UpdateExamCategoryData {
  examCategory_update?: ExamCategory_Key | null;
}

export interface UpdateExamCategoryVariables {
  categoryId: UUIDString;
  name: string;
  slug: string;
  description?: string | null;
}

export interface UpdateExamData {
  exam_update?: Exam_Key | null;
}

export interface UpdateExamEditionData {
  examEdition_update?: ExamEdition_Key | null;
}

export interface UpdateExamEditionVariables {
  editionId: UUIDString;
  year: number;
  label?: string | null;
}

export interface UpdateExamGroupData {
  examGroup_update?: ExamGroup_Key | null;
}

export interface UpdateExamGroupVariables {
  groupId: UUIDString;
  name: string;
  slug: string;
}

export interface UpdateExamVariables {
  examId: UUIDString;
  title: string;
  description?: string | null;
  durationMinutes: number;
}

export interface UpdateQuestionData {
  question_update?: Question_Key | null;
}

export interface UpdateQuestionVariables {
  questionId: UUIDString;
  topicId?: UUIDString | null;
  statement: string;
  explanation?: string | null;
  difficulty: QuestionDifficulty;
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

interface CreateExamCategoryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateExamCategoryVariables): MutationRef<CreateExamCategoryData, CreateExamCategoryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateExamCategoryVariables): MutationRef<CreateExamCategoryData, CreateExamCategoryVariables>;
  operationName: string;
}
export const createExamCategoryRef: CreateExamCategoryRef;

export function createExamCategory(vars: CreateExamCategoryVariables): MutationPromise<CreateExamCategoryData, CreateExamCategoryVariables>;
export function createExamCategory(dc: DataConnect, vars: CreateExamCategoryVariables): MutationPromise<CreateExamCategoryData, CreateExamCategoryVariables>;

interface UpdateExamCategoryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateExamCategoryVariables): MutationRef<UpdateExamCategoryData, UpdateExamCategoryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateExamCategoryVariables): MutationRef<UpdateExamCategoryData, UpdateExamCategoryVariables>;
  operationName: string;
}
export const updateExamCategoryRef: UpdateExamCategoryRef;

export function updateExamCategory(vars: UpdateExamCategoryVariables): MutationPromise<UpdateExamCategoryData, UpdateExamCategoryVariables>;
export function updateExamCategory(dc: DataConnect, vars: UpdateExamCategoryVariables): MutationPromise<UpdateExamCategoryData, UpdateExamCategoryVariables>;

interface DeleteExamCategoryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteExamCategoryVariables): MutationRef<DeleteExamCategoryData, DeleteExamCategoryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteExamCategoryVariables): MutationRef<DeleteExamCategoryData, DeleteExamCategoryVariables>;
  operationName: string;
}
export const deleteExamCategoryRef: DeleteExamCategoryRef;

export function deleteExamCategory(vars: DeleteExamCategoryVariables): MutationPromise<DeleteExamCategoryData, DeleteExamCategoryVariables>;
export function deleteExamCategory(dc: DataConnect, vars: DeleteExamCategoryVariables): MutationPromise<DeleteExamCategoryData, DeleteExamCategoryVariables>;

interface CreateExamGroupRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateExamGroupVariables): MutationRef<CreateExamGroupData, CreateExamGroupVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateExamGroupVariables): MutationRef<CreateExamGroupData, CreateExamGroupVariables>;
  operationName: string;
}
export const createExamGroupRef: CreateExamGroupRef;

export function createExamGroup(vars: CreateExamGroupVariables): MutationPromise<CreateExamGroupData, CreateExamGroupVariables>;
export function createExamGroup(dc: DataConnect, vars: CreateExamGroupVariables): MutationPromise<CreateExamGroupData, CreateExamGroupVariables>;

interface UpdateExamGroupRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateExamGroupVariables): MutationRef<UpdateExamGroupData, UpdateExamGroupVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateExamGroupVariables): MutationRef<UpdateExamGroupData, UpdateExamGroupVariables>;
  operationName: string;
}
export const updateExamGroupRef: UpdateExamGroupRef;

export function updateExamGroup(vars: UpdateExamGroupVariables): MutationPromise<UpdateExamGroupData, UpdateExamGroupVariables>;
export function updateExamGroup(dc: DataConnect, vars: UpdateExamGroupVariables): MutationPromise<UpdateExamGroupData, UpdateExamGroupVariables>;

interface DeleteExamGroupRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteExamGroupVariables): MutationRef<DeleteExamGroupData, DeleteExamGroupVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteExamGroupVariables): MutationRef<DeleteExamGroupData, DeleteExamGroupVariables>;
  operationName: string;
}
export const deleteExamGroupRef: DeleteExamGroupRef;

export function deleteExamGroup(vars: DeleteExamGroupVariables): MutationPromise<DeleteExamGroupData, DeleteExamGroupVariables>;
export function deleteExamGroup(dc: DataConnect, vars: DeleteExamGroupVariables): MutationPromise<DeleteExamGroupData, DeleteExamGroupVariables>;

interface CreateExamEditionRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateExamEditionVariables): MutationRef<CreateExamEditionData, CreateExamEditionVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateExamEditionVariables): MutationRef<CreateExamEditionData, CreateExamEditionVariables>;
  operationName: string;
}
export const createExamEditionRef: CreateExamEditionRef;

export function createExamEdition(vars: CreateExamEditionVariables): MutationPromise<CreateExamEditionData, CreateExamEditionVariables>;
export function createExamEdition(dc: DataConnect, vars: CreateExamEditionVariables): MutationPromise<CreateExamEditionData, CreateExamEditionVariables>;

interface UpdateExamEditionRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateExamEditionVariables): MutationRef<UpdateExamEditionData, UpdateExamEditionVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateExamEditionVariables): MutationRef<UpdateExamEditionData, UpdateExamEditionVariables>;
  operationName: string;
}
export const updateExamEditionRef: UpdateExamEditionRef;

export function updateExamEdition(vars: UpdateExamEditionVariables): MutationPromise<UpdateExamEditionData, UpdateExamEditionVariables>;
export function updateExamEdition(dc: DataConnect, vars: UpdateExamEditionVariables): MutationPromise<UpdateExamEditionData, UpdateExamEditionVariables>;

interface DeleteExamEditionRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteExamEditionVariables): MutationRef<DeleteExamEditionData, DeleteExamEditionVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteExamEditionVariables): MutationRef<DeleteExamEditionData, DeleteExamEditionVariables>;
  operationName: string;
}
export const deleteExamEditionRef: DeleteExamEditionRef;

export function deleteExamEdition(vars: DeleteExamEditionVariables): MutationPromise<DeleteExamEditionData, DeleteExamEditionVariables>;
export function deleteExamEdition(dc: DataConnect, vars: DeleteExamEditionVariables): MutationPromise<DeleteExamEditionData, DeleteExamEditionVariables>;

interface CreateExamRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateExamVariables): MutationRef<CreateExamData, CreateExamVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateExamVariables): MutationRef<CreateExamData, CreateExamVariables>;
  operationName: string;
}
export const createExamRef: CreateExamRef;

export function createExam(vars: CreateExamVariables): MutationPromise<CreateExamData, CreateExamVariables>;
export function createExam(dc: DataConnect, vars: CreateExamVariables): MutationPromise<CreateExamData, CreateExamVariables>;

interface UpdateExamRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateExamVariables): MutationRef<UpdateExamData, UpdateExamVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateExamVariables): MutationRef<UpdateExamData, UpdateExamVariables>;
  operationName: string;
}
export const updateExamRef: UpdateExamRef;

export function updateExam(vars: UpdateExamVariables): MutationPromise<UpdateExamData, UpdateExamVariables>;
export function updateExam(dc: DataConnect, vars: UpdateExamVariables): MutationPromise<UpdateExamData, UpdateExamVariables>;

interface DeleteExamRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteExamVariables): MutationRef<DeleteExamData, DeleteExamVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteExamVariables): MutationRef<DeleteExamData, DeleteExamVariables>;
  operationName: string;
}
export const deleteExamRef: DeleteExamRef;

export function deleteExam(vars: DeleteExamVariables): MutationPromise<DeleteExamData, DeleteExamVariables>;
export function deleteExam(dc: DataConnect, vars: DeleteExamVariables): MutationPromise<DeleteExamData, DeleteExamVariables>;

interface CreateTopicRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateTopicVariables): MutationRef<CreateTopicData, CreateTopicVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateTopicVariables): MutationRef<CreateTopicData, CreateTopicVariables>;
  operationName: string;
}
export const createTopicRef: CreateTopicRef;

export function createTopic(vars: CreateTopicVariables): MutationPromise<CreateTopicData, CreateTopicVariables>;
export function createTopic(dc: DataConnect, vars: CreateTopicVariables): MutationPromise<CreateTopicData, CreateTopicVariables>;

interface DeleteTopicRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteTopicVariables): MutationRef<DeleteTopicData, DeleteTopicVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteTopicVariables): MutationRef<DeleteTopicData, DeleteTopicVariables>;
  operationName: string;
}
export const deleteTopicRef: DeleteTopicRef;

export function deleteTopic(vars: DeleteTopicVariables): MutationPromise<DeleteTopicData, DeleteTopicVariables>;
export function deleteTopic(dc: DataConnect, vars: DeleteTopicVariables): MutationPromise<DeleteTopicData, DeleteTopicVariables>;

interface CreateQuestionRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateQuestionVariables): MutationRef<CreateQuestionData, CreateQuestionVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateQuestionVariables): MutationRef<CreateQuestionData, CreateQuestionVariables>;
  operationName: string;
}
export const createQuestionRef: CreateQuestionRef;

export function createQuestion(vars: CreateQuestionVariables): MutationPromise<CreateQuestionData, CreateQuestionVariables>;
export function createQuestion(dc: DataConnect, vars: CreateQuestionVariables): MutationPromise<CreateQuestionData, CreateQuestionVariables>;

interface UpdateQuestionRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateQuestionVariables): MutationRef<UpdateQuestionData, UpdateQuestionVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateQuestionVariables): MutationRef<UpdateQuestionData, UpdateQuestionVariables>;
  operationName: string;
}
export const updateQuestionRef: UpdateQuestionRef;

export function updateQuestion(vars: UpdateQuestionVariables): MutationPromise<UpdateQuestionData, UpdateQuestionVariables>;
export function updateQuestion(dc: DataConnect, vars: UpdateQuestionVariables): MutationPromise<UpdateQuestionData, UpdateQuestionVariables>;

interface DeleteAnswerOptionsByQuestionRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteAnswerOptionsByQuestionVariables): MutationRef<DeleteAnswerOptionsByQuestionData, DeleteAnswerOptionsByQuestionVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteAnswerOptionsByQuestionVariables): MutationRef<DeleteAnswerOptionsByQuestionData, DeleteAnswerOptionsByQuestionVariables>;
  operationName: string;
}
export const deleteAnswerOptionsByQuestionRef: DeleteAnswerOptionsByQuestionRef;

export function deleteAnswerOptionsByQuestion(vars: DeleteAnswerOptionsByQuestionVariables): MutationPromise<DeleteAnswerOptionsByQuestionData, DeleteAnswerOptionsByQuestionVariables>;
export function deleteAnswerOptionsByQuestion(dc: DataConnect, vars: DeleteAnswerOptionsByQuestionVariables): MutationPromise<DeleteAnswerOptionsByQuestionData, DeleteAnswerOptionsByQuestionVariables>;

interface DeleteQuestionRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteQuestionVariables): MutationRef<DeleteQuestionData, DeleteQuestionVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteQuestionVariables): MutationRef<DeleteQuestionData, DeleteQuestionVariables>;
  operationName: string;
}
export const deleteQuestionRef: DeleteQuestionRef;

export function deleteQuestion(vars: DeleteQuestionVariables): MutationPromise<DeleteQuestionData, DeleteQuestionVariables>;
export function deleteQuestion(dc: DataConnect, vars: DeleteQuestionVariables): MutationPromise<DeleteQuestionData, DeleteQuestionVariables>;

interface ReplaceAnswerOptionsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ReplaceAnswerOptionsVariables): MutationRef<ReplaceAnswerOptionsData, ReplaceAnswerOptionsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ReplaceAnswerOptionsVariables): MutationRef<ReplaceAnswerOptionsData, ReplaceAnswerOptionsVariables>;
  operationName: string;
}
export const replaceAnswerOptionsRef: ReplaceAnswerOptionsRef;

export function replaceAnswerOptions(vars: ReplaceAnswerOptionsVariables): MutationPromise<ReplaceAnswerOptionsData, ReplaceAnswerOptionsVariables>;
export function replaceAnswerOptions(dc: DataConnect, vars: ReplaceAnswerOptionsVariables): MutationPromise<ReplaceAnswerOptionsData, ReplaceAnswerOptionsVariables>;

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

interface GetUserRoleRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUserRoleVariables): QueryRef<GetUserRoleData, GetUserRoleVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetUserRoleVariables): QueryRef<GetUserRoleData, GetUserRoleVariables>;
  operationName: string;
}
export const getUserRoleRef: GetUserRoleRef;

export function getUserRole(vars: GetUserRoleVariables, options?: ExecuteQueryOptions): QueryPromise<GetUserRoleData, GetUserRoleVariables>;
export function getUserRole(dc: DataConnect, vars: GetUserRoleVariables, options?: ExecuteQueryOptions): QueryPromise<GetUserRoleData, GetUserRoleVariables>;

interface AdminListGroupsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AdminListGroupsVariables): QueryRef<AdminListGroupsData, AdminListGroupsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AdminListGroupsVariables): QueryRef<AdminListGroupsData, AdminListGroupsVariables>;
  operationName: string;
}
export const adminListGroupsRef: AdminListGroupsRef;

export function adminListGroups(vars: AdminListGroupsVariables, options?: ExecuteQueryOptions): QueryPromise<AdminListGroupsData, AdminListGroupsVariables>;
export function adminListGroups(dc: DataConnect, vars: AdminListGroupsVariables, options?: ExecuteQueryOptions): QueryPromise<AdminListGroupsData, AdminListGroupsVariables>;

interface AdminListEditionsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AdminListEditionsVariables): QueryRef<AdminListEditionsData, AdminListEditionsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AdminListEditionsVariables): QueryRef<AdminListEditionsData, AdminListEditionsVariables>;
  operationName: string;
}
export const adminListEditionsRef: AdminListEditionsRef;

export function adminListEditions(vars: AdminListEditionsVariables, options?: ExecuteQueryOptions): QueryPromise<AdminListEditionsData, AdminListEditionsVariables>;
export function adminListEditions(dc: DataConnect, vars: AdminListEditionsVariables, options?: ExecuteQueryOptions): QueryPromise<AdminListEditionsData, AdminListEditionsVariables>;

interface AdminListExamsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AdminListExamsVariables): QueryRef<AdminListExamsData, AdminListExamsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AdminListExamsVariables): QueryRef<AdminListExamsData, AdminListExamsVariables>;
  operationName: string;
}
export const adminListExamsRef: AdminListExamsRef;

export function adminListExams(vars: AdminListExamsVariables, options?: ExecuteQueryOptions): QueryPromise<AdminListExamsData, AdminListExamsVariables>;
export function adminListExams(dc: DataConnect, vars: AdminListExamsVariables, options?: ExecuteQueryOptions): QueryPromise<AdminListExamsData, AdminListExamsVariables>;

interface AdminListTopicsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AdminListTopicsVariables): QueryRef<AdminListTopicsData, AdminListTopicsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AdminListTopicsVariables): QueryRef<AdminListTopicsData, AdminListTopicsVariables>;
  operationName: string;
}
export const adminListTopicsRef: AdminListTopicsRef;

export function adminListTopics(vars: AdminListTopicsVariables, options?: ExecuteQueryOptions): QueryPromise<AdminListTopicsData, AdminListTopicsVariables>;
export function adminListTopics(dc: DataConnect, vars: AdminListTopicsVariables, options?: ExecuteQueryOptions): QueryPromise<AdminListTopicsData, AdminListTopicsVariables>;

interface AdminListQuestionsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AdminListQuestionsVariables): QueryRef<AdminListQuestionsData, AdminListQuestionsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AdminListQuestionsVariables): QueryRef<AdminListQuestionsData, AdminListQuestionsVariables>;
  operationName: string;
}
export const adminListQuestionsRef: AdminListQuestionsRef;

export function adminListQuestions(vars: AdminListQuestionsVariables, options?: ExecuteQueryOptions): QueryPromise<AdminListQuestionsData, AdminListQuestionsVariables>;
export function adminListQuestions(dc: DataConnect, vars: AdminListQuestionsVariables, options?: ExecuteQueryOptions): QueryPromise<AdminListQuestionsData, AdminListQuestionsVariables>;

interface AdminGetQuestionRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AdminGetQuestionVariables): QueryRef<AdminGetQuestionData, AdminGetQuestionVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AdminGetQuestionVariables): QueryRef<AdminGetQuestionData, AdminGetQuestionVariables>;
  operationName: string;
}
export const adminGetQuestionRef: AdminGetQuestionRef;

export function adminGetQuestion(vars: AdminGetQuestionVariables, options?: ExecuteQueryOptions): QueryPromise<AdminGetQuestionData, AdminGetQuestionVariables>;
export function adminGetQuestion(dc: DataConnect, vars: AdminGetQuestionVariables, options?: ExecuteQueryOptions): QueryPromise<AdminGetQuestionData, AdminGetQuestionVariables>;

