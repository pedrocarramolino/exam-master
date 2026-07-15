import { UpsertUserData, UpsertUserVariables, ListExamCategoriesData, ListExamGroupsByCategoryData, ListExamGroupsByCategoryVariables, ListExamEditionsByGroupData, ListExamEditionsByGroupVariables, ListExamsByEditionData, ListExamsByEditionVariables, GetExamForAttemptData, GetExamForAttemptVariables, GetAttemptReviewData, GetAttemptReviewVariables, GetMyAttemptsData, GetAttemptByIdData, GetAttemptByIdVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useUpsertUser(options?: useDataConnectMutationOptions<UpsertUserData, FirebaseError, UpsertUserVariables>): UseDataConnectMutationResult<UpsertUserData, UpsertUserVariables>;
export function useUpsertUser(dc: DataConnect, options?: useDataConnectMutationOptions<UpsertUserData, FirebaseError, UpsertUserVariables>): UseDataConnectMutationResult<UpsertUserData, UpsertUserVariables>;

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
