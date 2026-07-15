# Generated React README
This README will guide you through the process of using the generated React SDK package for the connector `exammaster`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `JavaScript README`, you can find it at [`dataconnect-generated/README.md`](../README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

You can use this generated SDK by importing from the package `@dataconnect/generated/react` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#react).

# Table of Contents
- [**Overview**](#generated-react-readme)
- [**TanStack Query Firebase & TanStack React Query**](#tanstack-query-firebase-tanstack-react-query)
  - [*Package Installation*](#installing-tanstack-query-firebase-and-tanstack-react-query-packages)
  - [*Configuring TanStack Query*](#configuring-tanstack-query)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*ListExamCategories*](#listexamcategories)
  - [*ListExamGroupsByCategory*](#listexamgroupsbycategory)
  - [*ListExamEditionsByGroup*](#listexameditionsbygroup)
  - [*ListExamsByEdition*](#listexamsbyedition)
  - [*GetExamForAttempt*](#getexamforattempt)
  - [*GetAttemptReview*](#getattemptreview)
  - [*GetMyAttempts*](#getmyattempts)
  - [*GetMyAnswersWithTopic*](#getmyanswerswithtopic)
  - [*GetInProgressAttempt*](#getinprogressattempt)
  - [*GetAttemptById*](#getattemptbyid)
  - [*GetUserRole*](#getuserrole)
  - [*AdminListGroups*](#adminlistgroups)
  - [*AdminListEditions*](#adminlisteditions)
  - [*AdminListExams*](#adminlistexams)
  - [*AdminListTopics*](#adminlisttopics)
  - [*AdminListQuestions*](#adminlistquestions)
  - [*AdminGetQuestion*](#admingetquestion)
- [**Mutations**](#mutations)
  - [*UpsertUser*](#upsertuser)
  - [*StartExamAttempt*](#startexamattempt)
  - [*SaveAttemptAnswer*](#saveattemptanswer)
  - [*FinishExamAttempt*](#finishexamattempt)
  - [*CreateExamCategory*](#createexamcategory)
  - [*UpdateExamCategory*](#updateexamcategory)
  - [*DeleteExamCategory*](#deleteexamcategory)
  - [*CreateExamGroup*](#createexamgroup)
  - [*UpdateExamGroup*](#updateexamgroup)
  - [*DeleteExamGroup*](#deleteexamgroup)
  - [*CreateExamEdition*](#createexamedition)
  - [*UpdateExamEdition*](#updateexamedition)
  - [*DeleteExamEdition*](#deleteexamedition)
  - [*CreateExam*](#createexam)
  - [*UpdateExam*](#updateexam)
  - [*DeleteExam*](#deleteexam)
  - [*CreateTopic*](#createtopic)
  - [*DeleteTopic*](#deletetopic)
  - [*CreateQuestion*](#createquestion)
  - [*UpdateQuestion*](#updatequestion)
  - [*DeleteAnswerOptionsByQuestion*](#deleteansweroptionsbyquestion)
  - [*DeleteQuestion*](#deletequestion)
  - [*ReplaceAnswerOptions*](#replaceansweroptions)

# TanStack Query Firebase & TanStack React Query
This SDK provides [React](https://react.dev/) hooks generated specific to your application, for the operations found in the connector `exammaster`. These hooks are generated using [TanStack Query Firebase](https://react-query-firebase.invertase.dev/) by our partners at Invertase, a library built on top of [TanStack React Query v5](https://tanstack.com/query/v5/docs/framework/react/overview).

***You do not need to be familiar with Tanstack Query or Tanstack Query Firebase to use this SDK.*** However, you may find it useful to learn more about them, as they will empower you as a user of this Generated React SDK.

## Installing TanStack Query Firebase and TanStack React Query Packages
In order to use the React generated SDK, you must install the `TanStack React Query` and `TanStack Query Firebase` packages.
```bash
npm i --save @tanstack/react-query @tanstack-query-firebase/react
```
```bash
npm i --save firebase@latest # Note: React has a peer dependency on ^11.3.0
```

You can also follow the installation instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#tanstack-install), or the [TanStack Query Firebase documentation](https://react-query-firebase.invertase.dev/react) and [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/installation).

## Configuring TanStack Query
In order to use the React generated SDK in your application, you must wrap your application's component tree in a `QueryClientProvider` component from TanStack React Query. None of your generated React SDK hooks will work without this provider.

```javascript
import { QueryClientProvider } from '@tanstack/react-query';

// Create a TanStack Query client instance
const queryClient = new QueryClient()

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <MyApplication />
    </QueryClientProvider>
  )
}
```

To learn more about `QueryClientProvider`, see the [TanStack React Query documentation](https://tanstack.com/query/latest/docs/framework/react/quick-start) and the [TanStack Query Firebase documentation](https://invertase.docs.page/tanstack-query-firebase/react#usage).

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `exammaster`.

You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#emulator-react-angular).

```javascript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) using the hooks provided from your generated React SDK.

# Queries

The React generated SDK provides Query hook functions that call and return [`useDataConnectQuery`](https://react-query-firebase.invertase.dev/react/data-connect/querying) hooks from TanStack Query Firebase.

Calling these hook functions will return a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and the most recent data returned by the Query, among other things. To learn more about these hooks and how to use them, see the [TanStack Query Firebase documentation](https://react-query-firebase.invertase.dev/react/data-connect/querying).

TanStack React Query caches the results of your Queries, so using the same Query hook function in multiple places in your application allows the entire application to automatically see updates to that Query's data.

Query hooks execute their Queries automatically when called, and periodically refresh, unless you change the `queryOptions` for the Query. To learn how to stop a Query from automatically executing, including how to make a query "lazy", see the [TanStack React Query documentation](https://tanstack.com/query/latest/docs/framework/react/guides/disabling-queries).

To learn more about TanStack React Query's Queries, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/guides/queries).

## Using Query Hooks
Here's a general overview of how to use the generated Query hooks in your code:

- If the Query has no variables, the Query hook function does not require arguments.
- If the Query has any required variables, the Query hook function will require at least one argument: an object that contains all the required variables for the Query.
- If the Query has some required and some optional variables, only required variables are necessary in the variables argument object, and optional variables may be provided as well.
- If all of the Query's variables are optional, the Query hook function does not require any arguments.
- Query hook functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.
- Query hooks functions can be called with or without passing in an `options` argument of type `useDataConnectQueryOptions`. To learn more about the `options` argument, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/guides/query-options).
  - ***Special case:***  If the Query has all optional variables and you would like to provide an `options` argument to the Query hook function without providing any variables, you must pass `undefined` where you would normally pass the Query's variables, and then may provide the `options` argument.

Below are examples of how to use the `exammaster` connector's generated Query hook functions to execute each Query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#operations-react-angular).

## ListExamCategories
You can execute the `ListExamCategories` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListExamCategories(dc: DataConnect, options?: useDataConnectQueryOptions<ListExamCategoriesData>): UseDataConnectQueryResult<ListExamCategoriesData, undefined>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListExamCategories(options?: useDataConnectQueryOptions<ListExamCategoriesData>): UseDataConnectQueryResult<ListExamCategoriesData, undefined>;
```

### Variables
The `ListExamCategories` Query has no variables.
### Return Type
Recall that calling the `ListExamCategories` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListExamCategories` Query is of type `ListExamCategoriesData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface ListExamCategoriesData {
  examCategories: ({
    id: UUIDString;
    name: string;
    slug: string;
    description?: string | null;
  } & ExamCategory_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListExamCategories`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';
import { useListExamCategories } from '@dataconnect/generated/react'

export default function ListExamCategoriesComponent() {
  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListExamCategories();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListExamCategories(dataConnect);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListExamCategories(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListExamCategories(dataConnect, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.examCategories);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListExamGroupsByCategory
You can execute the `ListExamGroupsByCategory` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListExamGroupsByCategory(dc: DataConnect, vars: ListExamGroupsByCategoryVariables, options?: useDataConnectQueryOptions<ListExamGroupsByCategoryData>): UseDataConnectQueryResult<ListExamGroupsByCategoryData, ListExamGroupsByCategoryVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListExamGroupsByCategory(vars: ListExamGroupsByCategoryVariables, options?: useDataConnectQueryOptions<ListExamGroupsByCategoryData>): UseDataConnectQueryResult<ListExamGroupsByCategoryData, ListExamGroupsByCategoryVariables>;
```

### Variables
The `ListExamGroupsByCategory` Query requires an argument of type `ListExamGroupsByCategoryVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ListExamGroupsByCategoryVariables {
  categoryId: UUIDString;
}
```
### Return Type
Recall that calling the `ListExamGroupsByCategory` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListExamGroupsByCategory` Query is of type `ListExamGroupsByCategoryData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface ListExamGroupsByCategoryData {
  examGroups: ({
    id: UUIDString;
    name: string;
    slug: string;
  } & ExamGroup_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListExamGroupsByCategory`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ListExamGroupsByCategoryVariables } from '@dataconnect/generated';
import { useListExamGroupsByCategory } from '@dataconnect/generated/react'

export default function ListExamGroupsByCategoryComponent() {
  // The `useListExamGroupsByCategory` Query hook requires an argument of type `ListExamGroupsByCategoryVariables`:
  const listExamGroupsByCategoryVars: ListExamGroupsByCategoryVariables = {
    categoryId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListExamGroupsByCategory(listExamGroupsByCategoryVars);
  // Variables can be defined inline as well.
  const query = useListExamGroupsByCategory({ categoryId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListExamGroupsByCategory(dataConnect, listExamGroupsByCategoryVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListExamGroupsByCategory(listExamGroupsByCategoryVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListExamGroupsByCategory(dataConnect, listExamGroupsByCategoryVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.examGroups);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListExamEditionsByGroup
You can execute the `ListExamEditionsByGroup` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListExamEditionsByGroup(dc: DataConnect, vars: ListExamEditionsByGroupVariables, options?: useDataConnectQueryOptions<ListExamEditionsByGroupData>): UseDataConnectQueryResult<ListExamEditionsByGroupData, ListExamEditionsByGroupVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListExamEditionsByGroup(vars: ListExamEditionsByGroupVariables, options?: useDataConnectQueryOptions<ListExamEditionsByGroupData>): UseDataConnectQueryResult<ListExamEditionsByGroupData, ListExamEditionsByGroupVariables>;
```

### Variables
The `ListExamEditionsByGroup` Query requires an argument of type `ListExamEditionsByGroupVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ListExamEditionsByGroupVariables {
  groupId: UUIDString;
}
```
### Return Type
Recall that calling the `ListExamEditionsByGroup` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListExamEditionsByGroup` Query is of type `ListExamEditionsByGroupData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface ListExamEditionsByGroupData {
  examEditions: ({
    id: UUIDString;
    year: number;
    label?: string | null;
    examDate?: DateString | null;
  } & ExamEdition_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListExamEditionsByGroup`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ListExamEditionsByGroupVariables } from '@dataconnect/generated';
import { useListExamEditionsByGroup } from '@dataconnect/generated/react'

export default function ListExamEditionsByGroupComponent() {
  // The `useListExamEditionsByGroup` Query hook requires an argument of type `ListExamEditionsByGroupVariables`:
  const listExamEditionsByGroupVars: ListExamEditionsByGroupVariables = {
    groupId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListExamEditionsByGroup(listExamEditionsByGroupVars);
  // Variables can be defined inline as well.
  const query = useListExamEditionsByGroup({ groupId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListExamEditionsByGroup(dataConnect, listExamEditionsByGroupVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListExamEditionsByGroup(listExamEditionsByGroupVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListExamEditionsByGroup(dataConnect, listExamEditionsByGroupVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.examEditions);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ListExamsByEdition
You can execute the `ListExamsByEdition` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useListExamsByEdition(dc: DataConnect, vars: ListExamsByEditionVariables, options?: useDataConnectQueryOptions<ListExamsByEditionData>): UseDataConnectQueryResult<ListExamsByEditionData, ListExamsByEditionVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useListExamsByEdition(vars: ListExamsByEditionVariables, options?: useDataConnectQueryOptions<ListExamsByEditionData>): UseDataConnectQueryResult<ListExamsByEditionData, ListExamsByEditionVariables>;
```

### Variables
The `ListExamsByEdition` Query requires an argument of type `ListExamsByEditionVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface ListExamsByEditionVariables {
  editionId: UUIDString;
}
```
### Return Type
Recall that calling the `ListExamsByEdition` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `ListExamsByEdition` Query is of type `ListExamsByEditionData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface ListExamsByEditionData {
  exams: ({
    id: UUIDString;
    title: string;
    description?: string | null;
    durationMinutes: number;
  } & Exam_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `ListExamsByEdition`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ListExamsByEditionVariables } from '@dataconnect/generated';
import { useListExamsByEdition } from '@dataconnect/generated/react'

export default function ListExamsByEditionComponent() {
  // The `useListExamsByEdition` Query hook requires an argument of type `ListExamsByEditionVariables`:
  const listExamsByEditionVars: ListExamsByEditionVariables = {
    editionId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useListExamsByEdition(listExamsByEditionVars);
  // Variables can be defined inline as well.
  const query = useListExamsByEdition({ editionId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useListExamsByEdition(dataConnect, listExamsByEditionVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useListExamsByEdition(listExamsByEditionVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useListExamsByEdition(dataConnect, listExamsByEditionVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.exams);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetExamForAttempt
You can execute the `GetExamForAttempt` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetExamForAttempt(dc: DataConnect, vars: GetExamForAttemptVariables, options?: useDataConnectQueryOptions<GetExamForAttemptData>): UseDataConnectQueryResult<GetExamForAttemptData, GetExamForAttemptVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetExamForAttempt(vars: GetExamForAttemptVariables, options?: useDataConnectQueryOptions<GetExamForAttemptData>): UseDataConnectQueryResult<GetExamForAttemptData, GetExamForAttemptVariables>;
```

### Variables
The `GetExamForAttempt` Query requires an argument of type `GetExamForAttemptVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetExamForAttemptVariables {
  examId: UUIDString;
}
```
### Return Type
Recall that calling the `GetExamForAttempt` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetExamForAttempt` Query is of type `GetExamForAttemptData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetExamForAttempt`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetExamForAttemptVariables } from '@dataconnect/generated';
import { useGetExamForAttempt } from '@dataconnect/generated/react'

export default function GetExamForAttemptComponent() {
  // The `useGetExamForAttempt` Query hook requires an argument of type `GetExamForAttemptVariables`:
  const getExamForAttemptVars: GetExamForAttemptVariables = {
    examId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetExamForAttempt(getExamForAttemptVars);
  // Variables can be defined inline as well.
  const query = useGetExamForAttempt({ examId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetExamForAttempt(dataConnect, getExamForAttemptVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetExamForAttempt(getExamForAttemptVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetExamForAttempt(dataConnect, getExamForAttemptVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.exam);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetAttemptReview
You can execute the `GetAttemptReview` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetAttemptReview(dc: DataConnect, vars: GetAttemptReviewVariables, options?: useDataConnectQueryOptions<GetAttemptReviewData>): UseDataConnectQueryResult<GetAttemptReviewData, GetAttemptReviewVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetAttemptReview(vars: GetAttemptReviewVariables, options?: useDataConnectQueryOptions<GetAttemptReviewData>): UseDataConnectQueryResult<GetAttemptReviewData, GetAttemptReviewVariables>;
```

### Variables
The `GetAttemptReview` Query requires an argument of type `GetAttemptReviewVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetAttemptReviewVariables {
  attemptId: UUIDString;
}
```
### Return Type
Recall that calling the `GetAttemptReview` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetAttemptReview` Query is of type `GetAttemptReviewData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetAttemptReview`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetAttemptReviewVariables } from '@dataconnect/generated';
import { useGetAttemptReview } from '@dataconnect/generated/react'

export default function GetAttemptReviewComponent() {
  // The `useGetAttemptReview` Query hook requires an argument of type `GetAttemptReviewVariables`:
  const getAttemptReviewVars: GetAttemptReviewVariables = {
    attemptId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetAttemptReview(getAttemptReviewVars);
  // Variables can be defined inline as well.
  const query = useGetAttemptReview({ attemptId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetAttemptReview(dataConnect, getAttemptReviewVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetAttemptReview(getAttemptReviewVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetAttemptReview(dataConnect, getAttemptReviewVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.examAttempts);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetMyAttempts
You can execute the `GetMyAttempts` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetMyAttempts(dc: DataConnect, options?: useDataConnectQueryOptions<GetMyAttemptsData>): UseDataConnectQueryResult<GetMyAttemptsData, undefined>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetMyAttempts(options?: useDataConnectQueryOptions<GetMyAttemptsData>): UseDataConnectQueryResult<GetMyAttemptsData, undefined>;
```

### Variables
The `GetMyAttempts` Query has no variables.
### Return Type
Recall that calling the `GetMyAttempts` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetMyAttempts` Query is of type `GetMyAttemptsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetMyAttempts`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';
import { useGetMyAttempts } from '@dataconnect/generated/react'

export default function GetMyAttemptsComponent() {
  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetMyAttempts();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetMyAttempts(dataConnect);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetMyAttempts(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetMyAttempts(dataConnect, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.user);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetMyAnswersWithTopic
You can execute the `GetMyAnswersWithTopic` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetMyAnswersWithTopic(dc: DataConnect, options?: useDataConnectQueryOptions<GetMyAnswersWithTopicData>): UseDataConnectQueryResult<GetMyAnswersWithTopicData, undefined>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetMyAnswersWithTopic(options?: useDataConnectQueryOptions<GetMyAnswersWithTopicData>): UseDataConnectQueryResult<GetMyAnswersWithTopicData, undefined>;
```

### Variables
The `GetMyAnswersWithTopic` Query has no variables.
### Return Type
Recall that calling the `GetMyAnswersWithTopic` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetMyAnswersWithTopic` Query is of type `GetMyAnswersWithTopicData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetMyAnswersWithTopicData {
  attemptAnswers: ({
    isCorrect?: boolean | null;
    attempt: {
      status: AttemptStatus;
    };
    question: {
      topic?: {
        id: UUIDString;
        name: string;
      } & Topic_Key;
    };
  })[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetMyAnswersWithTopic`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';
import { useGetMyAnswersWithTopic } from '@dataconnect/generated/react'

export default function GetMyAnswersWithTopicComponent() {
  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetMyAnswersWithTopic();

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetMyAnswersWithTopic(dataConnect);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetMyAnswersWithTopic(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetMyAnswersWithTopic(dataConnect, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.attemptAnswers);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetInProgressAttempt
You can execute the `GetInProgressAttempt` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetInProgressAttempt(dc: DataConnect, vars: GetInProgressAttemptVariables, options?: useDataConnectQueryOptions<GetInProgressAttemptData>): UseDataConnectQueryResult<GetInProgressAttemptData, GetInProgressAttemptVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetInProgressAttempt(vars: GetInProgressAttemptVariables, options?: useDataConnectQueryOptions<GetInProgressAttemptData>): UseDataConnectQueryResult<GetInProgressAttemptData, GetInProgressAttemptVariables>;
```

### Variables
The `GetInProgressAttempt` Query requires an argument of type `GetInProgressAttemptVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetInProgressAttemptVariables {
  examId: UUIDString;
}
```
### Return Type
Recall that calling the `GetInProgressAttempt` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetInProgressAttempt` Query is of type `GetInProgressAttemptData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetInProgressAttemptData {
  examAttempts: ({
    id: UUIDString;
    startedAt: TimestampString;
  } & ExamAttempt_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetInProgressAttempt`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetInProgressAttemptVariables } from '@dataconnect/generated';
import { useGetInProgressAttempt } from '@dataconnect/generated/react'

export default function GetInProgressAttemptComponent() {
  // The `useGetInProgressAttempt` Query hook requires an argument of type `GetInProgressAttemptVariables`:
  const getInProgressAttemptVars: GetInProgressAttemptVariables = {
    examId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetInProgressAttempt(getInProgressAttemptVars);
  // Variables can be defined inline as well.
  const query = useGetInProgressAttempt({ examId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetInProgressAttempt(dataConnect, getInProgressAttemptVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetInProgressAttempt(getInProgressAttemptVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetInProgressAttempt(dataConnect, getInProgressAttemptVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.examAttempts);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetAttemptById
You can execute the `GetAttemptById` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetAttemptById(dc: DataConnect, vars: GetAttemptByIdVariables, options?: useDataConnectQueryOptions<GetAttemptByIdData>): UseDataConnectQueryResult<GetAttemptByIdData, GetAttemptByIdVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetAttemptById(vars: GetAttemptByIdVariables, options?: useDataConnectQueryOptions<GetAttemptByIdData>): UseDataConnectQueryResult<GetAttemptByIdData, GetAttemptByIdVariables>;
```

### Variables
The `GetAttemptById` Query requires an argument of type `GetAttemptByIdVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetAttemptByIdVariables {
  attemptId: UUIDString;
}
```
### Return Type
Recall that calling the `GetAttemptById` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetAttemptById` Query is of type `GetAttemptByIdData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetAttemptById`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetAttemptByIdVariables } from '@dataconnect/generated';
import { useGetAttemptById } from '@dataconnect/generated/react'

export default function GetAttemptByIdComponent() {
  // The `useGetAttemptById` Query hook requires an argument of type `GetAttemptByIdVariables`:
  const getAttemptByIdVars: GetAttemptByIdVariables = {
    attemptId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetAttemptById(getAttemptByIdVars);
  // Variables can be defined inline as well.
  const query = useGetAttemptById({ attemptId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetAttemptById(dataConnect, getAttemptByIdVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetAttemptById(getAttemptByIdVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetAttemptById(dataConnect, getAttemptByIdVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.examAttempts);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## GetUserRole
You can execute the `GetUserRole` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useGetUserRole(dc: DataConnect, vars: GetUserRoleVariables, options?: useDataConnectQueryOptions<GetUserRoleData>): UseDataConnectQueryResult<GetUserRoleData, GetUserRoleVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useGetUserRole(vars: GetUserRoleVariables, options?: useDataConnectQueryOptions<GetUserRoleData>): UseDataConnectQueryResult<GetUserRoleData, GetUserRoleVariables>;
```

### Variables
The `GetUserRole` Query requires an argument of type `GetUserRoleVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetUserRoleVariables {
  userId: string;
}
```
### Return Type
Recall that calling the `GetUserRole` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `GetUserRole` Query is of type `GetUserRoleData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetUserRoleData {
  user?: {
    role: UserRole;
  };
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `GetUserRole`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, GetUserRoleVariables } from '@dataconnect/generated';
import { useGetUserRole } from '@dataconnect/generated/react'

export default function GetUserRoleComponent() {
  // The `useGetUserRole` Query hook requires an argument of type `GetUserRoleVariables`:
  const getUserRoleVars: GetUserRoleVariables = {
    userId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useGetUserRole(getUserRoleVars);
  // Variables can be defined inline as well.
  const query = useGetUserRole({ userId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useGetUserRole(dataConnect, getUserRoleVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useGetUserRole(getUserRoleVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useGetUserRole(dataConnect, getUserRoleVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.user);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## AdminListGroups
You can execute the `AdminListGroups` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useAdminListGroups(dc: DataConnect, vars: AdminListGroupsVariables, options?: useDataConnectQueryOptions<AdminListGroupsData>): UseDataConnectQueryResult<AdminListGroupsData, AdminListGroupsVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useAdminListGroups(vars: AdminListGroupsVariables, options?: useDataConnectQueryOptions<AdminListGroupsData>): UseDataConnectQueryResult<AdminListGroupsData, AdminListGroupsVariables>;
```

### Variables
The `AdminListGroups` Query requires an argument of type `AdminListGroupsVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface AdminListGroupsVariables {
  categoryId: UUIDString;
}
```
### Return Type
Recall that calling the `AdminListGroups` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `AdminListGroups` Query is of type `AdminListGroupsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface AdminListGroupsData {
  examGroups: ({
    id: UUIDString;
    categoryId: UUIDString;
    name: string;
    slug: string;
  } & ExamGroup_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `AdminListGroups`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, AdminListGroupsVariables } from '@dataconnect/generated';
import { useAdminListGroups } from '@dataconnect/generated/react'

export default function AdminListGroupsComponent() {
  // The `useAdminListGroups` Query hook requires an argument of type `AdminListGroupsVariables`:
  const adminListGroupsVars: AdminListGroupsVariables = {
    categoryId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useAdminListGroups(adminListGroupsVars);
  // Variables can be defined inline as well.
  const query = useAdminListGroups({ categoryId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useAdminListGroups(dataConnect, adminListGroupsVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useAdminListGroups(adminListGroupsVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useAdminListGroups(dataConnect, adminListGroupsVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.examGroups);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## AdminListEditions
You can execute the `AdminListEditions` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useAdminListEditions(dc: DataConnect, vars: AdminListEditionsVariables, options?: useDataConnectQueryOptions<AdminListEditionsData>): UseDataConnectQueryResult<AdminListEditionsData, AdminListEditionsVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useAdminListEditions(vars: AdminListEditionsVariables, options?: useDataConnectQueryOptions<AdminListEditionsData>): UseDataConnectQueryResult<AdminListEditionsData, AdminListEditionsVariables>;
```

### Variables
The `AdminListEditions` Query requires an argument of type `AdminListEditionsVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface AdminListEditionsVariables {
  groupId: UUIDString;
}
```
### Return Type
Recall that calling the `AdminListEditions` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `AdminListEditions` Query is of type `AdminListEditionsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface AdminListEditionsData {
  examEditions: ({
    id: UUIDString;
    groupId: UUIDString;
    year: number;
    label?: string | null;
    examDate?: DateString | null;
  } & ExamEdition_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `AdminListEditions`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, AdminListEditionsVariables } from '@dataconnect/generated';
import { useAdminListEditions } from '@dataconnect/generated/react'

export default function AdminListEditionsComponent() {
  // The `useAdminListEditions` Query hook requires an argument of type `AdminListEditionsVariables`:
  const adminListEditionsVars: AdminListEditionsVariables = {
    groupId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useAdminListEditions(adminListEditionsVars);
  // Variables can be defined inline as well.
  const query = useAdminListEditions({ groupId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useAdminListEditions(dataConnect, adminListEditionsVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useAdminListEditions(adminListEditionsVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useAdminListEditions(dataConnect, adminListEditionsVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.examEditions);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## AdminListExams
You can execute the `AdminListExams` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useAdminListExams(dc: DataConnect, vars: AdminListExamsVariables, options?: useDataConnectQueryOptions<AdminListExamsData>): UseDataConnectQueryResult<AdminListExamsData, AdminListExamsVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useAdminListExams(vars: AdminListExamsVariables, options?: useDataConnectQueryOptions<AdminListExamsData>): UseDataConnectQueryResult<AdminListExamsData, AdminListExamsVariables>;
```

### Variables
The `AdminListExams` Query requires an argument of type `AdminListExamsVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface AdminListExamsVariables {
  editionId: UUIDString;
}
```
### Return Type
Recall that calling the `AdminListExams` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `AdminListExams` Query is of type `AdminListExamsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface AdminListExamsData {
  exams: ({
    id: UUIDString;
    editionId: UUIDString;
    title: string;
    description?: string | null;
    durationMinutes: number;
  } & Exam_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `AdminListExams`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, AdminListExamsVariables } from '@dataconnect/generated';
import { useAdminListExams } from '@dataconnect/generated/react'

export default function AdminListExamsComponent() {
  // The `useAdminListExams` Query hook requires an argument of type `AdminListExamsVariables`:
  const adminListExamsVars: AdminListExamsVariables = {
    editionId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useAdminListExams(adminListExamsVars);
  // Variables can be defined inline as well.
  const query = useAdminListExams({ editionId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useAdminListExams(dataConnect, adminListExamsVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useAdminListExams(adminListExamsVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useAdminListExams(dataConnect, adminListExamsVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.exams);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## AdminListTopics
You can execute the `AdminListTopics` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useAdminListTopics(dc: DataConnect, vars: AdminListTopicsVariables, options?: useDataConnectQueryOptions<AdminListTopicsData>): UseDataConnectQueryResult<AdminListTopicsData, AdminListTopicsVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useAdminListTopics(vars: AdminListTopicsVariables, options?: useDataConnectQueryOptions<AdminListTopicsData>): UseDataConnectQueryResult<AdminListTopicsData, AdminListTopicsVariables>;
```

### Variables
The `AdminListTopics` Query requires an argument of type `AdminListTopicsVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface AdminListTopicsVariables {
  categoryId: UUIDString;
}
```
### Return Type
Recall that calling the `AdminListTopics` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `AdminListTopics` Query is of type `AdminListTopicsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface AdminListTopicsData {
  topics: ({
    id: UUIDString;
    categoryId: UUIDString;
    name: string;
  } & Topic_Key)[];
}
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `AdminListTopics`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, AdminListTopicsVariables } from '@dataconnect/generated';
import { useAdminListTopics } from '@dataconnect/generated/react'

export default function AdminListTopicsComponent() {
  // The `useAdminListTopics` Query hook requires an argument of type `AdminListTopicsVariables`:
  const adminListTopicsVars: AdminListTopicsVariables = {
    categoryId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useAdminListTopics(adminListTopicsVars);
  // Variables can be defined inline as well.
  const query = useAdminListTopics({ categoryId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useAdminListTopics(dataConnect, adminListTopicsVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useAdminListTopics(adminListTopicsVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useAdminListTopics(dataConnect, adminListTopicsVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.topics);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## AdminListQuestions
You can execute the `AdminListQuestions` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useAdminListQuestions(dc: DataConnect, vars: AdminListQuestionsVariables, options?: useDataConnectQueryOptions<AdminListQuestionsData>): UseDataConnectQueryResult<AdminListQuestionsData, AdminListQuestionsVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useAdminListQuestions(vars: AdminListQuestionsVariables, options?: useDataConnectQueryOptions<AdminListQuestionsData>): UseDataConnectQueryResult<AdminListQuestionsData, AdminListQuestionsVariables>;
```

### Variables
The `AdminListQuestions` Query requires an argument of type `AdminListQuestionsVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface AdminListQuestionsVariables {
  examId: UUIDString;
}
```
### Return Type
Recall that calling the `AdminListQuestions` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `AdminListQuestions` Query is of type `AdminListQuestionsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `AdminListQuestions`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, AdminListQuestionsVariables } from '@dataconnect/generated';
import { useAdminListQuestions } from '@dataconnect/generated/react'

export default function AdminListQuestionsComponent() {
  // The `useAdminListQuestions` Query hook requires an argument of type `AdminListQuestionsVariables`:
  const adminListQuestionsVars: AdminListQuestionsVariables = {
    examId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useAdminListQuestions(adminListQuestionsVars);
  // Variables can be defined inline as well.
  const query = useAdminListQuestions({ examId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useAdminListQuestions(dataConnect, adminListQuestionsVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useAdminListQuestions(adminListQuestionsVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useAdminListQuestions(dataConnect, adminListQuestionsVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.questions);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## AdminGetQuestion
You can execute the `AdminGetQuestion` Query using the following Query hook function, which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts):

```javascript
useAdminGetQuestion(dc: DataConnect, vars: AdminGetQuestionVariables, options?: useDataConnectQueryOptions<AdminGetQuestionData>): UseDataConnectQueryResult<AdminGetQuestionData, AdminGetQuestionVariables>;
```
You can also pass in a `DataConnect` instance to the Query hook function.
```javascript
useAdminGetQuestion(vars: AdminGetQuestionVariables, options?: useDataConnectQueryOptions<AdminGetQuestionData>): UseDataConnectQueryResult<AdminGetQuestionData, AdminGetQuestionVariables>;
```

### Variables
The `AdminGetQuestion` Query requires an argument of type `AdminGetQuestionVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface AdminGetQuestionVariables {
  questionId: UUIDString;
}
```
### Return Type
Recall that calling the `AdminGetQuestion` Query hook function returns a `UseQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `UseQueryResult.status` field. You can also check for pending / success / error status using the `UseQueryResult.isPending`, `UseQueryResult.isSuccess`, and `UseQueryResult.isError` fields.

To access the data returned by a Query, use the `UseQueryResult.data` field. The data for the `AdminGetQuestion` Query is of type `AdminGetQuestionData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
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
```

To learn more about the `UseQueryResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

### Using `AdminGetQuestion`'s Query hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, AdminGetQuestionVariables } from '@dataconnect/generated';
import { useAdminGetQuestion } from '@dataconnect/generated/react'

export default function AdminGetQuestionComponent() {
  // The `useAdminGetQuestion` Query hook requires an argument of type `AdminGetQuestionVariables`:
  const adminGetQuestionVars: AdminGetQuestionVariables = {
    questionId: ..., 
  };

  // You don't have to do anything to "execute" the Query.
  // Call the Query hook function to get a `UseQueryResult` object which holds the state of your Query.
  const query = useAdminGetQuestion(adminGetQuestionVars);
  // Variables can be defined inline as well.
  const query = useAdminGetQuestion({ questionId: ..., });

  // You can also pass in a `DataConnect` instance to the Query hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const query = useAdminGetQuestion(dataConnect, adminGetQuestionVars);

  // You can also pass in a `useDataConnectQueryOptions` object to the Query hook function.
  const options = { staleTime: 5 * 1000 };
  const query = useAdminGetQuestion(adminGetQuestionVars, options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectQueryOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = { staleTime: 5 * 1000 };
  const query = useAdminGetQuestion(dataConnect, adminGetQuestionVars, options);

  // Then, you can render your component dynamically based on the status of the Query.
  if (query.isPending) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  // If the Query is successful, you can access the data returned using the `UseQueryResult.data` field.
  if (query.isSuccess) {
    console.log(query.data.question);
  }
  return <div>Query execution {query.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

# Mutations

The React generated SDK provides Mutations hook functions that call and return [`useDataConnectMutation`](https://react-query-firebase.invertase.dev/react/data-connect/mutations) hooks from TanStack Query Firebase.

Calling these hook functions will return a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, and the most recent data returned by the Mutation, among other things. To learn more about these hooks and how to use them, see the [TanStack Query Firebase documentation](https://react-query-firebase.invertase.dev/react/data-connect/mutations).

Mutation hooks do not execute their Mutations automatically when called. Rather, after calling the Mutation hook function and getting a `UseMutationResult` object, you must call the `UseMutationResult.mutate()` function to execute the Mutation.

To learn more about TanStack React Query's Mutations, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/guides/mutations).

## Using Mutation Hooks
Here's a general overview of how to use the generated Mutation hooks in your code:

- Mutation hook functions are not called with the arguments to the Mutation. Instead, arguments are passed to `UseMutationResult.mutate()`.
- If the Mutation has no variables, the `mutate()` function does not require arguments.
- If the Mutation has any required variables, the `mutate()` function will require at least one argument: an object that contains all the required variables for the Mutation.
- If the Mutation has some required and some optional variables, only required variables are necessary in the variables argument object, and optional variables may be provided as well.
- If all of the Mutation's variables are optional, the Mutation hook function does not require any arguments.
- Mutation hook functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.
- Mutation hooks also accept an `options` argument of type `useDataConnectMutationOptions`. To learn more about the `options` argument, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/guides/mutations#mutation-side-effects).
  - `UseMutationResult.mutate()` also accepts an `options` argument of type `useDataConnectMutationOptions`.
  - ***Special case:*** If the Mutation has no arguments (or all optional arguments and you wish to provide none), and you want to pass `options` to `UseMutationResult.mutate()`, you must pass `undefined` where you would normally pass the Mutation's arguments, and then may provide the options argument.

Below are examples of how to use the `exammaster` connector's generated Mutation hook functions to execute each Mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#operations-react-angular).

## UpsertUser
You can execute the `UpsertUser` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useUpsertUser(options?: useDataConnectMutationOptions<UpsertUserData, FirebaseError, UpsertUserVariables>): UseDataConnectMutationResult<UpsertUserData, UpsertUserVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useUpsertUser(dc: DataConnect, options?: useDataConnectMutationOptions<UpsertUserData, FirebaseError, UpsertUserVariables>): UseDataConnectMutationResult<UpsertUserData, UpsertUserVariables>;
```

### Variables
The `UpsertUser` Mutation requires an argument of type `UpsertUserVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface UpsertUserVariables {
  email: string;
  displayName?: string | null;
}
```
### Return Type
Recall that calling the `UpsertUser` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `UpsertUser` Mutation is of type `UpsertUserData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface UpsertUserData {
  user_upsert: User_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `UpsertUser`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, UpsertUserVariables } from '@dataconnect/generated';
import { useUpsertUser } from '@dataconnect/generated/react'

export default function UpsertUserComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useUpsertUser();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useUpsertUser(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpsertUser(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpsertUser(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useUpsertUser` Mutation requires an argument of type `UpsertUserVariables`:
  const upsertUserVars: UpsertUserVariables = {
    email: ..., 
    displayName: ..., // optional
  };
  mutation.mutate(upsertUserVars);
  // Variables can be defined inline as well.
  mutation.mutate({ email: ..., displayName: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(upsertUserVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.user_upsert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## StartExamAttempt
You can execute the `StartExamAttempt` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useStartExamAttempt(options?: useDataConnectMutationOptions<StartExamAttemptData, FirebaseError, StartExamAttemptVariables>): UseDataConnectMutationResult<StartExamAttemptData, StartExamAttemptVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useStartExamAttempt(dc: DataConnect, options?: useDataConnectMutationOptions<StartExamAttemptData, FirebaseError, StartExamAttemptVariables>): UseDataConnectMutationResult<StartExamAttemptData, StartExamAttemptVariables>;
```

### Variables
The `StartExamAttempt` Mutation requires an argument of type `StartExamAttemptVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface StartExamAttemptVariables {
  examId: UUIDString;
}
```
### Return Type
Recall that calling the `StartExamAttempt` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `StartExamAttempt` Mutation is of type `StartExamAttemptData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface StartExamAttemptData {
  examAttempt_insert: ExamAttempt_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `StartExamAttempt`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, StartExamAttemptVariables } from '@dataconnect/generated';
import { useStartExamAttempt } from '@dataconnect/generated/react'

export default function StartExamAttemptComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useStartExamAttempt();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useStartExamAttempt(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useStartExamAttempt(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useStartExamAttempt(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useStartExamAttempt` Mutation requires an argument of type `StartExamAttemptVariables`:
  const startExamAttemptVars: StartExamAttemptVariables = {
    examId: ..., 
  };
  mutation.mutate(startExamAttemptVars);
  // Variables can be defined inline as well.
  mutation.mutate({ examId: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(startExamAttemptVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.examAttempt_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## SaveAttemptAnswer
You can execute the `SaveAttemptAnswer` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useSaveAttemptAnswer(options?: useDataConnectMutationOptions<SaveAttemptAnswerData, FirebaseError, SaveAttemptAnswerVariables>): UseDataConnectMutationResult<SaveAttemptAnswerData, SaveAttemptAnswerVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useSaveAttemptAnswer(dc: DataConnect, options?: useDataConnectMutationOptions<SaveAttemptAnswerData, FirebaseError, SaveAttemptAnswerVariables>): UseDataConnectMutationResult<SaveAttemptAnswerData, SaveAttemptAnswerVariables>;
```

### Variables
The `SaveAttemptAnswer` Mutation requires an argument of type `SaveAttemptAnswerVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface SaveAttemptAnswerVariables {
  attemptId: UUIDString;
  questionId: UUIDString;
  selectedOptionId?: UUIDString | null;
  isCorrect?: boolean | null;
}
```
### Return Type
Recall that calling the `SaveAttemptAnswer` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `SaveAttemptAnswer` Mutation is of type `SaveAttemptAnswerData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface SaveAttemptAnswerData {
  attemptAnswer_upsert: AttemptAnswer_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `SaveAttemptAnswer`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, SaveAttemptAnswerVariables } from '@dataconnect/generated';
import { useSaveAttemptAnswer } from '@dataconnect/generated/react'

export default function SaveAttemptAnswerComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useSaveAttemptAnswer();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useSaveAttemptAnswer(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useSaveAttemptAnswer(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useSaveAttemptAnswer(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useSaveAttemptAnswer` Mutation requires an argument of type `SaveAttemptAnswerVariables`:
  const saveAttemptAnswerVars: SaveAttemptAnswerVariables = {
    attemptId: ..., 
    questionId: ..., 
    selectedOptionId: ..., // optional
    isCorrect: ..., // optional
  };
  mutation.mutate(saveAttemptAnswerVars);
  // Variables can be defined inline as well.
  mutation.mutate({ attemptId: ..., questionId: ..., selectedOptionId: ..., isCorrect: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(saveAttemptAnswerVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.attemptAnswer_upsert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## FinishExamAttempt
You can execute the `FinishExamAttempt` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useFinishExamAttempt(options?: useDataConnectMutationOptions<FinishExamAttemptData, FirebaseError, FinishExamAttemptVariables>): UseDataConnectMutationResult<FinishExamAttemptData, FinishExamAttemptVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useFinishExamAttempt(dc: DataConnect, options?: useDataConnectMutationOptions<FinishExamAttemptData, FirebaseError, FinishExamAttemptVariables>): UseDataConnectMutationResult<FinishExamAttemptData, FinishExamAttemptVariables>;
```

### Variables
The `FinishExamAttempt` Mutation requires an argument of type `FinishExamAttemptVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface FinishExamAttemptVariables {
  attemptId: UUIDString;
  score: number;
  timeSpentSeconds: number;
}
```
### Return Type
Recall that calling the `FinishExamAttempt` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `FinishExamAttempt` Mutation is of type `FinishExamAttemptData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface FinishExamAttemptData {
  examAttempt_update?: ExamAttempt_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `FinishExamAttempt`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, FinishExamAttemptVariables } from '@dataconnect/generated';
import { useFinishExamAttempt } from '@dataconnect/generated/react'

export default function FinishExamAttemptComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useFinishExamAttempt();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useFinishExamAttempt(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useFinishExamAttempt(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useFinishExamAttempt(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useFinishExamAttempt` Mutation requires an argument of type `FinishExamAttemptVariables`:
  const finishExamAttemptVars: FinishExamAttemptVariables = {
    attemptId: ..., 
    score: ..., 
    timeSpentSeconds: ..., 
  };
  mutation.mutate(finishExamAttemptVars);
  // Variables can be defined inline as well.
  mutation.mutate({ attemptId: ..., score: ..., timeSpentSeconds: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(finishExamAttemptVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.examAttempt_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreateExamCategory
You can execute the `CreateExamCategory` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreateExamCategory(options?: useDataConnectMutationOptions<CreateExamCategoryData, FirebaseError, CreateExamCategoryVariables>): UseDataConnectMutationResult<CreateExamCategoryData, CreateExamCategoryVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreateExamCategory(dc: DataConnect, options?: useDataConnectMutationOptions<CreateExamCategoryData, FirebaseError, CreateExamCategoryVariables>): UseDataConnectMutationResult<CreateExamCategoryData, CreateExamCategoryVariables>;
```

### Variables
The `CreateExamCategory` Mutation requires an argument of type `CreateExamCategoryVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface CreateExamCategoryVariables {
  name: string;
  slug: string;
  description?: string | null;
}
```
### Return Type
Recall that calling the `CreateExamCategory` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreateExamCategory` Mutation is of type `CreateExamCategoryData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateExamCategoryData {
  examCategory_insert: ExamCategory_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreateExamCategory`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreateExamCategoryVariables } from '@dataconnect/generated';
import { useCreateExamCategory } from '@dataconnect/generated/react'

export default function CreateExamCategoryComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreateExamCategory();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreateExamCategory(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateExamCategory(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateExamCategory(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreateExamCategory` Mutation requires an argument of type `CreateExamCategoryVariables`:
  const createExamCategoryVars: CreateExamCategoryVariables = {
    name: ..., 
    slug: ..., 
    description: ..., // optional
  };
  mutation.mutate(createExamCategoryVars);
  // Variables can be defined inline as well.
  mutation.mutate({ name: ..., slug: ..., description: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createExamCategoryVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.examCategory_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## UpdateExamCategory
You can execute the `UpdateExamCategory` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useUpdateExamCategory(options?: useDataConnectMutationOptions<UpdateExamCategoryData, FirebaseError, UpdateExamCategoryVariables>): UseDataConnectMutationResult<UpdateExamCategoryData, UpdateExamCategoryVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useUpdateExamCategory(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateExamCategoryData, FirebaseError, UpdateExamCategoryVariables>): UseDataConnectMutationResult<UpdateExamCategoryData, UpdateExamCategoryVariables>;
```

### Variables
The `UpdateExamCategory` Mutation requires an argument of type `UpdateExamCategoryVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface UpdateExamCategoryVariables {
  categoryId: UUIDString;
  name: string;
  slug: string;
  description?: string | null;
}
```
### Return Type
Recall that calling the `UpdateExamCategory` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `UpdateExamCategory` Mutation is of type `UpdateExamCategoryData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface UpdateExamCategoryData {
  examCategory_update?: ExamCategory_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `UpdateExamCategory`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, UpdateExamCategoryVariables } from '@dataconnect/generated';
import { useUpdateExamCategory } from '@dataconnect/generated/react'

export default function UpdateExamCategoryComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useUpdateExamCategory();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useUpdateExamCategory(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateExamCategory(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateExamCategory(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useUpdateExamCategory` Mutation requires an argument of type `UpdateExamCategoryVariables`:
  const updateExamCategoryVars: UpdateExamCategoryVariables = {
    categoryId: ..., 
    name: ..., 
    slug: ..., 
    description: ..., // optional
  };
  mutation.mutate(updateExamCategoryVars);
  // Variables can be defined inline as well.
  mutation.mutate({ categoryId: ..., name: ..., slug: ..., description: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(updateExamCategoryVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.examCategory_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## DeleteExamCategory
You can execute the `DeleteExamCategory` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useDeleteExamCategory(options?: useDataConnectMutationOptions<DeleteExamCategoryData, FirebaseError, DeleteExamCategoryVariables>): UseDataConnectMutationResult<DeleteExamCategoryData, DeleteExamCategoryVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useDeleteExamCategory(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteExamCategoryData, FirebaseError, DeleteExamCategoryVariables>): UseDataConnectMutationResult<DeleteExamCategoryData, DeleteExamCategoryVariables>;
```

### Variables
The `DeleteExamCategory` Mutation requires an argument of type `DeleteExamCategoryVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface DeleteExamCategoryVariables {
  categoryId: UUIDString;
}
```
### Return Type
Recall that calling the `DeleteExamCategory` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `DeleteExamCategory` Mutation is of type `DeleteExamCategoryData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface DeleteExamCategoryData {
  examCategory_delete?: ExamCategory_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `DeleteExamCategory`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, DeleteExamCategoryVariables } from '@dataconnect/generated';
import { useDeleteExamCategory } from '@dataconnect/generated/react'

export default function DeleteExamCategoryComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useDeleteExamCategory();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useDeleteExamCategory(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useDeleteExamCategory(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useDeleteExamCategory(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useDeleteExamCategory` Mutation requires an argument of type `DeleteExamCategoryVariables`:
  const deleteExamCategoryVars: DeleteExamCategoryVariables = {
    categoryId: ..., 
  };
  mutation.mutate(deleteExamCategoryVars);
  // Variables can be defined inline as well.
  mutation.mutate({ categoryId: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(deleteExamCategoryVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.examCategory_delete);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreateExamGroup
You can execute the `CreateExamGroup` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreateExamGroup(options?: useDataConnectMutationOptions<CreateExamGroupData, FirebaseError, CreateExamGroupVariables>): UseDataConnectMutationResult<CreateExamGroupData, CreateExamGroupVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreateExamGroup(dc: DataConnect, options?: useDataConnectMutationOptions<CreateExamGroupData, FirebaseError, CreateExamGroupVariables>): UseDataConnectMutationResult<CreateExamGroupData, CreateExamGroupVariables>;
```

### Variables
The `CreateExamGroup` Mutation requires an argument of type `CreateExamGroupVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface CreateExamGroupVariables {
  categoryId: UUIDString;
  name: string;
  slug: string;
}
```
### Return Type
Recall that calling the `CreateExamGroup` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreateExamGroup` Mutation is of type `CreateExamGroupData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateExamGroupData {
  examGroup_insert: ExamGroup_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreateExamGroup`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreateExamGroupVariables } from '@dataconnect/generated';
import { useCreateExamGroup } from '@dataconnect/generated/react'

export default function CreateExamGroupComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreateExamGroup();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreateExamGroup(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateExamGroup(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateExamGroup(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreateExamGroup` Mutation requires an argument of type `CreateExamGroupVariables`:
  const createExamGroupVars: CreateExamGroupVariables = {
    categoryId: ..., 
    name: ..., 
    slug: ..., 
  };
  mutation.mutate(createExamGroupVars);
  // Variables can be defined inline as well.
  mutation.mutate({ categoryId: ..., name: ..., slug: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createExamGroupVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.examGroup_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## UpdateExamGroup
You can execute the `UpdateExamGroup` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useUpdateExamGroup(options?: useDataConnectMutationOptions<UpdateExamGroupData, FirebaseError, UpdateExamGroupVariables>): UseDataConnectMutationResult<UpdateExamGroupData, UpdateExamGroupVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useUpdateExamGroup(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateExamGroupData, FirebaseError, UpdateExamGroupVariables>): UseDataConnectMutationResult<UpdateExamGroupData, UpdateExamGroupVariables>;
```

### Variables
The `UpdateExamGroup` Mutation requires an argument of type `UpdateExamGroupVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface UpdateExamGroupVariables {
  groupId: UUIDString;
  name: string;
  slug: string;
}
```
### Return Type
Recall that calling the `UpdateExamGroup` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `UpdateExamGroup` Mutation is of type `UpdateExamGroupData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface UpdateExamGroupData {
  examGroup_update?: ExamGroup_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `UpdateExamGroup`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, UpdateExamGroupVariables } from '@dataconnect/generated';
import { useUpdateExamGroup } from '@dataconnect/generated/react'

export default function UpdateExamGroupComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useUpdateExamGroup();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useUpdateExamGroup(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateExamGroup(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateExamGroup(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useUpdateExamGroup` Mutation requires an argument of type `UpdateExamGroupVariables`:
  const updateExamGroupVars: UpdateExamGroupVariables = {
    groupId: ..., 
    name: ..., 
    slug: ..., 
  };
  mutation.mutate(updateExamGroupVars);
  // Variables can be defined inline as well.
  mutation.mutate({ groupId: ..., name: ..., slug: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(updateExamGroupVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.examGroup_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## DeleteExamGroup
You can execute the `DeleteExamGroup` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useDeleteExamGroup(options?: useDataConnectMutationOptions<DeleteExamGroupData, FirebaseError, DeleteExamGroupVariables>): UseDataConnectMutationResult<DeleteExamGroupData, DeleteExamGroupVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useDeleteExamGroup(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteExamGroupData, FirebaseError, DeleteExamGroupVariables>): UseDataConnectMutationResult<DeleteExamGroupData, DeleteExamGroupVariables>;
```

### Variables
The `DeleteExamGroup` Mutation requires an argument of type `DeleteExamGroupVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface DeleteExamGroupVariables {
  groupId: UUIDString;
}
```
### Return Type
Recall that calling the `DeleteExamGroup` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `DeleteExamGroup` Mutation is of type `DeleteExamGroupData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface DeleteExamGroupData {
  examGroup_delete?: ExamGroup_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `DeleteExamGroup`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, DeleteExamGroupVariables } from '@dataconnect/generated';
import { useDeleteExamGroup } from '@dataconnect/generated/react'

export default function DeleteExamGroupComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useDeleteExamGroup();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useDeleteExamGroup(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useDeleteExamGroup(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useDeleteExamGroup(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useDeleteExamGroup` Mutation requires an argument of type `DeleteExamGroupVariables`:
  const deleteExamGroupVars: DeleteExamGroupVariables = {
    groupId: ..., 
  };
  mutation.mutate(deleteExamGroupVars);
  // Variables can be defined inline as well.
  mutation.mutate({ groupId: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(deleteExamGroupVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.examGroup_delete);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreateExamEdition
You can execute the `CreateExamEdition` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreateExamEdition(options?: useDataConnectMutationOptions<CreateExamEditionData, FirebaseError, CreateExamEditionVariables>): UseDataConnectMutationResult<CreateExamEditionData, CreateExamEditionVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreateExamEdition(dc: DataConnect, options?: useDataConnectMutationOptions<CreateExamEditionData, FirebaseError, CreateExamEditionVariables>): UseDataConnectMutationResult<CreateExamEditionData, CreateExamEditionVariables>;
```

### Variables
The `CreateExamEdition` Mutation requires an argument of type `CreateExamEditionVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface CreateExamEditionVariables {
  groupId: UUIDString;
  year: number;
  label?: string | null;
}
```
### Return Type
Recall that calling the `CreateExamEdition` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreateExamEdition` Mutation is of type `CreateExamEditionData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateExamEditionData {
  examEdition_insert: ExamEdition_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreateExamEdition`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreateExamEditionVariables } from '@dataconnect/generated';
import { useCreateExamEdition } from '@dataconnect/generated/react'

export default function CreateExamEditionComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreateExamEdition();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreateExamEdition(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateExamEdition(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateExamEdition(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreateExamEdition` Mutation requires an argument of type `CreateExamEditionVariables`:
  const createExamEditionVars: CreateExamEditionVariables = {
    groupId: ..., 
    year: ..., 
    label: ..., // optional
  };
  mutation.mutate(createExamEditionVars);
  // Variables can be defined inline as well.
  mutation.mutate({ groupId: ..., year: ..., label: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createExamEditionVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.examEdition_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## UpdateExamEdition
You can execute the `UpdateExamEdition` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useUpdateExamEdition(options?: useDataConnectMutationOptions<UpdateExamEditionData, FirebaseError, UpdateExamEditionVariables>): UseDataConnectMutationResult<UpdateExamEditionData, UpdateExamEditionVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useUpdateExamEdition(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateExamEditionData, FirebaseError, UpdateExamEditionVariables>): UseDataConnectMutationResult<UpdateExamEditionData, UpdateExamEditionVariables>;
```

### Variables
The `UpdateExamEdition` Mutation requires an argument of type `UpdateExamEditionVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface UpdateExamEditionVariables {
  editionId: UUIDString;
  year: number;
  label?: string | null;
}
```
### Return Type
Recall that calling the `UpdateExamEdition` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `UpdateExamEdition` Mutation is of type `UpdateExamEditionData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface UpdateExamEditionData {
  examEdition_update?: ExamEdition_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `UpdateExamEdition`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, UpdateExamEditionVariables } from '@dataconnect/generated';
import { useUpdateExamEdition } from '@dataconnect/generated/react'

export default function UpdateExamEditionComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useUpdateExamEdition();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useUpdateExamEdition(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateExamEdition(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateExamEdition(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useUpdateExamEdition` Mutation requires an argument of type `UpdateExamEditionVariables`:
  const updateExamEditionVars: UpdateExamEditionVariables = {
    editionId: ..., 
    year: ..., 
    label: ..., // optional
  };
  mutation.mutate(updateExamEditionVars);
  // Variables can be defined inline as well.
  mutation.mutate({ editionId: ..., year: ..., label: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(updateExamEditionVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.examEdition_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## DeleteExamEdition
You can execute the `DeleteExamEdition` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useDeleteExamEdition(options?: useDataConnectMutationOptions<DeleteExamEditionData, FirebaseError, DeleteExamEditionVariables>): UseDataConnectMutationResult<DeleteExamEditionData, DeleteExamEditionVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useDeleteExamEdition(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteExamEditionData, FirebaseError, DeleteExamEditionVariables>): UseDataConnectMutationResult<DeleteExamEditionData, DeleteExamEditionVariables>;
```

### Variables
The `DeleteExamEdition` Mutation requires an argument of type `DeleteExamEditionVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface DeleteExamEditionVariables {
  editionId: UUIDString;
}
```
### Return Type
Recall that calling the `DeleteExamEdition` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `DeleteExamEdition` Mutation is of type `DeleteExamEditionData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface DeleteExamEditionData {
  examEdition_delete?: ExamEdition_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `DeleteExamEdition`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, DeleteExamEditionVariables } from '@dataconnect/generated';
import { useDeleteExamEdition } from '@dataconnect/generated/react'

export default function DeleteExamEditionComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useDeleteExamEdition();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useDeleteExamEdition(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useDeleteExamEdition(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useDeleteExamEdition(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useDeleteExamEdition` Mutation requires an argument of type `DeleteExamEditionVariables`:
  const deleteExamEditionVars: DeleteExamEditionVariables = {
    editionId: ..., 
  };
  mutation.mutate(deleteExamEditionVars);
  // Variables can be defined inline as well.
  mutation.mutate({ editionId: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(deleteExamEditionVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.examEdition_delete);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreateExam
You can execute the `CreateExam` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreateExam(options?: useDataConnectMutationOptions<CreateExamData, FirebaseError, CreateExamVariables>): UseDataConnectMutationResult<CreateExamData, CreateExamVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreateExam(dc: DataConnect, options?: useDataConnectMutationOptions<CreateExamData, FirebaseError, CreateExamVariables>): UseDataConnectMutationResult<CreateExamData, CreateExamVariables>;
```

### Variables
The `CreateExam` Mutation requires an argument of type `CreateExamVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface CreateExamVariables {
  editionId: UUIDString;
  title: string;
  description?: string | null;
  durationMinutes: number;
}
```
### Return Type
Recall that calling the `CreateExam` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreateExam` Mutation is of type `CreateExamData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateExamData {
  exam_insert: Exam_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreateExam`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreateExamVariables } from '@dataconnect/generated';
import { useCreateExam } from '@dataconnect/generated/react'

export default function CreateExamComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreateExam();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreateExam(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateExam(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateExam(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreateExam` Mutation requires an argument of type `CreateExamVariables`:
  const createExamVars: CreateExamVariables = {
    editionId: ..., 
    title: ..., 
    description: ..., // optional
    durationMinutes: ..., 
  };
  mutation.mutate(createExamVars);
  // Variables can be defined inline as well.
  mutation.mutate({ editionId: ..., title: ..., description: ..., durationMinutes: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createExamVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.exam_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## UpdateExam
You can execute the `UpdateExam` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useUpdateExam(options?: useDataConnectMutationOptions<UpdateExamData, FirebaseError, UpdateExamVariables>): UseDataConnectMutationResult<UpdateExamData, UpdateExamVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useUpdateExam(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateExamData, FirebaseError, UpdateExamVariables>): UseDataConnectMutationResult<UpdateExamData, UpdateExamVariables>;
```

### Variables
The `UpdateExam` Mutation requires an argument of type `UpdateExamVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface UpdateExamVariables {
  examId: UUIDString;
  title: string;
  description?: string | null;
  durationMinutes: number;
}
```
### Return Type
Recall that calling the `UpdateExam` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `UpdateExam` Mutation is of type `UpdateExamData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface UpdateExamData {
  exam_update?: Exam_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `UpdateExam`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, UpdateExamVariables } from '@dataconnect/generated';
import { useUpdateExam } from '@dataconnect/generated/react'

export default function UpdateExamComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useUpdateExam();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useUpdateExam(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateExam(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateExam(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useUpdateExam` Mutation requires an argument of type `UpdateExamVariables`:
  const updateExamVars: UpdateExamVariables = {
    examId: ..., 
    title: ..., 
    description: ..., // optional
    durationMinutes: ..., 
  };
  mutation.mutate(updateExamVars);
  // Variables can be defined inline as well.
  mutation.mutate({ examId: ..., title: ..., description: ..., durationMinutes: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(updateExamVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.exam_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## DeleteExam
You can execute the `DeleteExam` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useDeleteExam(options?: useDataConnectMutationOptions<DeleteExamData, FirebaseError, DeleteExamVariables>): UseDataConnectMutationResult<DeleteExamData, DeleteExamVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useDeleteExam(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteExamData, FirebaseError, DeleteExamVariables>): UseDataConnectMutationResult<DeleteExamData, DeleteExamVariables>;
```

### Variables
The `DeleteExam` Mutation requires an argument of type `DeleteExamVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface DeleteExamVariables {
  examId: UUIDString;
}
```
### Return Type
Recall that calling the `DeleteExam` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `DeleteExam` Mutation is of type `DeleteExamData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface DeleteExamData {
  exam_delete?: Exam_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `DeleteExam`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, DeleteExamVariables } from '@dataconnect/generated';
import { useDeleteExam } from '@dataconnect/generated/react'

export default function DeleteExamComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useDeleteExam();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useDeleteExam(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useDeleteExam(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useDeleteExam(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useDeleteExam` Mutation requires an argument of type `DeleteExamVariables`:
  const deleteExamVars: DeleteExamVariables = {
    examId: ..., 
  };
  mutation.mutate(deleteExamVars);
  // Variables can be defined inline as well.
  mutation.mutate({ examId: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(deleteExamVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.exam_delete);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreateTopic
You can execute the `CreateTopic` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreateTopic(options?: useDataConnectMutationOptions<CreateTopicData, FirebaseError, CreateTopicVariables>): UseDataConnectMutationResult<CreateTopicData, CreateTopicVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreateTopic(dc: DataConnect, options?: useDataConnectMutationOptions<CreateTopicData, FirebaseError, CreateTopicVariables>): UseDataConnectMutationResult<CreateTopicData, CreateTopicVariables>;
```

### Variables
The `CreateTopic` Mutation requires an argument of type `CreateTopicVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface CreateTopicVariables {
  categoryId: UUIDString;
  name: string;
}
```
### Return Type
Recall that calling the `CreateTopic` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreateTopic` Mutation is of type `CreateTopicData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateTopicData {
  topic_insert: Topic_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreateTopic`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreateTopicVariables } from '@dataconnect/generated';
import { useCreateTopic } from '@dataconnect/generated/react'

export default function CreateTopicComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreateTopic();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreateTopic(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateTopic(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateTopic(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreateTopic` Mutation requires an argument of type `CreateTopicVariables`:
  const createTopicVars: CreateTopicVariables = {
    categoryId: ..., 
    name: ..., 
  };
  mutation.mutate(createTopicVars);
  // Variables can be defined inline as well.
  mutation.mutate({ categoryId: ..., name: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createTopicVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.topic_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## DeleteTopic
You can execute the `DeleteTopic` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useDeleteTopic(options?: useDataConnectMutationOptions<DeleteTopicData, FirebaseError, DeleteTopicVariables>): UseDataConnectMutationResult<DeleteTopicData, DeleteTopicVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useDeleteTopic(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteTopicData, FirebaseError, DeleteTopicVariables>): UseDataConnectMutationResult<DeleteTopicData, DeleteTopicVariables>;
```

### Variables
The `DeleteTopic` Mutation requires an argument of type `DeleteTopicVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface DeleteTopicVariables {
  topicId: UUIDString;
}
```
### Return Type
Recall that calling the `DeleteTopic` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `DeleteTopic` Mutation is of type `DeleteTopicData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface DeleteTopicData {
  topic_delete?: Topic_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `DeleteTopic`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, DeleteTopicVariables } from '@dataconnect/generated';
import { useDeleteTopic } from '@dataconnect/generated/react'

export default function DeleteTopicComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useDeleteTopic();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useDeleteTopic(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useDeleteTopic(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useDeleteTopic(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useDeleteTopic` Mutation requires an argument of type `DeleteTopicVariables`:
  const deleteTopicVars: DeleteTopicVariables = {
    topicId: ..., 
  };
  mutation.mutate(deleteTopicVars);
  // Variables can be defined inline as well.
  mutation.mutate({ topicId: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(deleteTopicVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.topic_delete);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## CreateQuestion
You can execute the `CreateQuestion` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useCreateQuestion(options?: useDataConnectMutationOptions<CreateQuestionData, FirebaseError, CreateQuestionVariables>): UseDataConnectMutationResult<CreateQuestionData, CreateQuestionVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useCreateQuestion(dc: DataConnect, options?: useDataConnectMutationOptions<CreateQuestionData, FirebaseError, CreateQuestionVariables>): UseDataConnectMutationResult<CreateQuestionData, CreateQuestionVariables>;
```

### Variables
The `CreateQuestion` Mutation requires an argument of type `CreateQuestionVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
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
```
### Return Type
Recall that calling the `CreateQuestion` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `CreateQuestion` Mutation is of type `CreateQuestionData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateQuestionData {
  question_insert: Question_Key;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `CreateQuestion`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, CreateQuestionVariables } from '@dataconnect/generated';
import { useCreateQuestion } from '@dataconnect/generated/react'

export default function CreateQuestionComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useCreateQuestion();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useCreateQuestion(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateQuestion(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useCreateQuestion(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useCreateQuestion` Mutation requires an argument of type `CreateQuestionVariables`:
  const createQuestionVars: CreateQuestionVariables = {
    examId: ..., 
    topicId: ..., // optional
    statement: ..., 
    explanation: ..., // optional
    difficulty: ..., 
    option1Text: ..., 
    option1IsCorrect: ..., 
    option2Text: ..., 
    option2IsCorrect: ..., 
    option3Text: ..., 
    option3IsCorrect: ..., 
    option4Text: ..., 
    option4IsCorrect: ..., 
  };
  mutation.mutate(createQuestionVars);
  // Variables can be defined inline as well.
  mutation.mutate({ examId: ..., topicId: ..., statement: ..., explanation: ..., difficulty: ..., option1Text: ..., option1IsCorrect: ..., option2Text: ..., option2IsCorrect: ..., option3Text: ..., option3IsCorrect: ..., option4Text: ..., option4IsCorrect: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(createQuestionVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.question_insert);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## UpdateQuestion
You can execute the `UpdateQuestion` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useUpdateQuestion(options?: useDataConnectMutationOptions<UpdateQuestionData, FirebaseError, UpdateQuestionVariables>): UseDataConnectMutationResult<UpdateQuestionData, UpdateQuestionVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useUpdateQuestion(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateQuestionData, FirebaseError, UpdateQuestionVariables>): UseDataConnectMutationResult<UpdateQuestionData, UpdateQuestionVariables>;
```

### Variables
The `UpdateQuestion` Mutation requires an argument of type `UpdateQuestionVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface UpdateQuestionVariables {
  questionId: UUIDString;
  topicId?: UUIDString | null;
  statement: string;
  explanation?: string | null;
  difficulty: QuestionDifficulty;
}
```
### Return Type
Recall that calling the `UpdateQuestion` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `UpdateQuestion` Mutation is of type `UpdateQuestionData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface UpdateQuestionData {
  question_update?: Question_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `UpdateQuestion`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, UpdateQuestionVariables } from '@dataconnect/generated';
import { useUpdateQuestion } from '@dataconnect/generated/react'

export default function UpdateQuestionComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useUpdateQuestion();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useUpdateQuestion(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateQuestion(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useUpdateQuestion(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useUpdateQuestion` Mutation requires an argument of type `UpdateQuestionVariables`:
  const updateQuestionVars: UpdateQuestionVariables = {
    questionId: ..., 
    topicId: ..., // optional
    statement: ..., 
    explanation: ..., // optional
    difficulty: ..., 
  };
  mutation.mutate(updateQuestionVars);
  // Variables can be defined inline as well.
  mutation.mutate({ questionId: ..., topicId: ..., statement: ..., explanation: ..., difficulty: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(updateQuestionVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.question_update);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## DeleteAnswerOptionsByQuestion
You can execute the `DeleteAnswerOptionsByQuestion` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useDeleteAnswerOptionsByQuestion(options?: useDataConnectMutationOptions<DeleteAnswerOptionsByQuestionData, FirebaseError, DeleteAnswerOptionsByQuestionVariables>): UseDataConnectMutationResult<DeleteAnswerOptionsByQuestionData, DeleteAnswerOptionsByQuestionVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useDeleteAnswerOptionsByQuestion(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteAnswerOptionsByQuestionData, FirebaseError, DeleteAnswerOptionsByQuestionVariables>): UseDataConnectMutationResult<DeleteAnswerOptionsByQuestionData, DeleteAnswerOptionsByQuestionVariables>;
```

### Variables
The `DeleteAnswerOptionsByQuestion` Mutation requires an argument of type `DeleteAnswerOptionsByQuestionVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface DeleteAnswerOptionsByQuestionVariables {
  questionId: UUIDString;
}
```
### Return Type
Recall that calling the `DeleteAnswerOptionsByQuestion` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `DeleteAnswerOptionsByQuestion` Mutation is of type `DeleteAnswerOptionsByQuestionData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface DeleteAnswerOptionsByQuestionData {
  answerOption_deleteMany: number;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `DeleteAnswerOptionsByQuestion`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, DeleteAnswerOptionsByQuestionVariables } from '@dataconnect/generated';
import { useDeleteAnswerOptionsByQuestion } from '@dataconnect/generated/react'

export default function DeleteAnswerOptionsByQuestionComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useDeleteAnswerOptionsByQuestion();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useDeleteAnswerOptionsByQuestion(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useDeleteAnswerOptionsByQuestion(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useDeleteAnswerOptionsByQuestion(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useDeleteAnswerOptionsByQuestion` Mutation requires an argument of type `DeleteAnswerOptionsByQuestionVariables`:
  const deleteAnswerOptionsByQuestionVars: DeleteAnswerOptionsByQuestionVariables = {
    questionId: ..., 
  };
  mutation.mutate(deleteAnswerOptionsByQuestionVars);
  // Variables can be defined inline as well.
  mutation.mutate({ questionId: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(deleteAnswerOptionsByQuestionVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.answerOption_deleteMany);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## DeleteQuestion
You can execute the `DeleteQuestion` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useDeleteQuestion(options?: useDataConnectMutationOptions<DeleteQuestionData, FirebaseError, DeleteQuestionVariables>): UseDataConnectMutationResult<DeleteQuestionData, DeleteQuestionVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useDeleteQuestion(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteQuestionData, FirebaseError, DeleteQuestionVariables>): UseDataConnectMutationResult<DeleteQuestionData, DeleteQuestionVariables>;
```

### Variables
The `DeleteQuestion` Mutation requires an argument of type `DeleteQuestionVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface DeleteQuestionVariables {
  questionId: UUIDString;
}
```
### Return Type
Recall that calling the `DeleteQuestion` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `DeleteQuestion` Mutation is of type `DeleteQuestionData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface DeleteQuestionData {
  question_delete?: Question_Key | null;
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `DeleteQuestion`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, DeleteQuestionVariables } from '@dataconnect/generated';
import { useDeleteQuestion } from '@dataconnect/generated/react'

export default function DeleteQuestionComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useDeleteQuestion();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useDeleteQuestion(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useDeleteQuestion(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useDeleteQuestion(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useDeleteQuestion` Mutation requires an argument of type `DeleteQuestionVariables`:
  const deleteQuestionVars: DeleteQuestionVariables = {
    questionId: ..., 
  };
  mutation.mutate(deleteQuestionVars);
  // Variables can be defined inline as well.
  mutation.mutate({ questionId: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(deleteQuestionVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.question_delete);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

## ReplaceAnswerOptions
You can execute the `ReplaceAnswerOptions` Mutation using the `UseMutationResult` object returned by the following Mutation hook function (which is defined in [dataconnect-generated/react/index.d.ts](./index.d.ts)):
```javascript
useReplaceAnswerOptions(options?: useDataConnectMutationOptions<ReplaceAnswerOptionsData, FirebaseError, ReplaceAnswerOptionsVariables>): UseDataConnectMutationResult<ReplaceAnswerOptionsData, ReplaceAnswerOptionsVariables>;
```
You can also pass in a `DataConnect` instance to the Mutation hook function.
```javascript
useReplaceAnswerOptions(dc: DataConnect, options?: useDataConnectMutationOptions<ReplaceAnswerOptionsData, FirebaseError, ReplaceAnswerOptionsVariables>): UseDataConnectMutationResult<ReplaceAnswerOptionsData, ReplaceAnswerOptionsVariables>;
```

### Variables
The `ReplaceAnswerOptions` Mutation requires an argument of type `ReplaceAnswerOptionsVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
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
```
### Return Type
Recall that calling the `ReplaceAnswerOptions` Mutation hook function returns a `UseMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `UseMutationResult.status` field. You can also check for pending / success / error status using the `UseMutationResult.isPending`, `UseMutationResult.isSuccess`, and `UseMutationResult.isError` fields.

To execute the Mutation, call `UseMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation.

To access the data returned by a Mutation, use the `UseMutationResult.data` field. The data for the `ReplaceAnswerOptions` Mutation is of type `ReplaceAnswerOptionsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface ReplaceAnswerOptionsData {
  answerOption_deleteMany: number;
  answerOption_insertMany: AnswerOption_Key[];
}
```

To learn more about the `UseMutationResult` object, see the [TanStack React Query documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useMutation).

### Using `ReplaceAnswerOptions`'s Mutation hook function

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, ReplaceAnswerOptionsVariables } from '@dataconnect/generated';
import { useReplaceAnswerOptions } from '@dataconnect/generated/react'

export default function ReplaceAnswerOptionsComponent() {
  // Call the Mutation hook function to get a `UseMutationResult` object which holds the state of your Mutation.
  const mutation = useReplaceAnswerOptions();

  // You can also pass in a `DataConnect` instance to the Mutation hook function.
  const dataConnect = getDataConnect(connectorConfig);
  const mutation = useReplaceAnswerOptions(dataConnect);

  // You can also pass in a `useDataConnectMutationOptions` object to the Mutation hook function.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useReplaceAnswerOptions(options);

  // You can also pass both a `DataConnect` instance and a `useDataConnectMutationOptions` object.
  const dataConnect = getDataConnect(connectorConfig);
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  const mutation = useReplaceAnswerOptions(dataConnect, options);

  // After calling the Mutation hook function, you must call `UseMutationResult.mutate()` to execute the Mutation.
  // The `useReplaceAnswerOptions` Mutation requires an argument of type `ReplaceAnswerOptionsVariables`:
  const replaceAnswerOptionsVars: ReplaceAnswerOptionsVariables = {
    questionId: ..., 
    option1Text: ..., 
    option1IsCorrect: ..., 
    option2Text: ..., 
    option2IsCorrect: ..., 
    option3Text: ..., 
    option3IsCorrect: ..., 
    option4Text: ..., 
    option4IsCorrect: ..., 
  };
  mutation.mutate(replaceAnswerOptionsVars);
  // Variables can be defined inline as well.
  mutation.mutate({ questionId: ..., option1Text: ..., option1IsCorrect: ..., option2Text: ..., option2IsCorrect: ..., option3Text: ..., option3IsCorrect: ..., option4Text: ..., option4IsCorrect: ..., });

  // You can also pass in a `useDataConnectMutationOptions` object to `UseMutationResult.mutate()`.
  const options = {
    onSuccess: () => { console.log('Mutation succeeded!'); }
  };
  mutation.mutate(replaceAnswerOptionsVars, options);

  // Then, you can render your component dynamically based on the status of the Mutation.
  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  // If the Mutation is successful, you can access the data returned using the `UseMutationResult.data` field.
  if (mutation.isSuccess) {
    console.log(mutation.data.answerOption_deleteMany);
    console.log(mutation.data.answerOption_insertMany);
  }
  return <div>Mutation execution {mutation.isSuccess ? 'successful' : 'failed'}!</div>;
}
```

