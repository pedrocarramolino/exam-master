import { UpsertUserData, UpsertUserVariables, CreateExamCategoryData, CreateExamCategoryVariables, UpdateExamCategoryData, UpdateExamCategoryVariables, DeleteExamCategoryData, DeleteExamCategoryVariables, CreateExamGroupData, CreateExamGroupVariables, UpdateExamGroupData, UpdateExamGroupVariables, DeleteExamGroupData, DeleteExamGroupVariables, CreateExamEditionData, CreateExamEditionVariables, UpdateExamEditionData, UpdateExamEditionVariables, DeleteExamEditionData, DeleteExamEditionVariables, CreateExamData, CreateExamVariables, UpdateExamData, UpdateExamVariables, DeleteExamData, DeleteExamVariables, CreateTopicData, CreateTopicVariables, DeleteTopicData, DeleteTopicVariables, CreateQuestionData, CreateQuestionVariables, UpdateQuestionData, UpdateQuestionVariables, DeleteAnswerOptionsByQuestionData, DeleteAnswerOptionsByQuestionVariables, DeleteQuestionData, DeleteQuestionVariables, ReplaceAnswerOptionsData, ReplaceAnswerOptionsVariables, ListExamCategoriesData, ListExamGroupsByCategoryData, ListExamGroupsByCategoryVariables, ListExamEditionsByGroupData, ListExamEditionsByGroupVariables, ListExamsByEditionData, ListExamsByEditionVariables, GetExamForAttemptData, GetExamForAttemptVariables, GetAttemptReviewData, GetAttemptReviewVariables, GetMyAttemptsData, GetAttemptByIdData, GetAttemptByIdVariables, GetUserRoleData, GetUserRoleVariables, AdminListGroupsData, AdminListGroupsVariables, AdminListEditionsData, AdminListEditionsVariables, AdminListExamsData, AdminListExamsVariables, AdminListTopicsData, AdminListTopicsVariables, AdminListQuestionsData, AdminListQuestionsVariables, AdminGetQuestionData, AdminGetQuestionVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useUpsertUser(options?: useDataConnectMutationOptions<UpsertUserData, FirebaseError, UpsertUserVariables>): UseDataConnectMutationResult<UpsertUserData, UpsertUserVariables>;
export function useUpsertUser(dc: DataConnect, options?: useDataConnectMutationOptions<UpsertUserData, FirebaseError, UpsertUserVariables>): UseDataConnectMutationResult<UpsertUserData, UpsertUserVariables>;

export function useCreateExamCategory(options?: useDataConnectMutationOptions<CreateExamCategoryData, FirebaseError, CreateExamCategoryVariables>): UseDataConnectMutationResult<CreateExamCategoryData, CreateExamCategoryVariables>;
export function useCreateExamCategory(dc: DataConnect, options?: useDataConnectMutationOptions<CreateExamCategoryData, FirebaseError, CreateExamCategoryVariables>): UseDataConnectMutationResult<CreateExamCategoryData, CreateExamCategoryVariables>;

export function useUpdateExamCategory(options?: useDataConnectMutationOptions<UpdateExamCategoryData, FirebaseError, UpdateExamCategoryVariables>): UseDataConnectMutationResult<UpdateExamCategoryData, UpdateExamCategoryVariables>;
export function useUpdateExamCategory(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateExamCategoryData, FirebaseError, UpdateExamCategoryVariables>): UseDataConnectMutationResult<UpdateExamCategoryData, UpdateExamCategoryVariables>;

export function useDeleteExamCategory(options?: useDataConnectMutationOptions<DeleteExamCategoryData, FirebaseError, DeleteExamCategoryVariables>): UseDataConnectMutationResult<DeleteExamCategoryData, DeleteExamCategoryVariables>;
export function useDeleteExamCategory(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteExamCategoryData, FirebaseError, DeleteExamCategoryVariables>): UseDataConnectMutationResult<DeleteExamCategoryData, DeleteExamCategoryVariables>;

export function useCreateExamGroup(options?: useDataConnectMutationOptions<CreateExamGroupData, FirebaseError, CreateExamGroupVariables>): UseDataConnectMutationResult<CreateExamGroupData, CreateExamGroupVariables>;
export function useCreateExamGroup(dc: DataConnect, options?: useDataConnectMutationOptions<CreateExamGroupData, FirebaseError, CreateExamGroupVariables>): UseDataConnectMutationResult<CreateExamGroupData, CreateExamGroupVariables>;

export function useUpdateExamGroup(options?: useDataConnectMutationOptions<UpdateExamGroupData, FirebaseError, UpdateExamGroupVariables>): UseDataConnectMutationResult<UpdateExamGroupData, UpdateExamGroupVariables>;
export function useUpdateExamGroup(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateExamGroupData, FirebaseError, UpdateExamGroupVariables>): UseDataConnectMutationResult<UpdateExamGroupData, UpdateExamGroupVariables>;

export function useDeleteExamGroup(options?: useDataConnectMutationOptions<DeleteExamGroupData, FirebaseError, DeleteExamGroupVariables>): UseDataConnectMutationResult<DeleteExamGroupData, DeleteExamGroupVariables>;
export function useDeleteExamGroup(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteExamGroupData, FirebaseError, DeleteExamGroupVariables>): UseDataConnectMutationResult<DeleteExamGroupData, DeleteExamGroupVariables>;

export function useCreateExamEdition(options?: useDataConnectMutationOptions<CreateExamEditionData, FirebaseError, CreateExamEditionVariables>): UseDataConnectMutationResult<CreateExamEditionData, CreateExamEditionVariables>;
export function useCreateExamEdition(dc: DataConnect, options?: useDataConnectMutationOptions<CreateExamEditionData, FirebaseError, CreateExamEditionVariables>): UseDataConnectMutationResult<CreateExamEditionData, CreateExamEditionVariables>;

export function useUpdateExamEdition(options?: useDataConnectMutationOptions<UpdateExamEditionData, FirebaseError, UpdateExamEditionVariables>): UseDataConnectMutationResult<UpdateExamEditionData, UpdateExamEditionVariables>;
export function useUpdateExamEdition(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateExamEditionData, FirebaseError, UpdateExamEditionVariables>): UseDataConnectMutationResult<UpdateExamEditionData, UpdateExamEditionVariables>;

export function useDeleteExamEdition(options?: useDataConnectMutationOptions<DeleteExamEditionData, FirebaseError, DeleteExamEditionVariables>): UseDataConnectMutationResult<DeleteExamEditionData, DeleteExamEditionVariables>;
export function useDeleteExamEdition(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteExamEditionData, FirebaseError, DeleteExamEditionVariables>): UseDataConnectMutationResult<DeleteExamEditionData, DeleteExamEditionVariables>;

export function useCreateExam(options?: useDataConnectMutationOptions<CreateExamData, FirebaseError, CreateExamVariables>): UseDataConnectMutationResult<CreateExamData, CreateExamVariables>;
export function useCreateExam(dc: DataConnect, options?: useDataConnectMutationOptions<CreateExamData, FirebaseError, CreateExamVariables>): UseDataConnectMutationResult<CreateExamData, CreateExamVariables>;

export function useUpdateExam(options?: useDataConnectMutationOptions<UpdateExamData, FirebaseError, UpdateExamVariables>): UseDataConnectMutationResult<UpdateExamData, UpdateExamVariables>;
export function useUpdateExam(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateExamData, FirebaseError, UpdateExamVariables>): UseDataConnectMutationResult<UpdateExamData, UpdateExamVariables>;

export function useDeleteExam(options?: useDataConnectMutationOptions<DeleteExamData, FirebaseError, DeleteExamVariables>): UseDataConnectMutationResult<DeleteExamData, DeleteExamVariables>;
export function useDeleteExam(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteExamData, FirebaseError, DeleteExamVariables>): UseDataConnectMutationResult<DeleteExamData, DeleteExamVariables>;

export function useCreateTopic(options?: useDataConnectMutationOptions<CreateTopicData, FirebaseError, CreateTopicVariables>): UseDataConnectMutationResult<CreateTopicData, CreateTopicVariables>;
export function useCreateTopic(dc: DataConnect, options?: useDataConnectMutationOptions<CreateTopicData, FirebaseError, CreateTopicVariables>): UseDataConnectMutationResult<CreateTopicData, CreateTopicVariables>;

export function useDeleteTopic(options?: useDataConnectMutationOptions<DeleteTopicData, FirebaseError, DeleteTopicVariables>): UseDataConnectMutationResult<DeleteTopicData, DeleteTopicVariables>;
export function useDeleteTopic(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteTopicData, FirebaseError, DeleteTopicVariables>): UseDataConnectMutationResult<DeleteTopicData, DeleteTopicVariables>;

export function useCreateQuestion(options?: useDataConnectMutationOptions<CreateQuestionData, FirebaseError, CreateQuestionVariables>): UseDataConnectMutationResult<CreateQuestionData, CreateQuestionVariables>;
export function useCreateQuestion(dc: DataConnect, options?: useDataConnectMutationOptions<CreateQuestionData, FirebaseError, CreateQuestionVariables>): UseDataConnectMutationResult<CreateQuestionData, CreateQuestionVariables>;

export function useUpdateQuestion(options?: useDataConnectMutationOptions<UpdateQuestionData, FirebaseError, UpdateQuestionVariables>): UseDataConnectMutationResult<UpdateQuestionData, UpdateQuestionVariables>;
export function useUpdateQuestion(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateQuestionData, FirebaseError, UpdateQuestionVariables>): UseDataConnectMutationResult<UpdateQuestionData, UpdateQuestionVariables>;

export function useDeleteAnswerOptionsByQuestion(options?: useDataConnectMutationOptions<DeleteAnswerOptionsByQuestionData, FirebaseError, DeleteAnswerOptionsByQuestionVariables>): UseDataConnectMutationResult<DeleteAnswerOptionsByQuestionData, DeleteAnswerOptionsByQuestionVariables>;
export function useDeleteAnswerOptionsByQuestion(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteAnswerOptionsByQuestionData, FirebaseError, DeleteAnswerOptionsByQuestionVariables>): UseDataConnectMutationResult<DeleteAnswerOptionsByQuestionData, DeleteAnswerOptionsByQuestionVariables>;

export function useDeleteQuestion(options?: useDataConnectMutationOptions<DeleteQuestionData, FirebaseError, DeleteQuestionVariables>): UseDataConnectMutationResult<DeleteQuestionData, DeleteQuestionVariables>;
export function useDeleteQuestion(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteQuestionData, FirebaseError, DeleteQuestionVariables>): UseDataConnectMutationResult<DeleteQuestionData, DeleteQuestionVariables>;

export function useReplaceAnswerOptions(options?: useDataConnectMutationOptions<ReplaceAnswerOptionsData, FirebaseError, ReplaceAnswerOptionsVariables>): UseDataConnectMutationResult<ReplaceAnswerOptionsData, ReplaceAnswerOptionsVariables>;
export function useReplaceAnswerOptions(dc: DataConnect, options?: useDataConnectMutationOptions<ReplaceAnswerOptionsData, FirebaseError, ReplaceAnswerOptionsVariables>): UseDataConnectMutationResult<ReplaceAnswerOptionsData, ReplaceAnswerOptionsVariables>;

export function useListExamCategories(options?: useDataConnectQueryOptions<ListExamCategoriesData>): UseDataConnectQueryResult<ListExamCategoriesData, undefined>;
export function useListExamCategories(dc: DataConnect, options?: useDataConnectQueryOptions<ListExamCategoriesData>): UseDataConnectQueryResult<ListExamCategoriesData, undefined>;

export function useListExamGroupsByCategory(vars: ListExamGroupsByCategoryVariables, options?: useDataConnectQueryOptions<ListExamGroupsByCategoryData>): UseDataConnectQueryResult<ListExamGroupsByCategoryData, ListExamGroupsByCategoryVariables>;
export function useListExamGroupsByCategory(dc: DataConnect, vars: ListExamGroupsByCategoryVariables, options?: useDataConnectQueryOptions<ListExamGroupsByCategoryData>): UseDataConnectQueryResult<ListExamGroupsByCategoryData, ListExamGroupsByCategoryVariables>;

export function useListExamEditionsByGroup(vars: ListExamEditionsByGroupVariables, options?: useDataConnectQueryOptions<ListExamEditionsByGroupData>): UseDataConnectQueryResult<ListExamEditionsByGroupData, ListExamEditionsByGroupVariables>;
export function useListExamEditionsByGroup(dc: DataConnect, vars: ListExamEditionsByGroupVariables, options?: useDataConnectQueryOptions<ListExamEditionsByGroupData>): UseDataConnectQueryResult<ListExamEditionsByGroupData, ListExamEditionsByGroupVariables>;

export function useListExamsByEdition(vars: ListExamsByEditionVariables, options?: useDataConnectQueryOptions<ListExamsByEditionData>): UseDataConnectQueryResult<ListExamsByEditionData, ListExamsByEditionVariables>;
export function useListExamsByEdition(dc: DataConnect, vars: ListExamsByEditionVariables, options?: useDataConnectQueryOptions<ListExamsByEditionData>): UseDataConnectQueryResult<ListExamsByEditionData, ListExamsByEditionVariables>;

export function useGetExamForAttempt(vars: GetExamForAttemptVariables, options?: useDataConnectQueryOptions<GetExamForAttemptData>): UseDataConnectQueryResult<GetExamForAttemptData, GetExamForAttemptVariables>;
export function useGetExamForAttempt(dc: DataConnect, vars: GetExamForAttemptVariables, options?: useDataConnectQueryOptions<GetExamForAttemptData>): UseDataConnectQueryResult<GetExamForAttemptData, GetExamForAttemptVariables>;

export function useGetAttemptReview(vars: GetAttemptReviewVariables, options?: useDataConnectQueryOptions<GetAttemptReviewData>): UseDataConnectQueryResult<GetAttemptReviewData, GetAttemptReviewVariables>;
export function useGetAttemptReview(dc: DataConnect, vars: GetAttemptReviewVariables, options?: useDataConnectQueryOptions<GetAttemptReviewData>): UseDataConnectQueryResult<GetAttemptReviewData, GetAttemptReviewVariables>;

export function useGetMyAttempts(options?: useDataConnectQueryOptions<GetMyAttemptsData>): UseDataConnectQueryResult<GetMyAttemptsData, undefined>;
export function useGetMyAttempts(dc: DataConnect, options?: useDataConnectQueryOptions<GetMyAttemptsData>): UseDataConnectQueryResult<GetMyAttemptsData, undefined>;

export function useGetAttemptById(vars: GetAttemptByIdVariables, options?: useDataConnectQueryOptions<GetAttemptByIdData>): UseDataConnectQueryResult<GetAttemptByIdData, GetAttemptByIdVariables>;
export function useGetAttemptById(dc: DataConnect, vars: GetAttemptByIdVariables, options?: useDataConnectQueryOptions<GetAttemptByIdData>): UseDataConnectQueryResult<GetAttemptByIdData, GetAttemptByIdVariables>;

export function useGetUserRole(vars: GetUserRoleVariables, options?: useDataConnectQueryOptions<GetUserRoleData>): UseDataConnectQueryResult<GetUserRoleData, GetUserRoleVariables>;
export function useGetUserRole(dc: DataConnect, vars: GetUserRoleVariables, options?: useDataConnectQueryOptions<GetUserRoleData>): UseDataConnectQueryResult<GetUserRoleData, GetUserRoleVariables>;

export function useAdminListGroups(vars: AdminListGroupsVariables, options?: useDataConnectQueryOptions<AdminListGroupsData>): UseDataConnectQueryResult<AdminListGroupsData, AdminListGroupsVariables>;
export function useAdminListGroups(dc: DataConnect, vars: AdminListGroupsVariables, options?: useDataConnectQueryOptions<AdminListGroupsData>): UseDataConnectQueryResult<AdminListGroupsData, AdminListGroupsVariables>;

export function useAdminListEditions(vars: AdminListEditionsVariables, options?: useDataConnectQueryOptions<AdminListEditionsData>): UseDataConnectQueryResult<AdminListEditionsData, AdminListEditionsVariables>;
export function useAdminListEditions(dc: DataConnect, vars: AdminListEditionsVariables, options?: useDataConnectQueryOptions<AdminListEditionsData>): UseDataConnectQueryResult<AdminListEditionsData, AdminListEditionsVariables>;

export function useAdminListExams(vars: AdminListExamsVariables, options?: useDataConnectQueryOptions<AdminListExamsData>): UseDataConnectQueryResult<AdminListExamsData, AdminListExamsVariables>;
export function useAdminListExams(dc: DataConnect, vars: AdminListExamsVariables, options?: useDataConnectQueryOptions<AdminListExamsData>): UseDataConnectQueryResult<AdminListExamsData, AdminListExamsVariables>;

export function useAdminListTopics(vars: AdminListTopicsVariables, options?: useDataConnectQueryOptions<AdminListTopicsData>): UseDataConnectQueryResult<AdminListTopicsData, AdminListTopicsVariables>;
export function useAdminListTopics(dc: DataConnect, vars: AdminListTopicsVariables, options?: useDataConnectQueryOptions<AdminListTopicsData>): UseDataConnectQueryResult<AdminListTopicsData, AdminListTopicsVariables>;

export function useAdminListQuestions(vars: AdminListQuestionsVariables, options?: useDataConnectQueryOptions<AdminListQuestionsData>): UseDataConnectQueryResult<AdminListQuestionsData, AdminListQuestionsVariables>;
export function useAdminListQuestions(dc: DataConnect, vars: AdminListQuestionsVariables, options?: useDataConnectQueryOptions<AdminListQuestionsData>): UseDataConnectQueryResult<AdminListQuestionsData, AdminListQuestionsVariables>;

export function useAdminGetQuestion(vars: AdminGetQuestionVariables, options?: useDataConnectQueryOptions<AdminGetQuestionData>): UseDataConnectQueryResult<AdminGetQuestionData, AdminGetQuestionVariables>;
export function useAdminGetQuestion(dc: DataConnect, vars: AdminGetQuestionVariables, options?: useDataConnectQueryOptions<AdminGetQuestionData>): UseDataConnectQueryResult<AdminGetQuestionData, AdminGetQuestionVariables>;
