import 'server-only';

import type {
  AdminGetQuestionData,
  AdminGetQuestionVariables,
  AdminListEditionsData,
  AdminListEditionsVariables,
  AdminListExamsData,
  AdminListExamsVariables,
  AdminListGroupsData,
  AdminListGroupsVariables,
  AdminListQuestionsData,
  AdminListQuestionsVariables,
  AdminListTopicsData,
  AdminListTopicsVariables,
  CreateExamCategoryData,
  CreateExamCategoryVariables,
  CreateExamData,
  CreateExamEditionData,
  CreateExamEditionVariables,
  CreateExamGroupData,
  CreateExamGroupVariables,
  CreateExamVariables,
  CreateQuestionData,
  CreateQuestionVariables,
  CreateTopicData,
  CreateTopicVariables,
  DeleteExamCategoryData,
  DeleteExamCategoryVariables,
  DeleteExamData,
  DeleteExamEditionData,
  DeleteExamEditionVariables,
  DeleteAnswerOptionsByQuestionData,
  DeleteAnswerOptionsByQuestionVariables,
  DeleteExamGroupData,
  DeleteExamGroupVariables,
  DeleteExamVariables,
  DeleteQuestionData,
  DeleteQuestionVariables,
  DeleteTopicData,
  DeleteTopicVariables,
  ListExamCategoriesData,
  ReplaceAnswerOptionsData,
  ReplaceAnswerOptionsVariables,
  UpdateExamCategoryData,
  UpdateExamCategoryVariables,
  UpdateExamData,
  UpdateExamEditionData,
  UpdateExamEditionVariables,
  UpdateExamGroupData,
  UpdateExamGroupVariables,
  UpdateExamVariables,
  UpdateQuestionData,
  UpdateQuestionVariables,
  QuestionDifficulty as GeneratedQuestionDifficulty,
} from '@dataconnect/generated';

import type {
  AnswerOptionInput,
  Exam,
  ExamCategory,
  ExamEdition,
  ExamGroup,
  Question,
  Topic,
} from '@/domain/entities/content';
import type {
  ContentRepository,
  CreateCategoryInput,
  CreateEditionInput,
  CreateExamInput,
  CreateGroupInput,
  CreateQuestionInput,
} from '@/domain/repositories/content-repository';
import { dataConnectAdmin } from '@/infrastructure/firebase/data-connect-admin';

const ANSWER_OPTIONS_COUNT = 4;

function toOptionVariables(options: AnswerOptionInput[]) {
  if (options.length !== ANSWER_OPTIONS_COUNT) {
    throw new Error(`Cada pregunta debe tener exactamente ${ANSWER_OPTIONS_COUNT} respuestas.`);
  }
  return {
    option1Text: options[0]!.text,
    option1IsCorrect: options[0]!.isCorrect,
    option2Text: options[1]!.text,
    option2IsCorrect: options[1]!.isCorrect,
    option3Text: options[2]!.text,
    option3IsCorrect: options[2]!.isCorrect,
    option4Text: options[3]!.text,
    option4IsCorrect: options[3]!.isCorrect,
  };
}

export class DataConnectContentRepository implements ContentRepository {
  async listCategories(): Promise<ExamCategory[]> {
    const { data } = await dataConnectAdmin.executeQuery<ListExamCategoriesData, undefined>(
      'ListExamCategories',
      undefined,
    );
    return data.examCategories.map((c) => ({ ...c, description: c.description ?? null }));
  }

  async createCategory(input: CreateCategoryInput): Promise<void> {
    await dataConnectAdmin.executeMutation<CreateExamCategoryData, CreateExamCategoryVariables>(
      'CreateExamCategory',
      { name: input.name, slug: input.slug, description: input.description },
    );
  }

  async updateCategory(id: string, input: CreateCategoryInput): Promise<void> {
    await dataConnectAdmin.executeMutation<UpdateExamCategoryData, UpdateExamCategoryVariables>(
      'UpdateExamCategory',
      { categoryId: id, name: input.name, slug: input.slug, description: input.description },
    );
  }

  async deleteCategory(id: string): Promise<void> {
    await dataConnectAdmin.executeMutation<DeleteExamCategoryData, DeleteExamCategoryVariables>(
      'DeleteExamCategory',
      { categoryId: id },
    );
  }

  async listGroups(categoryId: string): Promise<ExamGroup[]> {
    const { data } = await dataConnectAdmin.executeQuery<
      AdminListGroupsData,
      AdminListGroupsVariables
    >('AdminListGroups', { categoryId });
    return data.examGroups;
  }

  async createGroup(input: CreateGroupInput): Promise<void> {
    await dataConnectAdmin.executeMutation<CreateExamGroupData, CreateExamGroupVariables>(
      'CreateExamGroup',
      input,
    );
  }

  async updateGroup(id: string, input: Omit<CreateGroupInput, 'categoryId'>): Promise<void> {
    await dataConnectAdmin.executeMutation<UpdateExamGroupData, UpdateExamGroupVariables>(
      'UpdateExamGroup',
      { groupId: id, name: input.name, slug: input.slug },
    );
  }

  async deleteGroup(id: string): Promise<void> {
    await dataConnectAdmin.executeMutation<DeleteExamGroupData, DeleteExamGroupVariables>(
      'DeleteExamGroup',
      { groupId: id },
    );
  }

  async listEditions(groupId: string): Promise<ExamEdition[]> {
    const { data } = await dataConnectAdmin.executeQuery<
      AdminListEditionsData,
      AdminListEditionsVariables
    >('AdminListEditions', { groupId });
    return data.examEditions.map((e) => ({
      ...e,
      label: e.label ?? null,
      examDate: e.examDate ?? null,
    }));
  }

