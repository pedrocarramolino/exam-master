import type {
  AnswerOptionInput,
  Exam,
  ExamCategory,
  ExamEdition,
  ExamGroup,
  Question,
  QuestionDifficulty,
  Topic,
} from '@/domain/entities/content';

export interface CreateCategoryInput {
  name: string;
  slug: string;
  description?: string | null;
}
export interface CreateGroupInput {
  categoryId: string;
  name: string;
  slug: string;
}
export interface CreateEditionInput {
  groupId: string;
  year: number;
  label?: string | null;
}
export interface CreateExamInput {
  editionId: string;
  title: string;
  description?: string | null;
  durationMinutes: number;
}
export interface CreateQuestionInput {
  examId: string;
  topicId?: string | null;
  statement: string;
  explanation?: string | null;
  difficulty: QuestionDifficulty;
  options: AnswerOptionInput[];
}

/**
 * Contrato del árbol de contenido administrable. Solo se ejecuta en servidor,
 * con privilegios de Admin SDK (bypassa las políticas @auth de Data Connect).
 */
export interface ContentRepository {
  listCategories(): Promise<ExamCategory[]>;
  createCategory(input: CreateCategoryInput): Promise<void>;
  updateCategory(id: string, input: CreateCategoryInput): Promise<void>;
  deleteCategory(id: string): Promise<void>;

  listGroups(categoryId: string): Promise<ExamGroup[]>;
  createGroup(input: CreateGroupInput): Promise<void>;
  updateGroup(id: string, input: Omit<CreateGroupInput, 'categoryId'>): Promise<void>;
  deleteGroup(id: string): Promise<void>;

  listEditions(groupId: string): Promise<ExamEdition[]>;
  createEdition(input: CreateEditionInput): Promise<void>;
  updateEdition(id: string, input: Omit<CreateEditionInput, 'groupId'>): Promise<void>;
  deleteEdition(id: string): Promise<void>;

  listExams(editionId: string): Promise<Exam[]>;
  createExam(input: CreateExamInput): Promise<void>;
  updateExam(id: string, input: Omit<CreateExamInput, 'editionId'>): Promise<void>;
  deleteExam(id: string): Promise<void>;

  listTopics(categoryId: string): Promise<Topic[]>;
  createTopic(categoryId: string, name: string): Promise<Topic>;
  deleteTopic(id: string): Promise<void>;

  listQuestions(examId: string): Promise<Question[]>;
  getQuestion(id: string): Promise<Question | null>;
  createQuestion(input: CreateQuestionInput): Promise<void>;
  updateQuestion(id: string, input: Omit<CreateQuestionInput, 'examId'>): Promise<void>;
  deleteQuestion(id: string): Promise<void>;
}