  async createEdition(input: CreateEditionInput): Promise<void> {
    await dataConnectAdmin.executeMutation<CreateExamEditionData, CreateExamEditionVariables>(
      'CreateExamEdition',
      { groupId: input.groupId, year: input.year, label: input.label },
    );
  }

  async updateEdition(id: string, input: Omit<CreateEditionInput, 'groupId'>): Promise<void> {
    await dataConnectAdmin.executeMutation<UpdateExamEditionData, UpdateExamEditionVariables>(
      'UpdateExamEdition',
      { editionId: id, year: input.year, label: input.label },
    );
  }

  async deleteEdition(id: string): Promise<void> {
    await dataConnectAdmin.executeMutation<DeleteExamEditionData, DeleteExamEditionVariables>(
      'DeleteExamEdition',
      { editionId: id },
    );
  }

  async listExams(editionId: string): Promise<Exam[]> {
    const { data } = await dataConnectAdmin.executeQuery<
      AdminListExamsData,
      AdminListExamsVariables
    >('AdminListExams', { editionId });
    return data.exams.map((e) => ({ ...e, description: e.description ?? null }));
  }

  async createExam(input: CreateExamInput): Promise<void> {
    await dataConnectAdmin.executeMutation<CreateExamData, CreateExamVariables>('CreateExam', {
      editionId: input.editionId,
      title: input.title,
      description: input.description,
      durationMinutes: input.durationMinutes,
    });
  }

  async updateExam(id: string, input: Omit<CreateExamInput, 'editionId'>): Promise<void> {
    await dataConnectAdmin.executeMutation<UpdateExamData, UpdateExamVariables>('UpdateExam', {
      examId: id,
      title: input.title,
      description: input.description,
      durationMinutes: input.durationMinutes,
    });
  }

  async deleteExam(id: string): Promise<void> {
    await dataConnectAdmin.executeMutation<DeleteExamData, DeleteExamVariables>('DeleteExam', {
      examId: id,
    });
  }

  async listTopics(categoryId: string): Promise<Topic[]> {
    const { data } = await dataConnectAdmin.executeQuery<
      AdminListTopicsData,
      AdminListTopicsVariables
    >('AdminListTopics', { categoryId });
    return data.topics;
  }

  async createTopic(categoryId: string, name: string): Promise<Topic> {
    const { data } = await dataConnectAdmin.executeMutation<CreateTopicData, CreateTopicVariables>(
      'CreateTopic',
      { categoryId, name },
    );
    return { id: data.topic_insert.id, categoryId, name };
  }

  async deleteTopic(id: string): Promise<void> {
    await dataConnectAdmin.executeMutation<DeleteTopicData, DeleteTopicVariables>('DeleteTopic', {
      topicId: id,
    });
  }

  async listQuestions(examId: string): Promise<Question[]> {
    const { data } = await dataConnectAdmin.executeQuery<
      AdminListQuestionsData,
      AdminListQuestionsVariables
    >('AdminListQuestions', { examId });
    return data.questions.map((q) => ({
      id: q.id,
      examId: q.examId,
      topicId: q.topicId ?? null,
      statement: q.statement,
      explanation: q.explanation ?? null,
      difficulty: q.difficulty,
      options: q.optionsForList,
    }));
  }

  async getQuestion(id: string): Promise<Question | null> {
    const { data } = await dataConnectAdmin.executeQuery<
      AdminGetQuestionData,
      AdminGetQuestionVariables
    >('AdminGetQuestion', { questionId: id });
    const q = data.question;
    if (!q) return null;
    return {
      id: q.id,
      examId: q.examId,
      topicId: q.topicId ?? null,
      statement: q.statement,
      explanation: q.explanation ?? null,
      difficulty: q.difficulty,
      options: q.optionsForGet,
    };
  }

  async createQuestion(input: CreateQuestionInput): Promise<void> {
    await dataConnectAdmin.executeMutation<CreateQuestionData, CreateQuestionVariables>(
      'CreateQuestion',
      {
        examId: input.examId,
        topicId: input.topicId,
        statement: input.statement,
        explanation: input.explanation,
        difficulty: input.difficulty as GeneratedQuestionDifficulty,
        ...toOptionVariables(input.options),
      },
    );
  }

  async updateQuestion(id: string, input: Omit<CreateQuestionInput, 'examId'>): Promise<void> {
    await dataConnectAdmin.executeMutation<UpdateQuestionData, UpdateQuestionVariables>(
      'UpdateQuestion',
      {
        questionId: id,
        topicId: input.topicId,
        statement: input.statement,
        explanation: input.explanation,
        difficulty: input.difficulty as GeneratedQuestionDifficulty,
      },
    );
    await dataConnectAdmin.executeMutation<ReplaceAnswerOptionsData, ReplaceAnswerOptionsVariables>(
      'ReplaceAnswerOptions',
      { questionId: id, ...toOptionVariables(input.options) },
    );
  }

  async deleteQuestion(id: string): Promise<void> {
    // AnswerOption.question es NOT NULL: hay que borrar las opciones antes que la pregunta.
    await dataConnectAdmin.executeMutation<
      DeleteAnswerOptionsByQuestionData,
      DeleteAnswerOptionsByQuestionVariables
    >('DeleteAnswerOptionsByQuestion', { questionId: id });
    await dataConnectAdmin.executeMutation<DeleteQuestionData, DeleteQuestionVariables>(
      'DeleteQuestion',
      { questionId: id },
    );
  }
}
