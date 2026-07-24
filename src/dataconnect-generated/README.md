# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `exammaster`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
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
  - [*CreateQuestion3*](#createquestion3)
  - [*CreateQuestion2*](#createquestion2)
  - [*UpdateQuestion*](#updatequestion)
  - [*DeleteAnswerOptionsByQuestion*](#deleteansweroptionsbyquestion)
  - [*DeleteAttemptAnswersByQuestion*](#deleteattemptanswersbyquestion)
  - [*DeleteExamAttemptsByExam*](#deleteexamattemptsbyexam)
  - [*DeleteQuestion*](#deletequestion)
  - [*ReplaceAnswerOptions*](#replaceansweroptions)
  - [*ReplaceAnswerOptions3*](#replaceansweroptions3)
  - [*ReplaceAnswerOptions2*](#replaceansweroptions2)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `exammaster`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `exammaster` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## ListExamCategories
You can execute the `ListExamCategories` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listExamCategories(options?: ExecuteQueryOptions): QueryPromise<ListExamCategoriesData, undefined>;

interface ListExamCategoriesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListExamCategoriesData, undefined>;
}
export const listExamCategoriesRef: ListExamCategoriesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listExamCategories(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListExamCategoriesData, undefined>;

interface ListExamCategoriesRef {
  ...
  (dc: DataConnect): QueryRef<ListExamCategoriesData, undefined>;
}
export const listExamCategoriesRef: ListExamCategoriesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listExamCategoriesRef:
```typescript
const name = listExamCategoriesRef.operationName;
console.log(name);
```

### Variables
The `ListExamCategories` query has no variables.
### Return Type
Recall that executing the `ListExamCategories` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListExamCategoriesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListExamCategoriesData {
  examCategories: ({
    id: UUIDString;
    name: string;
    slug: string;
    description?: string | null;
  } & ExamCategory_Key)[];
}
```
### Using `ListExamCategories`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listExamCategories } from '@dataconnect/generated';


// Call the `listExamCategories()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listExamCategories();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listExamCategories(dataConnect);

console.log(data.examCategories);

// Or, you can use the `Promise` API.
listExamCategories().then((response) => {
  const data = response.data;
  console.log(data.examCategories);
});
```

### Using `ListExamCategories`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listExamCategoriesRef } from '@dataconnect/generated';


// Call the `listExamCategoriesRef()` function to get a reference to the query.
const ref = listExamCategoriesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listExamCategoriesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.examCategories);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.examCategories);
});
```

## ListExamGroupsByCategory
You can execute the `ListExamGroupsByCategory` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listExamGroupsByCategory(vars: ListExamGroupsByCategoryVariables, options?: ExecuteQueryOptions): QueryPromise<ListExamGroupsByCategoryData, ListExamGroupsByCategoryVariables>;

interface ListExamGroupsByCategoryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListExamGroupsByCategoryVariables): QueryRef<ListExamGroupsByCategoryData, ListExamGroupsByCategoryVariables>;
}
export const listExamGroupsByCategoryRef: ListExamGroupsByCategoryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listExamGroupsByCategory(dc: DataConnect, vars: ListExamGroupsByCategoryVariables, options?: ExecuteQueryOptions): QueryPromise<ListExamGroupsByCategoryData, ListExamGroupsByCategoryVariables>;

interface ListExamGroupsByCategoryRef {
  ...
  (dc: DataConnect, vars: ListExamGroupsByCategoryVariables): QueryRef<ListExamGroupsByCategoryData, ListExamGroupsByCategoryVariables>;
}
export const listExamGroupsByCategoryRef: ListExamGroupsByCategoryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listExamGroupsByCategoryRef:
```typescript
const name = listExamGroupsByCategoryRef.operationName;
console.log(name);
```

### Variables
The `ListExamGroupsByCategory` query requires an argument of type `ListExamGroupsByCategoryVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListExamGroupsByCategoryVariables {
  categoryId: UUIDString;
}
```
### Return Type
Recall that executing the `ListExamGroupsByCategory` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListExamGroupsByCategoryData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListExamGroupsByCategoryData {
  examGroups: ({
    id: UUIDString;
    name: string;
    slug: string;
  } & ExamGroup_Key)[];
}
```
### Using `ListExamGroupsByCategory`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listExamGroupsByCategory, ListExamGroupsByCategoryVariables } from '@dataconnect/generated';

// The `ListExamGroupsByCategory` query requires an argument of type `ListExamGroupsByCategoryVariables`:
const listExamGroupsByCategoryVars: ListExamGroupsByCategoryVariables = {
  categoryId: ..., 
};

// Call the `listExamGroupsByCategory()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listExamGroupsByCategory(listExamGroupsByCategoryVars);
// Variables can be defined inline as well.
const { data } = await listExamGroupsByCategory({ categoryId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listExamGroupsByCategory(dataConnect, listExamGroupsByCategoryVars);

console.log(data.examGroups);

// Or, you can use the `Promise` API.
listExamGroupsByCategory(listExamGroupsByCategoryVars).then((response) => {
  const data = response.data;
  console.log(data.examGroups);
});
```

### Using `ListExamGroupsByCategory`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listExamGroupsByCategoryRef, ListExamGroupsByCategoryVariables } from '@dataconnect/generated';

// The `ListExamGroupsByCategory` query requires an argument of type `ListExamGroupsByCategoryVariables`:
const listExamGroupsByCategoryVars: ListExamGroupsByCategoryVariables = {
  categoryId: ..., 
};

// Call the `listExamGroupsByCategoryRef()` function to get a reference to the query.
const ref = listExamGroupsByCategoryRef(listExamGroupsByCategoryVars);
// Variables can be defined inline as well.
const ref = listExamGroupsByCategoryRef({ categoryId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listExamGroupsByCategoryRef(dataConnect, listExamGroupsByCategoryVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.examGroups);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.examGroups);
});
```

## ListExamEditionsByGroup
You can execute the `ListExamEditionsByGroup` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listExamEditionsByGroup(vars: ListExamEditionsByGroupVariables, options?: ExecuteQueryOptions): QueryPromise<ListExamEditionsByGroupData, ListExamEditionsByGroupVariables>;

interface ListExamEditionsByGroupRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListExamEditionsByGroupVariables): QueryRef<ListExamEditionsByGroupData, ListExamEditionsByGroupVariables>;
}
export const listExamEditionsByGroupRef: ListExamEditionsByGroupRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listExamEditionsByGroup(dc: DataConnect, vars: ListExamEditionsByGroupVariables, options?: ExecuteQueryOptions): QueryPromise<ListExamEditionsByGroupData, ListExamEditionsByGroupVariables>;

interface ListExamEditionsByGroupRef {
  ...
  (dc: DataConnect, vars: ListExamEditionsByGroupVariables): QueryRef<ListExamEditionsByGroupData, ListExamEditionsByGroupVariables>;
}
export const listExamEditionsByGroupRef: ListExamEditionsByGroupRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listExamEditionsByGroupRef:
```typescript
const name = listExamEditionsByGroupRef.operationName;
console.log(name);
```

### Variables
The `ListExamEditionsByGroup` query requires an argument of type `ListExamEditionsByGroupVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListExamEditionsByGroupVariables {
  groupId: UUIDString;
}
```
### Return Type
Recall that executing the `ListExamEditionsByGroup` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListExamEditionsByGroupData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListExamEditionsByGroupData {
  examEditions: ({
    id: UUIDString;
    year: number;
    label?: string | null;
    examDate?: DateString | null;
  } & ExamEdition_Key)[];
}
```
### Using `ListExamEditionsByGroup`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listExamEditionsByGroup, ListExamEditionsByGroupVariables } from '@dataconnect/generated';

// The `ListExamEditionsByGroup` query requires an argument of type `ListExamEditionsByGroupVariables`:
const listExamEditionsByGroupVars: ListExamEditionsByGroupVariables = {
  groupId: ..., 
};

// Call the `listExamEditionsByGroup()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listExamEditionsByGroup(listExamEditionsByGroupVars);
// Variables can be defined inline as well.
const { data } = await listExamEditionsByGroup({ groupId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listExamEditionsByGroup(dataConnect, listExamEditionsByGroupVars);

console.log(data.examEditions);

// Or, you can use the `Promise` API.
listExamEditionsByGroup(listExamEditionsByGroupVars).then((response) => {
  const data = response.data;
  console.log(data.examEditions);
});
```

### Using `ListExamEditionsByGroup`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listExamEditionsByGroupRef, ListExamEditionsByGroupVariables } from '@dataconnect/generated';

// The `ListExamEditionsByGroup` query requires an argument of type `ListExamEditionsByGroupVariables`:
const listExamEditionsByGroupVars: ListExamEditionsByGroupVariables = {
  groupId: ..., 
};

// Call the `listExamEditionsByGroupRef()` function to get a reference to the query.
const ref = listExamEditionsByGroupRef(listExamEditionsByGroupVars);
// Variables can be defined inline as well.
const ref = listExamEditionsByGroupRef({ groupId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listExamEditionsByGroupRef(dataConnect, listExamEditionsByGroupVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.examEditions);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.examEditions);
});
```

## ListExamsByEdition
You can execute the `ListExamsByEdition` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listExamsByEdition(vars: ListExamsByEditionVariables, options?: ExecuteQueryOptions): QueryPromise<ListExamsByEditionData, ListExamsByEditionVariables>;

interface ListExamsByEditionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListExamsByEditionVariables): QueryRef<ListExamsByEditionData, ListExamsByEditionVariables>;
}
export const listExamsByEditionRef: ListExamsByEditionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listExamsByEdition(dc: DataConnect, vars: ListExamsByEditionVariables, options?: ExecuteQueryOptions): QueryPromise<ListExamsByEditionData, ListExamsByEditionVariables>;

interface ListExamsByEditionRef {
  ...
  (dc: DataConnect, vars: ListExamsByEditionVariables): QueryRef<ListExamsByEditionData, ListExamsByEditionVariables>;
}
export const listExamsByEditionRef: ListExamsByEditionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listExamsByEditionRef:
```typescript
const name = listExamsByEditionRef.operationName;
console.log(name);
```

### Variables
The `ListExamsByEdition` query requires an argument of type `ListExamsByEditionVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListExamsByEditionVariables {
  editionId: UUIDString;
}
```
### Return Type
Recall that executing the `ListExamsByEdition` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListExamsByEditionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListExamsByEditionData {
  exams: ({
    id: UUIDString;
    title: string;
    description?: string | null;
    durationMinutes: number;
  } & Exam_Key)[];
}
```
### Using `ListExamsByEdition`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listExamsByEdition, ListExamsByEditionVariables } from '@dataconnect/generated';

// The `ListExamsByEdition` query requires an argument of type `ListExamsByEditionVariables`:
const listExamsByEditionVars: ListExamsByEditionVariables = {
  editionId: ..., 
};

// Call the `listExamsByEdition()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listExamsByEdition(listExamsByEditionVars);
// Variables can be defined inline as well.
const { data } = await listExamsByEdition({ editionId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listExamsByEdition(dataConnect, listExamsByEditionVars);

console.log(data.exams);

// Or, you can use the `Promise` API.
listExamsByEdition(listExamsByEditionVars).then((response) => {
  const data = response.data;
  console.log(data.exams);
});
```

### Using `ListExamsByEdition`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listExamsByEditionRef, ListExamsByEditionVariables } from '@dataconnect/generated';

// The `ListExamsByEdition` query requires an argument of type `ListExamsByEditionVariables`:
const listExamsByEditionVars: ListExamsByEditionVariables = {
  editionId: ..., 
};

// Call the `listExamsByEditionRef()` function to get a reference to the query.
const ref = listExamsByEditionRef(listExamsByEditionVars);
// Variables can be defined inline as well.
const ref = listExamsByEditionRef({ editionId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listExamsByEditionRef(dataConnect, listExamsByEditionVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.exams);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.exams);
});
```

## GetExamForAttempt
You can execute the `GetExamForAttempt` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getExamForAttempt(vars: GetExamForAttemptVariables, options?: ExecuteQueryOptions): QueryPromise<GetExamForAttemptData, GetExamForAttemptVariables>;

interface GetExamForAttemptRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetExamForAttemptVariables): QueryRef<GetExamForAttemptData, GetExamForAttemptVariables>;
}
export const getExamForAttemptRef: GetExamForAttemptRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getExamForAttempt(dc: DataConnect, vars: GetExamForAttemptVariables, options?: ExecuteQueryOptions): QueryPromise<GetExamForAttemptData, GetExamForAttemptVariables>;

interface GetExamForAttemptRef {
  ...
  (dc: DataConnect, vars: GetExamForAttemptVariables): QueryRef<GetExamForAttemptData, GetExamForAttemptVariables>;
}
export const getExamForAttemptRef: GetExamForAttemptRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getExamForAttemptRef:
```typescript
const name = getExamForAttemptRef.operationName;
console.log(name);
```

### Variables
The `GetExamForAttempt` query requires an argument of type `GetExamForAttemptVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetExamForAttemptVariables {
  examId: UUIDString;
}
```
### Return Type
Recall that executing the `GetExamForAttempt` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetExamForAttemptData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetExamForAttemptData {
  exam?: {
    id: UUIDString;
    title: string;
    durationMinutes: number;
    questionsForAttempt: ({
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
### Using `GetExamForAttempt`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getExamForAttempt, GetExamForAttemptVariables } from '@dataconnect/generated';

// The `GetExamForAttempt` query requires an argument of type `GetExamForAttemptVariables`:
const getExamForAttemptVars: GetExamForAttemptVariables = {
  examId: ..., 
};

// Call the `getExamForAttempt()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getExamForAttempt(getExamForAttemptVars);
// Variables can be defined inline as well.
const { data } = await getExamForAttempt({ examId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getExamForAttempt(dataConnect, getExamForAttemptVars);

console.log(data.exam);

// Or, you can use the `Promise` API.
getExamForAttempt(getExamForAttemptVars).then((response) => {
  const data = response.data;
  console.log(data.exam);
});
```

### Using `GetExamForAttempt`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getExamForAttemptRef, GetExamForAttemptVariables } from '@dataconnect/generated';

// The `GetExamForAttempt` query requires an argument of type `GetExamForAttemptVariables`:
const getExamForAttemptVars: GetExamForAttemptVariables = {
  examId: ..., 
};

// Call the `getExamForAttemptRef()` function to get a reference to the query.
const ref = getExamForAttemptRef(getExamForAttemptVars);
// Variables can be defined inline as well.
const ref = getExamForAttemptRef({ examId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getExamForAttemptRef(dataConnect, getExamForAttemptVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.exam);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.exam);
});
```

## GetAttemptReview
You can execute the `GetAttemptReview` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getAttemptReview(vars: GetAttemptReviewVariables, options?: ExecuteQueryOptions): QueryPromise<GetAttemptReviewData, GetAttemptReviewVariables>;

interface GetAttemptReviewRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetAttemptReviewVariables): QueryRef<GetAttemptReviewData, GetAttemptReviewVariables>;
}
export const getAttemptReviewRef: GetAttemptReviewRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getAttemptReview(dc: DataConnect, vars: GetAttemptReviewVariables, options?: ExecuteQueryOptions): QueryPromise<GetAttemptReviewData, GetAttemptReviewVariables>;

interface GetAttemptReviewRef {
  ...
  (dc: DataConnect, vars: GetAttemptReviewVariables): QueryRef<GetAttemptReviewData, GetAttemptReviewVariables>;
}
export const getAttemptReviewRef: GetAttemptReviewRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getAttemptReviewRef:
```typescript
const name = getAttemptReviewRef.operationName;
console.log(name);
```

### Variables
The `GetAttemptReview` query requires an argument of type `GetAttemptReviewVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetAttemptReviewVariables {
  attemptId: UUIDString;
}
```
### Return Type
Recall that executing the `GetAttemptReview` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetAttemptReviewData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetAttemptReviewData {
  examAttempts: ({
    id: UUIDString;
    exam: {
      id: UUIDString;
      title: string;
      questionsForReview: ({
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
### Using `GetAttemptReview`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getAttemptReview, GetAttemptReviewVariables } from '@dataconnect/generated';

// The `GetAttemptReview` query requires an argument of type `GetAttemptReviewVariables`:
const getAttemptReviewVars: GetAttemptReviewVariables = {
  attemptId: ..., 
};

// Call the `getAttemptReview()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getAttemptReview(getAttemptReviewVars);
// Variables can be defined inline as well.
const { data } = await getAttemptReview({ attemptId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getAttemptReview(dataConnect, getAttemptReviewVars);

console.log(data.examAttempts);

// Or, you can use the `Promise` API.
getAttemptReview(getAttemptReviewVars).then((response) => {
  const data = response.data;
  console.log(data.examAttempts);
});
```

### Using `GetAttemptReview`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getAttemptReviewRef, GetAttemptReviewVariables } from '@dataconnect/generated';

// The `GetAttemptReview` query requires an argument of type `GetAttemptReviewVariables`:
const getAttemptReviewVars: GetAttemptReviewVariables = {
  attemptId: ..., 
};

// Call the `getAttemptReviewRef()` function to get a reference to the query.
const ref = getAttemptReviewRef(getAttemptReviewVars);
// Variables can be defined inline as well.
const ref = getAttemptReviewRef({ attemptId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getAttemptReviewRef(dataConnect, getAttemptReviewVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.examAttempts);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.examAttempts);
});
```

## GetMyAttempts
You can execute the `GetMyAttempts` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getMyAttempts(options?: ExecuteQueryOptions): QueryPromise<GetMyAttemptsData, undefined>;

interface GetMyAttemptsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyAttemptsData, undefined>;
}
export const getMyAttemptsRef: GetMyAttemptsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getMyAttempts(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetMyAttemptsData, undefined>;

interface GetMyAttemptsRef {
  ...
  (dc: DataConnect): QueryRef<GetMyAttemptsData, undefined>;
}
export const getMyAttemptsRef: GetMyAttemptsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getMyAttemptsRef:
```typescript
const name = getMyAttemptsRef.operationName;
console.log(name);
```

### Variables
The `GetMyAttempts` query has no variables.
### Return Type
Recall that executing the `GetMyAttempts` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetMyAttemptsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
### Using `GetMyAttempts`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getMyAttempts } from '@dataconnect/generated';


// Call the `getMyAttempts()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getMyAttempts();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getMyAttempts(dataConnect);

console.log(data.user);

// Or, you can use the `Promise` API.
getMyAttempts().then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

### Using `GetMyAttempts`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getMyAttemptsRef } from '@dataconnect/generated';


// Call the `getMyAttemptsRef()` function to get a reference to the query.
const ref = getMyAttemptsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getMyAttemptsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.user);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

## GetMyAnswersWithTopic
You can execute the `GetMyAnswersWithTopic` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getMyAnswersWithTopic(options?: ExecuteQueryOptions): QueryPromise<GetMyAnswersWithTopicData, undefined>;

interface GetMyAnswersWithTopicRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyAnswersWithTopicData, undefined>;
}
export const getMyAnswersWithTopicRef: GetMyAnswersWithTopicRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getMyAnswersWithTopic(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetMyAnswersWithTopicData, undefined>;

interface GetMyAnswersWithTopicRef {
  ...
  (dc: DataConnect): QueryRef<GetMyAnswersWithTopicData, undefined>;
}
export const getMyAnswersWithTopicRef: GetMyAnswersWithTopicRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getMyAnswersWithTopicRef:
```typescript
const name = getMyAnswersWithTopicRef.operationName;
console.log(name);
```

### Variables
The `GetMyAnswersWithTopic` query has no variables.
### Return Type
Recall that executing the `GetMyAnswersWithTopic` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetMyAnswersWithTopicData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
### Using `GetMyAnswersWithTopic`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getMyAnswersWithTopic } from '@dataconnect/generated';


// Call the `getMyAnswersWithTopic()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getMyAnswersWithTopic();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getMyAnswersWithTopic(dataConnect);

console.log(data.attemptAnswers);

// Or, you can use the `Promise` API.
getMyAnswersWithTopic().then((response) => {
  const data = response.data;
  console.log(data.attemptAnswers);
});
```

### Using `GetMyAnswersWithTopic`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getMyAnswersWithTopicRef } from '@dataconnect/generated';


// Call the `getMyAnswersWithTopicRef()` function to get a reference to the query.
const ref = getMyAnswersWithTopicRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getMyAnswersWithTopicRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.attemptAnswers);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.attemptAnswers);
});
```

## GetInProgressAttempt
You can execute the `GetInProgressAttempt` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getInProgressAttempt(vars: GetInProgressAttemptVariables, options?: ExecuteQueryOptions): QueryPromise<GetInProgressAttemptData, GetInProgressAttemptVariables>;

interface GetInProgressAttemptRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetInProgressAttemptVariables): QueryRef<GetInProgressAttemptData, GetInProgressAttemptVariables>;
}
export const getInProgressAttemptRef: GetInProgressAttemptRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getInProgressAttempt(dc: DataConnect, vars: GetInProgressAttemptVariables, options?: ExecuteQueryOptions): QueryPromise<GetInProgressAttemptData, GetInProgressAttemptVariables>;

interface GetInProgressAttemptRef {
  ...
  (dc: DataConnect, vars: GetInProgressAttemptVariables): QueryRef<GetInProgressAttemptData, GetInProgressAttemptVariables>;
}
export const getInProgressAttemptRef: GetInProgressAttemptRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getInProgressAttemptRef:
```typescript
const name = getInProgressAttemptRef.operationName;
console.log(name);
```

### Variables
The `GetInProgressAttempt` query requires an argument of type `GetInProgressAttemptVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetInProgressAttemptVariables {
  examId: UUIDString;
}
```
### Return Type
Recall that executing the `GetInProgressAttempt` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetInProgressAttemptData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetInProgressAttemptData {
  examAttempts: ({
    id: UUIDString;
    startedAt: TimestampString;
  } & ExamAttempt_Key)[];
}
```
### Using `GetInProgressAttempt`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getInProgressAttempt, GetInProgressAttemptVariables } from '@dataconnect/generated';

// The `GetInProgressAttempt` query requires an argument of type `GetInProgressAttemptVariables`:
const getInProgressAttemptVars: GetInProgressAttemptVariables = {
  examId: ..., 
};

// Call the `getInProgressAttempt()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getInProgressAttempt(getInProgressAttemptVars);
// Variables can be defined inline as well.
const { data } = await getInProgressAttempt({ examId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getInProgressAttempt(dataConnect, getInProgressAttemptVars);

console.log(data.examAttempts);

// Or, you can use the `Promise` API.
getInProgressAttempt(getInProgressAttemptVars).then((response) => {
  const data = response.data;
  console.log(data.examAttempts);
});
```

### Using `GetInProgressAttempt`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getInProgressAttemptRef, GetInProgressAttemptVariables } from '@dataconnect/generated';

// The `GetInProgressAttempt` query requires an argument of type `GetInProgressAttemptVariables`:
const getInProgressAttemptVars: GetInProgressAttemptVariables = {
  examId: ..., 
};

// Call the `getInProgressAttemptRef()` function to get a reference to the query.
const ref = getInProgressAttemptRef(getInProgressAttemptVars);
// Variables can be defined inline as well.
const ref = getInProgressAttemptRef({ examId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getInProgressAttemptRef(dataConnect, getInProgressAttemptVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.examAttempts);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.examAttempts);
});
```

## GetAttemptById
You can execute the `GetAttemptById` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getAttemptById(vars: GetAttemptByIdVariables, options?: ExecuteQueryOptions): QueryPromise<GetAttemptByIdData, GetAttemptByIdVariables>;

interface GetAttemptByIdRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetAttemptByIdVariables): QueryRef<GetAttemptByIdData, GetAttemptByIdVariables>;
}
export const getAttemptByIdRef: GetAttemptByIdRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getAttemptById(dc: DataConnect, vars: GetAttemptByIdVariables, options?: ExecuteQueryOptions): QueryPromise<GetAttemptByIdData, GetAttemptByIdVariables>;

interface GetAttemptByIdRef {
  ...
  (dc: DataConnect, vars: GetAttemptByIdVariables): QueryRef<GetAttemptByIdData, GetAttemptByIdVariables>;
}
export const getAttemptByIdRef: GetAttemptByIdRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getAttemptByIdRef:
```typescript
const name = getAttemptByIdRef.operationName;
console.log(name);
```

### Variables
The `GetAttemptById` query requires an argument of type `GetAttemptByIdVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetAttemptByIdVariables {
  attemptId: UUIDString;
}
```
### Return Type
Recall that executing the `GetAttemptById` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetAttemptByIdData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
### Using `GetAttemptById`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getAttemptById, GetAttemptByIdVariables } from '@dataconnect/generated';

// The `GetAttemptById` query requires an argument of type `GetAttemptByIdVariables`:
const getAttemptByIdVars: GetAttemptByIdVariables = {
  attemptId: ..., 
};

// Call the `getAttemptById()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getAttemptById(getAttemptByIdVars);
// Variables can be defined inline as well.
const { data } = await getAttemptById({ attemptId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getAttemptById(dataConnect, getAttemptByIdVars);

console.log(data.examAttempts);

// Or, you can use the `Promise` API.
getAttemptById(getAttemptByIdVars).then((response) => {
  const data = response.data;
  console.log(data.examAttempts);
});
```

### Using `GetAttemptById`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getAttemptByIdRef, GetAttemptByIdVariables } from '@dataconnect/generated';

// The `GetAttemptById` query requires an argument of type `GetAttemptByIdVariables`:
const getAttemptByIdVars: GetAttemptByIdVariables = {
  attemptId: ..., 
};

// Call the `getAttemptByIdRef()` function to get a reference to the query.
const ref = getAttemptByIdRef(getAttemptByIdVars);
// Variables can be defined inline as well.
const ref = getAttemptByIdRef({ attemptId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getAttemptByIdRef(dataConnect, getAttemptByIdVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.examAttempts);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.examAttempts);
});
```

## GetUserRole
You can execute the `GetUserRole` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getUserRole(vars: GetUserRoleVariables, options?: ExecuteQueryOptions): QueryPromise<GetUserRoleData, GetUserRoleVariables>;

interface GetUserRoleRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUserRoleVariables): QueryRef<GetUserRoleData, GetUserRoleVariables>;
}
export const getUserRoleRef: GetUserRoleRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getUserRole(dc: DataConnect, vars: GetUserRoleVariables, options?: ExecuteQueryOptions): QueryPromise<GetUserRoleData, GetUserRoleVariables>;

interface GetUserRoleRef {
  ...
  (dc: DataConnect, vars: GetUserRoleVariables): QueryRef<GetUserRoleData, GetUserRoleVariables>;
}
export const getUserRoleRef: GetUserRoleRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getUserRoleRef:
```typescript
const name = getUserRoleRef.operationName;
console.log(name);
```

### Variables
The `GetUserRole` query requires an argument of type `GetUserRoleVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetUserRoleVariables {
  userId: string;
}
```
### Return Type
Recall that executing the `GetUserRole` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetUserRoleData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetUserRoleData {
  user?: {
    role: UserRole;
  };
}
```
### Using `GetUserRole`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getUserRole, GetUserRoleVariables } from '@dataconnect/generated';

// The `GetUserRole` query requires an argument of type `GetUserRoleVariables`:
const getUserRoleVars: GetUserRoleVariables = {
  userId: ..., 
};

// Call the `getUserRole()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getUserRole(getUserRoleVars);
// Variables can be defined inline as well.
const { data } = await getUserRole({ userId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getUserRole(dataConnect, getUserRoleVars);

console.log(data.user);

// Or, you can use the `Promise` API.
getUserRole(getUserRoleVars).then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

### Using `GetUserRole`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getUserRoleRef, GetUserRoleVariables } from '@dataconnect/generated';

// The `GetUserRole` query requires an argument of type `GetUserRoleVariables`:
const getUserRoleVars: GetUserRoleVariables = {
  userId: ..., 
};

// Call the `getUserRoleRef()` function to get a reference to the query.
const ref = getUserRoleRef(getUserRoleVars);
// Variables can be defined inline as well.
const ref = getUserRoleRef({ userId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getUserRoleRef(dataConnect, getUserRoleVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.user);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

## AdminListGroups
You can execute the `AdminListGroups` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
adminListGroups(vars: AdminListGroupsVariables, options?: ExecuteQueryOptions): QueryPromise<AdminListGroupsData, AdminListGroupsVariables>;

interface AdminListGroupsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AdminListGroupsVariables): QueryRef<AdminListGroupsData, AdminListGroupsVariables>;
}
export const adminListGroupsRef: AdminListGroupsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
adminListGroups(dc: DataConnect, vars: AdminListGroupsVariables, options?: ExecuteQueryOptions): QueryPromise<AdminListGroupsData, AdminListGroupsVariables>;

interface AdminListGroupsRef {
  ...
  (dc: DataConnect, vars: AdminListGroupsVariables): QueryRef<AdminListGroupsData, AdminListGroupsVariables>;
}
export const adminListGroupsRef: AdminListGroupsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the adminListGroupsRef:
```typescript
const name = adminListGroupsRef.operationName;
console.log(name);
```

### Variables
The `AdminListGroups` query requires an argument of type `AdminListGroupsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AdminListGroupsVariables {
  categoryId: UUIDString;
}
```
### Return Type
Recall that executing the `AdminListGroups` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AdminListGroupsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AdminListGroupsData {
  examGroups: ({
    id: UUIDString;
    categoryId: UUIDString;
    name: string;
    slug: string;
  } & ExamGroup_Key)[];
}
```
### Using `AdminListGroups`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, adminListGroups, AdminListGroupsVariables } from '@dataconnect/generated';

// The `AdminListGroups` query requires an argument of type `AdminListGroupsVariables`:
const adminListGroupsVars: AdminListGroupsVariables = {
  categoryId: ..., 
};

// Call the `adminListGroups()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await adminListGroups(adminListGroupsVars);
// Variables can be defined inline as well.
const { data } = await adminListGroups({ categoryId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await adminListGroups(dataConnect, adminListGroupsVars);

console.log(data.examGroups);

// Or, you can use the `Promise` API.
adminListGroups(adminListGroupsVars).then((response) => {
  const data = response.data;
  console.log(data.examGroups);
});
```

### Using `AdminListGroups`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, adminListGroupsRef, AdminListGroupsVariables } from '@dataconnect/generated';

// The `AdminListGroups` query requires an argument of type `AdminListGroupsVariables`:
const adminListGroupsVars: AdminListGroupsVariables = {
  categoryId: ..., 
};

// Call the `adminListGroupsRef()` function to get a reference to the query.
const ref = adminListGroupsRef(adminListGroupsVars);
// Variables can be defined inline as well.
const ref = adminListGroupsRef({ categoryId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = adminListGroupsRef(dataConnect, adminListGroupsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.examGroups);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.examGroups);
});
```

## AdminListEditions
You can execute the `AdminListEditions` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
adminListEditions(vars: AdminListEditionsVariables, options?: ExecuteQueryOptions): QueryPromise<AdminListEditionsData, AdminListEditionsVariables>;

interface AdminListEditionsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AdminListEditionsVariables): QueryRef<AdminListEditionsData, AdminListEditionsVariables>;
}
export const adminListEditionsRef: AdminListEditionsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
adminListEditions(dc: DataConnect, vars: AdminListEditionsVariables, options?: ExecuteQueryOptions): QueryPromise<AdminListEditionsData, AdminListEditionsVariables>;

interface AdminListEditionsRef {
  ...
  (dc: DataConnect, vars: AdminListEditionsVariables): QueryRef<AdminListEditionsData, AdminListEditionsVariables>;
}
export const adminListEditionsRef: AdminListEditionsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the adminListEditionsRef:
```typescript
const name = adminListEditionsRef.operationName;
console.log(name);
```

### Variables
The `AdminListEditions` query requires an argument of type `AdminListEditionsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AdminListEditionsVariables {
  groupId: UUIDString;
}
```
### Return Type
Recall that executing the `AdminListEditions` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AdminListEditionsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
### Using `AdminListEditions`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, adminListEditions, AdminListEditionsVariables } from '@dataconnect/generated';

// The `AdminListEditions` query requires an argument of type `AdminListEditionsVariables`:
const adminListEditionsVars: AdminListEditionsVariables = {
  groupId: ..., 
};

// Call the `adminListEditions()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await adminListEditions(adminListEditionsVars);
// Variables can be defined inline as well.
const { data } = await adminListEditions({ groupId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await adminListEditions(dataConnect, adminListEditionsVars);

console.log(data.examEditions);

// Or, you can use the `Promise` API.
adminListEditions(adminListEditionsVars).then((response) => {
  const data = response.data;
  console.log(data.examEditions);
});
```

### Using `AdminListEditions`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, adminListEditionsRef, AdminListEditionsVariables } from '@dataconnect/generated';

// The `AdminListEditions` query requires an argument of type `AdminListEditionsVariables`:
const adminListEditionsVars: AdminListEditionsVariables = {
  groupId: ..., 
};

// Call the `adminListEditionsRef()` function to get a reference to the query.
const ref = adminListEditionsRef(adminListEditionsVars);
// Variables can be defined inline as well.
const ref = adminListEditionsRef({ groupId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = adminListEditionsRef(dataConnect, adminListEditionsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.examEditions);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.examEditions);
});
```

## AdminListExams
You can execute the `AdminListExams` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
adminListExams(vars: AdminListExamsVariables, options?: ExecuteQueryOptions): QueryPromise<AdminListExamsData, AdminListExamsVariables>;

interface AdminListExamsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AdminListExamsVariables): QueryRef<AdminListExamsData, AdminListExamsVariables>;
}
export const adminListExamsRef: AdminListExamsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
adminListExams(dc: DataConnect, vars: AdminListExamsVariables, options?: ExecuteQueryOptions): QueryPromise<AdminListExamsData, AdminListExamsVariables>;

interface AdminListExamsRef {
  ...
  (dc: DataConnect, vars: AdminListExamsVariables): QueryRef<AdminListExamsData, AdminListExamsVariables>;
}
export const adminListExamsRef: AdminListExamsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the adminListExamsRef:
```typescript
const name = adminListExamsRef.operationName;
console.log(name);
```

### Variables
The `AdminListExams` query requires an argument of type `AdminListExamsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AdminListExamsVariables {
  editionId: UUIDString;
}
```
### Return Type
Recall that executing the `AdminListExams` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AdminListExamsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
### Using `AdminListExams`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, adminListExams, AdminListExamsVariables } from '@dataconnect/generated';

// The `AdminListExams` query requires an argument of type `AdminListExamsVariables`:
const adminListExamsVars: AdminListExamsVariables = {
  editionId: ..., 
};

// Call the `adminListExams()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await adminListExams(adminListExamsVars);
// Variables can be defined inline as well.
const { data } = await adminListExams({ editionId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await adminListExams(dataConnect, adminListExamsVars);

console.log(data.exams);

// Or, you can use the `Promise` API.
adminListExams(adminListExamsVars).then((response) => {
  const data = response.data;
  console.log(data.exams);
});
```

### Using `AdminListExams`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, adminListExamsRef, AdminListExamsVariables } from '@dataconnect/generated';

// The `AdminListExams` query requires an argument of type `AdminListExamsVariables`:
const adminListExamsVars: AdminListExamsVariables = {
  editionId: ..., 
};

// Call the `adminListExamsRef()` function to get a reference to the query.
const ref = adminListExamsRef(adminListExamsVars);
// Variables can be defined inline as well.
const ref = adminListExamsRef({ editionId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = adminListExamsRef(dataConnect, adminListExamsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.exams);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.exams);
});
```

## AdminListTopics
You can execute the `AdminListTopics` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
adminListTopics(vars: AdminListTopicsVariables, options?: ExecuteQueryOptions): QueryPromise<AdminListTopicsData, AdminListTopicsVariables>;

interface AdminListTopicsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AdminListTopicsVariables): QueryRef<AdminListTopicsData, AdminListTopicsVariables>;
}
export const adminListTopicsRef: AdminListTopicsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
adminListTopics(dc: DataConnect, vars: AdminListTopicsVariables, options?: ExecuteQueryOptions): QueryPromise<AdminListTopicsData, AdminListTopicsVariables>;

interface AdminListTopicsRef {
  ...
  (dc: DataConnect, vars: AdminListTopicsVariables): QueryRef<AdminListTopicsData, AdminListTopicsVariables>;
}
export const adminListTopicsRef: AdminListTopicsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the adminListTopicsRef:
```typescript
const name = adminListTopicsRef.operationName;
console.log(name);
```

### Variables
The `AdminListTopics` query requires an argument of type `AdminListTopicsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AdminListTopicsVariables {
  categoryId: UUIDString;
}
```
### Return Type
Recall that executing the `AdminListTopics` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AdminListTopicsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AdminListTopicsData {
  topics: ({
    id: UUIDString;
    categoryId: UUIDString;
    name: string;
  } & Topic_Key)[];
}
```
### Using `AdminListTopics`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, adminListTopics, AdminListTopicsVariables } from '@dataconnect/generated';

// The `AdminListTopics` query requires an argument of type `AdminListTopicsVariables`:
const adminListTopicsVars: AdminListTopicsVariables = {
  categoryId: ..., 
};

// Call the `adminListTopics()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await adminListTopics(adminListTopicsVars);
// Variables can be defined inline as well.
const { data } = await adminListTopics({ categoryId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await adminListTopics(dataConnect, adminListTopicsVars);

console.log(data.topics);

// Or, you can use the `Promise` API.
adminListTopics(adminListTopicsVars).then((response) => {
  const data = response.data;
  console.log(data.topics);
});
```

### Using `AdminListTopics`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, adminListTopicsRef, AdminListTopicsVariables } from '@dataconnect/generated';

// The `AdminListTopics` query requires an argument of type `AdminListTopicsVariables`:
const adminListTopicsVars: AdminListTopicsVariables = {
  categoryId: ..., 
};

// Call the `adminListTopicsRef()` function to get a reference to the query.
const ref = adminListTopicsRef(adminListTopicsVars);
// Variables can be defined inline as well.
const ref = adminListTopicsRef({ categoryId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = adminListTopicsRef(dataConnect, adminListTopicsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.topics);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.topics);
});
```

## AdminListQuestions
You can execute the `AdminListQuestions` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
adminListQuestions(vars: AdminListQuestionsVariables, options?: ExecuteQueryOptions): QueryPromise<AdminListQuestionsData, AdminListQuestionsVariables>;

interface AdminListQuestionsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AdminListQuestionsVariables): QueryRef<AdminListQuestionsData, AdminListQuestionsVariables>;
}
export const adminListQuestionsRef: AdminListQuestionsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
adminListQuestions(dc: DataConnect, vars: AdminListQuestionsVariables, options?: ExecuteQueryOptions): QueryPromise<AdminListQuestionsData, AdminListQuestionsVariables>;

interface AdminListQuestionsRef {
  ...
  (dc: DataConnect, vars: AdminListQuestionsVariables): QueryRef<AdminListQuestionsData, AdminListQuestionsVariables>;
}
export const adminListQuestionsRef: AdminListQuestionsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the adminListQuestionsRef:
```typescript
const name = adminListQuestionsRef.operationName;
console.log(name);
```

### Variables
The `AdminListQuestions` query requires an argument of type `AdminListQuestionsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AdminListQuestionsVariables {
  examId: UUIDString;
}
```
### Return Type
Recall that executing the `AdminListQuestions` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AdminListQuestionsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
### Using `AdminListQuestions`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, adminListQuestions, AdminListQuestionsVariables } from '@dataconnect/generated';

// The `AdminListQuestions` query requires an argument of type `AdminListQuestionsVariables`:
const adminListQuestionsVars: AdminListQuestionsVariables = {
  examId: ..., 
};

// Call the `adminListQuestions()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await adminListQuestions(adminListQuestionsVars);
// Variables can be defined inline as well.
const { data } = await adminListQuestions({ examId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await adminListQuestions(dataConnect, adminListQuestionsVars);

console.log(data.questions);

// Or, you can use the `Promise` API.
adminListQuestions(adminListQuestionsVars).then((response) => {
  const data = response.data;
  console.log(data.questions);
});
```

### Using `AdminListQuestions`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, adminListQuestionsRef, AdminListQuestionsVariables } from '@dataconnect/generated';

// The `AdminListQuestions` query requires an argument of type `AdminListQuestionsVariables`:
const adminListQuestionsVars: AdminListQuestionsVariables = {
  examId: ..., 
};

// Call the `adminListQuestionsRef()` function to get a reference to the query.
const ref = adminListQuestionsRef(adminListQuestionsVars);
// Variables can be defined inline as well.
const ref = adminListQuestionsRef({ examId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = adminListQuestionsRef(dataConnect, adminListQuestionsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.questions);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.questions);
});
```

## AdminGetQuestion
You can execute the `AdminGetQuestion` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
adminGetQuestion(vars: AdminGetQuestionVariables, options?: ExecuteQueryOptions): QueryPromise<AdminGetQuestionData, AdminGetQuestionVariables>;

interface AdminGetQuestionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AdminGetQuestionVariables): QueryRef<AdminGetQuestionData, AdminGetQuestionVariables>;
}
export const adminGetQuestionRef: AdminGetQuestionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
adminGetQuestion(dc: DataConnect, vars: AdminGetQuestionVariables, options?: ExecuteQueryOptions): QueryPromise<AdminGetQuestionData, AdminGetQuestionVariables>;

interface AdminGetQuestionRef {
  ...
  (dc: DataConnect, vars: AdminGetQuestionVariables): QueryRef<AdminGetQuestionData, AdminGetQuestionVariables>;
}
export const adminGetQuestionRef: AdminGetQuestionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the adminGetQuestionRef:
```typescript
const name = adminGetQuestionRef.operationName;
console.log(name);
```

### Variables
The `AdminGetQuestion` query requires an argument of type `AdminGetQuestionVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AdminGetQuestionVariables {
  questionId: UUIDString;
}
```
### Return Type
Recall that executing the `AdminGetQuestion` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AdminGetQuestionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
### Using `AdminGetQuestion`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, adminGetQuestion, AdminGetQuestionVariables } from '@dataconnect/generated';

// The `AdminGetQuestion` query requires an argument of type `AdminGetQuestionVariables`:
const adminGetQuestionVars: AdminGetQuestionVariables = {
  questionId: ..., 
};

// Call the `adminGetQuestion()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await adminGetQuestion(adminGetQuestionVars);
// Variables can be defined inline as well.
const { data } = await adminGetQuestion({ questionId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await adminGetQuestion(dataConnect, adminGetQuestionVars);

console.log(data.question);

// Or, you can use the `Promise` API.
adminGetQuestion(adminGetQuestionVars).then((response) => {
  const data = response.data;
  console.log(data.question);
});
```

### Using `AdminGetQuestion`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, adminGetQuestionRef, AdminGetQuestionVariables } from '@dataconnect/generated';

// The `AdminGetQuestion` query requires an argument of type `AdminGetQuestionVariables`:
const adminGetQuestionVars: AdminGetQuestionVariables = {
  questionId: ..., 
};

// Call the `adminGetQuestionRef()` function to get a reference to the query.
const ref = adminGetQuestionRef(adminGetQuestionVars);
// Variables can be defined inline as well.
const ref = adminGetQuestionRef({ questionId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = adminGetQuestionRef(dataConnect, adminGetQuestionVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.question);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.question);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `exammaster` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## UpsertUser
You can execute the `UpsertUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
upsertUser(vars: UpsertUserVariables): MutationPromise<UpsertUserData, UpsertUserVariables>;

interface UpsertUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpsertUserVariables): MutationRef<UpsertUserData, UpsertUserVariables>;
}
export const upsertUserRef: UpsertUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
upsertUser(dc: DataConnect, vars: UpsertUserVariables): MutationPromise<UpsertUserData, UpsertUserVariables>;

interface UpsertUserRef {
  ...
  (dc: DataConnect, vars: UpsertUserVariables): MutationRef<UpsertUserData, UpsertUserVariables>;
}
export const upsertUserRef: UpsertUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the upsertUserRef:
```typescript
const name = upsertUserRef.operationName;
console.log(name);
```

### Variables
The `UpsertUser` mutation requires an argument of type `UpsertUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpsertUserVariables {
  email: string;
  displayName?: string | null;
}
```
### Return Type
Recall that executing the `UpsertUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpsertUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpsertUserData {
  user_upsert: User_Key;
}
```
### Using `UpsertUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, upsertUser, UpsertUserVariables } from '@dataconnect/generated';

// The `UpsertUser` mutation requires an argument of type `UpsertUserVariables`:
const upsertUserVars: UpsertUserVariables = {
  email: ..., 
  displayName: ..., // optional
};

// Call the `upsertUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await upsertUser(upsertUserVars);
// Variables can be defined inline as well.
const { data } = await upsertUser({ email: ..., displayName: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await upsertUser(dataConnect, upsertUserVars);

console.log(data.user_upsert);

// Or, you can use the `Promise` API.
upsertUser(upsertUserVars).then((response) => {
  const data = response.data;
  console.log(data.user_upsert);
});
```

### Using `UpsertUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, upsertUserRef, UpsertUserVariables } from '@dataconnect/generated';

// The `UpsertUser` mutation requires an argument of type `UpsertUserVariables`:
const upsertUserVars: UpsertUserVariables = {
  email: ..., 
  displayName: ..., // optional
};

// Call the `upsertUserRef()` function to get a reference to the mutation.
const ref = upsertUserRef(upsertUserVars);
// Variables can be defined inline as well.
const ref = upsertUserRef({ email: ..., displayName: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = upsertUserRef(dataConnect, upsertUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_upsert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_upsert);
});
```

## StartExamAttempt
You can execute the `StartExamAttempt` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
startExamAttempt(vars: StartExamAttemptVariables): MutationPromise<StartExamAttemptData, StartExamAttemptVariables>;

interface StartExamAttemptRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: StartExamAttemptVariables): MutationRef<StartExamAttemptData, StartExamAttemptVariables>;
}
export const startExamAttemptRef: StartExamAttemptRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
startExamAttempt(dc: DataConnect, vars: StartExamAttemptVariables): MutationPromise<StartExamAttemptData, StartExamAttemptVariables>;

interface StartExamAttemptRef {
  ...
  (dc: DataConnect, vars: StartExamAttemptVariables): MutationRef<StartExamAttemptData, StartExamAttemptVariables>;
}
export const startExamAttemptRef: StartExamAttemptRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the startExamAttemptRef:
```typescript
const name = startExamAttemptRef.operationName;
console.log(name);
```

### Variables
The `StartExamAttempt` mutation requires an argument of type `StartExamAttemptVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface StartExamAttemptVariables {
  examId: UUIDString;
}
```
### Return Type
Recall that executing the `StartExamAttempt` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `StartExamAttemptData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface StartExamAttemptData {
  examAttempt_insert: ExamAttempt_Key;
}
```
### Using `StartExamAttempt`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, startExamAttempt, StartExamAttemptVariables } from '@dataconnect/generated';

// The `StartExamAttempt` mutation requires an argument of type `StartExamAttemptVariables`:
const startExamAttemptVars: StartExamAttemptVariables = {
  examId: ..., 
};

// Call the `startExamAttempt()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await startExamAttempt(startExamAttemptVars);
// Variables can be defined inline as well.
const { data } = await startExamAttempt({ examId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await startExamAttempt(dataConnect, startExamAttemptVars);

console.log(data.examAttempt_insert);

// Or, you can use the `Promise` API.
startExamAttempt(startExamAttemptVars).then((response) => {
  const data = response.data;
  console.log(data.examAttempt_insert);
});
```

### Using `StartExamAttempt`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, startExamAttemptRef, StartExamAttemptVariables } from '@dataconnect/generated';

// The `StartExamAttempt` mutation requires an argument of type `StartExamAttemptVariables`:
const startExamAttemptVars: StartExamAttemptVariables = {
  examId: ..., 
};

// Call the `startExamAttemptRef()` function to get a reference to the mutation.
const ref = startExamAttemptRef(startExamAttemptVars);
// Variables can be defined inline as well.
const ref = startExamAttemptRef({ examId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = startExamAttemptRef(dataConnect, startExamAttemptVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.examAttempt_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.examAttempt_insert);
});
```

## SaveAttemptAnswer
You can execute the `SaveAttemptAnswer` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
saveAttemptAnswer(vars: SaveAttemptAnswerVariables): MutationPromise<SaveAttemptAnswerData, SaveAttemptAnswerVariables>;

interface SaveAttemptAnswerRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: SaveAttemptAnswerVariables): MutationRef<SaveAttemptAnswerData, SaveAttemptAnswerVariables>;
}
export const saveAttemptAnswerRef: SaveAttemptAnswerRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
saveAttemptAnswer(dc: DataConnect, vars: SaveAttemptAnswerVariables): MutationPromise<SaveAttemptAnswerData, SaveAttemptAnswerVariables>;

interface SaveAttemptAnswerRef {
  ...
  (dc: DataConnect, vars: SaveAttemptAnswerVariables): MutationRef<SaveAttemptAnswerData, SaveAttemptAnswerVariables>;
}
export const saveAttemptAnswerRef: SaveAttemptAnswerRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the saveAttemptAnswerRef:
```typescript
const name = saveAttemptAnswerRef.operationName;
console.log(name);
```

### Variables
The `SaveAttemptAnswer` mutation requires an argument of type `SaveAttemptAnswerVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface SaveAttemptAnswerVariables {
  attemptId: UUIDString;
  questionId: UUIDString;
  selectedOptionId?: UUIDString | null;
  isCorrect?: boolean | null;
}
```
### Return Type
Recall that executing the `SaveAttemptAnswer` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `SaveAttemptAnswerData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface SaveAttemptAnswerData {
  attemptAnswer_upsert: AttemptAnswer_Key;
}
```
### Using `SaveAttemptAnswer`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, saveAttemptAnswer, SaveAttemptAnswerVariables } from '@dataconnect/generated';

// The `SaveAttemptAnswer` mutation requires an argument of type `SaveAttemptAnswerVariables`:
const saveAttemptAnswerVars: SaveAttemptAnswerVariables = {
  attemptId: ..., 
  questionId: ..., 
  selectedOptionId: ..., // optional
  isCorrect: ..., // optional
};

// Call the `saveAttemptAnswer()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await saveAttemptAnswer(saveAttemptAnswerVars);
// Variables can be defined inline as well.
const { data } = await saveAttemptAnswer({ attemptId: ..., questionId: ..., selectedOptionId: ..., isCorrect: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await saveAttemptAnswer(dataConnect, saveAttemptAnswerVars);

console.log(data.attemptAnswer_upsert);

// Or, you can use the `Promise` API.
saveAttemptAnswer(saveAttemptAnswerVars).then((response) => {
  const data = response.data;
  console.log(data.attemptAnswer_upsert);
});
```

### Using `SaveAttemptAnswer`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, saveAttemptAnswerRef, SaveAttemptAnswerVariables } from '@dataconnect/generated';

// The `SaveAttemptAnswer` mutation requires an argument of type `SaveAttemptAnswerVariables`:
const saveAttemptAnswerVars: SaveAttemptAnswerVariables = {
  attemptId: ..., 
  questionId: ..., 
  selectedOptionId: ..., // optional
  isCorrect: ..., // optional
};

// Call the `saveAttemptAnswerRef()` function to get a reference to the mutation.
const ref = saveAttemptAnswerRef(saveAttemptAnswerVars);
// Variables can be defined inline as well.
const ref = saveAttemptAnswerRef({ attemptId: ..., questionId: ..., selectedOptionId: ..., isCorrect: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = saveAttemptAnswerRef(dataConnect, saveAttemptAnswerVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.attemptAnswer_upsert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.attemptAnswer_upsert);
});
```

## FinishExamAttempt
You can execute the `FinishExamAttempt` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
finishExamAttempt(vars: FinishExamAttemptVariables): MutationPromise<FinishExamAttemptData, FinishExamAttemptVariables>;

interface FinishExamAttemptRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: FinishExamAttemptVariables): MutationRef<FinishExamAttemptData, FinishExamAttemptVariables>;
}
export const finishExamAttemptRef: FinishExamAttemptRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
finishExamAttempt(dc: DataConnect, vars: FinishExamAttemptVariables): MutationPromise<FinishExamAttemptData, FinishExamAttemptVariables>;

interface FinishExamAttemptRef {
  ...
  (dc: DataConnect, vars: FinishExamAttemptVariables): MutationRef<FinishExamAttemptData, FinishExamAttemptVariables>;
}
export const finishExamAttemptRef: FinishExamAttemptRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the finishExamAttemptRef:
```typescript
const name = finishExamAttemptRef.operationName;
console.log(name);
```

### Variables
The `FinishExamAttempt` mutation requires an argument of type `FinishExamAttemptVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface FinishExamAttemptVariables {
  attemptId: UUIDString;
  score: number;
  timeSpentSeconds: number;
}
```
### Return Type
Recall that executing the `FinishExamAttempt` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `FinishExamAttemptData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface FinishExamAttemptData {
  examAttempt_update?: ExamAttempt_Key | null;
}
```
### Using `FinishExamAttempt`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, finishExamAttempt, FinishExamAttemptVariables } from '@dataconnect/generated';

// The `FinishExamAttempt` mutation requires an argument of type `FinishExamAttemptVariables`:
const finishExamAttemptVars: FinishExamAttemptVariables = {
  attemptId: ..., 
  score: ..., 
  timeSpentSeconds: ..., 
};

// Call the `finishExamAttempt()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await finishExamAttempt(finishExamAttemptVars);
// Variables can be defined inline as well.
const { data } = await finishExamAttempt({ attemptId: ..., score: ..., timeSpentSeconds: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await finishExamAttempt(dataConnect, finishExamAttemptVars);

console.log(data.examAttempt_update);

// Or, you can use the `Promise` API.
finishExamAttempt(finishExamAttemptVars).then((response) => {
  const data = response.data;
  console.log(data.examAttempt_update);
});
```

### Using `FinishExamAttempt`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, finishExamAttemptRef, FinishExamAttemptVariables } from '@dataconnect/generated';

// The `FinishExamAttempt` mutation requires an argument of type `FinishExamAttemptVariables`:
const finishExamAttemptVars: FinishExamAttemptVariables = {
  attemptId: ..., 
  score: ..., 
  timeSpentSeconds: ..., 
};

// Call the `finishExamAttemptRef()` function to get a reference to the mutation.
const ref = finishExamAttemptRef(finishExamAttemptVars);
// Variables can be defined inline as well.
const ref = finishExamAttemptRef({ attemptId: ..., score: ..., timeSpentSeconds: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = finishExamAttemptRef(dataConnect, finishExamAttemptVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.examAttempt_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.examAttempt_update);
});
```

## CreateExamCategory
You can execute the `CreateExamCategory` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createExamCategory(vars: CreateExamCategoryVariables): MutationPromise<CreateExamCategoryData, CreateExamCategoryVariables>;

interface CreateExamCategoryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateExamCategoryVariables): MutationRef<CreateExamCategoryData, CreateExamCategoryVariables>;
}
export const createExamCategoryRef: CreateExamCategoryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createExamCategory(dc: DataConnect, vars: CreateExamCategoryVariables): MutationPromise<CreateExamCategoryData, CreateExamCategoryVariables>;

interface CreateExamCategoryRef {
  ...
  (dc: DataConnect, vars: CreateExamCategoryVariables): MutationRef<CreateExamCategoryData, CreateExamCategoryVariables>;
}
export const createExamCategoryRef: CreateExamCategoryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createExamCategoryRef:
```typescript
const name = createExamCategoryRef.operationName;
console.log(name);
```

### Variables
The `CreateExamCategory` mutation requires an argument of type `CreateExamCategoryVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateExamCategoryVariables {
  name: string;
  slug: string;
  description?: string | null;
}
```
### Return Type
Recall that executing the `CreateExamCategory` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateExamCategoryData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateExamCategoryData {
  examCategory_insert: ExamCategory_Key;
}
```
### Using `CreateExamCategory`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createExamCategory, CreateExamCategoryVariables } from '@dataconnect/generated';

// The `CreateExamCategory` mutation requires an argument of type `CreateExamCategoryVariables`:
const createExamCategoryVars: CreateExamCategoryVariables = {
  name: ..., 
  slug: ..., 
  description: ..., // optional
};

// Call the `createExamCategory()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createExamCategory(createExamCategoryVars);
// Variables can be defined inline as well.
const { data } = await createExamCategory({ name: ..., slug: ..., description: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createExamCategory(dataConnect, createExamCategoryVars);

console.log(data.examCategory_insert);

// Or, you can use the `Promise` API.
createExamCategory(createExamCategoryVars).then((response) => {
  const data = response.data;
  console.log(data.examCategory_insert);
});
```

### Using `CreateExamCategory`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createExamCategoryRef, CreateExamCategoryVariables } from '@dataconnect/generated';

// The `CreateExamCategory` mutation requires an argument of type `CreateExamCategoryVariables`:
const createExamCategoryVars: CreateExamCategoryVariables = {
  name: ..., 
  slug: ..., 
  description: ..., // optional
};

// Call the `createExamCategoryRef()` function to get a reference to the mutation.
const ref = createExamCategoryRef(createExamCategoryVars);
// Variables can be defined inline as well.
const ref = createExamCategoryRef({ name: ..., slug: ..., description: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createExamCategoryRef(dataConnect, createExamCategoryVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.examCategory_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.examCategory_insert);
});
```

## UpdateExamCategory
You can execute the `UpdateExamCategory` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateExamCategory(vars: UpdateExamCategoryVariables): MutationPromise<UpdateExamCategoryData, UpdateExamCategoryVariables>;

interface UpdateExamCategoryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateExamCategoryVariables): MutationRef<UpdateExamCategoryData, UpdateExamCategoryVariables>;
}
export const updateExamCategoryRef: UpdateExamCategoryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateExamCategory(dc: DataConnect, vars: UpdateExamCategoryVariables): MutationPromise<UpdateExamCategoryData, UpdateExamCategoryVariables>;

interface UpdateExamCategoryRef {
  ...
  (dc: DataConnect, vars: UpdateExamCategoryVariables): MutationRef<UpdateExamCategoryData, UpdateExamCategoryVariables>;
}
export const updateExamCategoryRef: UpdateExamCategoryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateExamCategoryRef:
```typescript
const name = updateExamCategoryRef.operationName;
console.log(name);
```

### Variables
The `UpdateExamCategory` mutation requires an argument of type `UpdateExamCategoryVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateExamCategoryVariables {
  categoryId: UUIDString;
  name: string;
  slug: string;
  description?: string | null;
}
```
### Return Type
Recall that executing the `UpdateExamCategory` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateExamCategoryData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateExamCategoryData {
  examCategory_update?: ExamCategory_Key | null;
}
```
### Using `UpdateExamCategory`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateExamCategory, UpdateExamCategoryVariables } from '@dataconnect/generated';

// The `UpdateExamCategory` mutation requires an argument of type `UpdateExamCategoryVariables`:
const updateExamCategoryVars: UpdateExamCategoryVariables = {
  categoryId: ..., 
  name: ..., 
  slug: ..., 
  description: ..., // optional
};

// Call the `updateExamCategory()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateExamCategory(updateExamCategoryVars);
// Variables can be defined inline as well.
const { data } = await updateExamCategory({ categoryId: ..., name: ..., slug: ..., description: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateExamCategory(dataConnect, updateExamCategoryVars);

console.log(data.examCategory_update);

// Or, you can use the `Promise` API.
updateExamCategory(updateExamCategoryVars).then((response) => {
  const data = response.data;
  console.log(data.examCategory_update);
});
```

### Using `UpdateExamCategory`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateExamCategoryRef, UpdateExamCategoryVariables } from '@dataconnect/generated';

// The `UpdateExamCategory` mutation requires an argument of type `UpdateExamCategoryVariables`:
const updateExamCategoryVars: UpdateExamCategoryVariables = {
  categoryId: ..., 
  name: ..., 
  slug: ..., 
  description: ..., // optional
};

// Call the `updateExamCategoryRef()` function to get a reference to the mutation.
const ref = updateExamCategoryRef(updateExamCategoryVars);
// Variables can be defined inline as well.
const ref = updateExamCategoryRef({ categoryId: ..., name: ..., slug: ..., description: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateExamCategoryRef(dataConnect, updateExamCategoryVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.examCategory_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.examCategory_update);
});
```

## DeleteExamCategory
You can execute the `DeleteExamCategory` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteExamCategory(vars: DeleteExamCategoryVariables): MutationPromise<DeleteExamCategoryData, DeleteExamCategoryVariables>;

interface DeleteExamCategoryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteExamCategoryVariables): MutationRef<DeleteExamCategoryData, DeleteExamCategoryVariables>;
}
export const deleteExamCategoryRef: DeleteExamCategoryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteExamCategory(dc: DataConnect, vars: DeleteExamCategoryVariables): MutationPromise<DeleteExamCategoryData, DeleteExamCategoryVariables>;

interface DeleteExamCategoryRef {
  ...
  (dc: DataConnect, vars: DeleteExamCategoryVariables): MutationRef<DeleteExamCategoryData, DeleteExamCategoryVariables>;
}
export const deleteExamCategoryRef: DeleteExamCategoryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteExamCategoryRef:
```typescript
const name = deleteExamCategoryRef.operationName;
console.log(name);
```

### Variables
The `DeleteExamCategory` mutation requires an argument of type `DeleteExamCategoryVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteExamCategoryVariables {
  categoryId: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteExamCategory` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteExamCategoryData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteExamCategoryData {
  examCategory_delete?: ExamCategory_Key | null;
}
```
### Using `DeleteExamCategory`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteExamCategory, DeleteExamCategoryVariables } from '@dataconnect/generated';

// The `DeleteExamCategory` mutation requires an argument of type `DeleteExamCategoryVariables`:
const deleteExamCategoryVars: DeleteExamCategoryVariables = {
  categoryId: ..., 
};

// Call the `deleteExamCategory()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteExamCategory(deleteExamCategoryVars);
// Variables can be defined inline as well.
const { data } = await deleteExamCategory({ categoryId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteExamCategory(dataConnect, deleteExamCategoryVars);

console.log(data.examCategory_delete);

// Or, you can use the `Promise` API.
deleteExamCategory(deleteExamCategoryVars).then((response) => {
  const data = response.data;
  console.log(data.examCategory_delete);
});
```

### Using `DeleteExamCategory`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteExamCategoryRef, DeleteExamCategoryVariables } from '@dataconnect/generated';

// The `DeleteExamCategory` mutation requires an argument of type `DeleteExamCategoryVariables`:
const deleteExamCategoryVars: DeleteExamCategoryVariables = {
  categoryId: ..., 
};

// Call the `deleteExamCategoryRef()` function to get a reference to the mutation.
const ref = deleteExamCategoryRef(deleteExamCategoryVars);
// Variables can be defined inline as well.
const ref = deleteExamCategoryRef({ categoryId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteExamCategoryRef(dataConnect, deleteExamCategoryVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.examCategory_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.examCategory_delete);
});
```

## CreateExamGroup
You can execute the `CreateExamGroup` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createExamGroup(vars: CreateExamGroupVariables): MutationPromise<CreateExamGroupData, CreateExamGroupVariables>;

interface CreateExamGroupRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateExamGroupVariables): MutationRef<CreateExamGroupData, CreateExamGroupVariables>;
}
export const createExamGroupRef: CreateExamGroupRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createExamGroup(dc: DataConnect, vars: CreateExamGroupVariables): MutationPromise<CreateExamGroupData, CreateExamGroupVariables>;

interface CreateExamGroupRef {
  ...
  (dc: DataConnect, vars: CreateExamGroupVariables): MutationRef<CreateExamGroupData, CreateExamGroupVariables>;
}
export const createExamGroupRef: CreateExamGroupRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createExamGroupRef:
```typescript
const name = createExamGroupRef.operationName;
console.log(name);
```

### Variables
The `CreateExamGroup` mutation requires an argument of type `CreateExamGroupVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateExamGroupVariables {
  categoryId: UUIDString;
  name: string;
  slug: string;
}
```
### Return Type
Recall that executing the `CreateExamGroup` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateExamGroupData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateExamGroupData {
  examGroup_insert: ExamGroup_Key;
}
```
### Using `CreateExamGroup`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createExamGroup, CreateExamGroupVariables } from '@dataconnect/generated';

// The `CreateExamGroup` mutation requires an argument of type `CreateExamGroupVariables`:
const createExamGroupVars: CreateExamGroupVariables = {
  categoryId: ..., 
  name: ..., 
  slug: ..., 
};

// Call the `createExamGroup()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createExamGroup(createExamGroupVars);
// Variables can be defined inline as well.
const { data } = await createExamGroup({ categoryId: ..., name: ..., slug: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createExamGroup(dataConnect, createExamGroupVars);

console.log(data.examGroup_insert);

// Or, you can use the `Promise` API.
createExamGroup(createExamGroupVars).then((response) => {
  const data = response.data;
  console.log(data.examGroup_insert);
});
```

### Using `CreateExamGroup`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createExamGroupRef, CreateExamGroupVariables } from '@dataconnect/generated';

// The `CreateExamGroup` mutation requires an argument of type `CreateExamGroupVariables`:
const createExamGroupVars: CreateExamGroupVariables = {
  categoryId: ..., 
  name: ..., 
  slug: ..., 
};

// Call the `createExamGroupRef()` function to get a reference to the mutation.
const ref = createExamGroupRef(createExamGroupVars);
// Variables can be defined inline as well.
const ref = createExamGroupRef({ categoryId: ..., name: ..., slug: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createExamGroupRef(dataConnect, createExamGroupVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.examGroup_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.examGroup_insert);
});
```

## UpdateExamGroup
You can execute the `UpdateExamGroup` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateExamGroup(vars: UpdateExamGroupVariables): MutationPromise<UpdateExamGroupData, UpdateExamGroupVariables>;

interface UpdateExamGroupRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateExamGroupVariables): MutationRef<UpdateExamGroupData, UpdateExamGroupVariables>;
}
export const updateExamGroupRef: UpdateExamGroupRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateExamGroup(dc: DataConnect, vars: UpdateExamGroupVariables): MutationPromise<UpdateExamGroupData, UpdateExamGroupVariables>;

interface UpdateExamGroupRef {
  ...
  (dc: DataConnect, vars: UpdateExamGroupVariables): MutationRef<UpdateExamGroupData, UpdateExamGroupVariables>;
}
export const updateExamGroupRef: UpdateExamGroupRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateExamGroupRef:
```typescript
const name = updateExamGroupRef.operationName;
console.log(name);
```

### Variables
The `UpdateExamGroup` mutation requires an argument of type `UpdateExamGroupVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateExamGroupVariables {
  groupId: UUIDString;
  name: string;
  slug: string;
}
```
### Return Type
Recall that executing the `UpdateExamGroup` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateExamGroupData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateExamGroupData {
  examGroup_update?: ExamGroup_Key | null;
}
```
### Using `UpdateExamGroup`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateExamGroup, UpdateExamGroupVariables } from '@dataconnect/generated';

// The `UpdateExamGroup` mutation requires an argument of type `UpdateExamGroupVariables`:
const updateExamGroupVars: UpdateExamGroupVariables = {
  groupId: ..., 
  name: ..., 
  slug: ..., 
};

// Call the `updateExamGroup()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateExamGroup(updateExamGroupVars);
// Variables can be defined inline as well.
const { data } = await updateExamGroup({ groupId: ..., name: ..., slug: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateExamGroup(dataConnect, updateExamGroupVars);

console.log(data.examGroup_update);

// Or, you can use the `Promise` API.
updateExamGroup(updateExamGroupVars).then((response) => {
  const data = response.data;
  console.log(data.examGroup_update);
});
```

### Using `UpdateExamGroup`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateExamGroupRef, UpdateExamGroupVariables } from '@dataconnect/generated';

// The `UpdateExamGroup` mutation requires an argument of type `UpdateExamGroupVariables`:
const updateExamGroupVars: UpdateExamGroupVariables = {
  groupId: ..., 
  name: ..., 
  slug: ..., 
};

// Call the `updateExamGroupRef()` function to get a reference to the mutation.
const ref = updateExamGroupRef(updateExamGroupVars);
// Variables can be defined inline as well.
const ref = updateExamGroupRef({ groupId: ..., name: ..., slug: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateExamGroupRef(dataConnect, updateExamGroupVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.examGroup_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.examGroup_update);
});
```

## DeleteExamGroup
You can execute the `DeleteExamGroup` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteExamGroup(vars: DeleteExamGroupVariables): MutationPromise<DeleteExamGroupData, DeleteExamGroupVariables>;

interface DeleteExamGroupRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteExamGroupVariables): MutationRef<DeleteExamGroupData, DeleteExamGroupVariables>;
}
export const deleteExamGroupRef: DeleteExamGroupRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteExamGroup(dc: DataConnect, vars: DeleteExamGroupVariables): MutationPromise<DeleteExamGroupData, DeleteExamGroupVariables>;

interface DeleteExamGroupRef {
  ...
  (dc: DataConnect, vars: DeleteExamGroupVariables): MutationRef<DeleteExamGroupData, DeleteExamGroupVariables>;
}
export const deleteExamGroupRef: DeleteExamGroupRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteExamGroupRef:
```typescript
const name = deleteExamGroupRef.operationName;
console.log(name);
```

### Variables
The `DeleteExamGroup` mutation requires an argument of type `DeleteExamGroupVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteExamGroupVariables {
  groupId: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteExamGroup` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteExamGroupData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteExamGroupData {
  examGroup_delete?: ExamGroup_Key | null;
}
```
### Using `DeleteExamGroup`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteExamGroup, DeleteExamGroupVariables } from '@dataconnect/generated';

// The `DeleteExamGroup` mutation requires an argument of type `DeleteExamGroupVariables`:
const deleteExamGroupVars: DeleteExamGroupVariables = {
  groupId: ..., 
};

// Call the `deleteExamGroup()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteExamGroup(deleteExamGroupVars);
// Variables can be defined inline as well.
const { data } = await deleteExamGroup({ groupId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteExamGroup(dataConnect, deleteExamGroupVars);

console.log(data.examGroup_delete);

// Or, you can use the `Promise` API.
deleteExamGroup(deleteExamGroupVars).then((response) => {
  const data = response.data;
  console.log(data.examGroup_delete);
});
```

### Using `DeleteExamGroup`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteExamGroupRef, DeleteExamGroupVariables } from '@dataconnect/generated';

// The `DeleteExamGroup` mutation requires an argument of type `DeleteExamGroupVariables`:
const deleteExamGroupVars: DeleteExamGroupVariables = {
  groupId: ..., 
};

// Call the `deleteExamGroupRef()` function to get a reference to the mutation.
const ref = deleteExamGroupRef(deleteExamGroupVars);
// Variables can be defined inline as well.
const ref = deleteExamGroupRef({ groupId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteExamGroupRef(dataConnect, deleteExamGroupVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.examGroup_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.examGroup_delete);
});
```

## CreateExamEdition
You can execute the `CreateExamEdition` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createExamEdition(vars: CreateExamEditionVariables): MutationPromise<CreateExamEditionData, CreateExamEditionVariables>;

interface CreateExamEditionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateExamEditionVariables): MutationRef<CreateExamEditionData, CreateExamEditionVariables>;
}
export const createExamEditionRef: CreateExamEditionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createExamEdition(dc: DataConnect, vars: CreateExamEditionVariables): MutationPromise<CreateExamEditionData, CreateExamEditionVariables>;

interface CreateExamEditionRef {
  ...
  (dc: DataConnect, vars: CreateExamEditionVariables): MutationRef<CreateExamEditionData, CreateExamEditionVariables>;
}
export const createExamEditionRef: CreateExamEditionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createExamEditionRef:
```typescript
const name = createExamEditionRef.operationName;
console.log(name);
```

### Variables
The `CreateExamEdition` mutation requires an argument of type `CreateExamEditionVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateExamEditionVariables {
  groupId: UUIDString;
  year: number;
  label?: string | null;
}
```
### Return Type
Recall that executing the `CreateExamEdition` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateExamEditionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateExamEditionData {
  examEdition_insert: ExamEdition_Key;
}
```
### Using `CreateExamEdition`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createExamEdition, CreateExamEditionVariables } from '@dataconnect/generated';

// The `CreateExamEdition` mutation requires an argument of type `CreateExamEditionVariables`:
const createExamEditionVars: CreateExamEditionVariables = {
  groupId: ..., 
  year: ..., 
  label: ..., // optional
};

// Call the `createExamEdition()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createExamEdition(createExamEditionVars);
// Variables can be defined inline as well.
const { data } = await createExamEdition({ groupId: ..., year: ..., label: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createExamEdition(dataConnect, createExamEditionVars);

console.log(data.examEdition_insert);

// Or, you can use the `Promise` API.
createExamEdition(createExamEditionVars).then((response) => {
  const data = response.data;
  console.log(data.examEdition_insert);
});
```

### Using `CreateExamEdition`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createExamEditionRef, CreateExamEditionVariables } from '@dataconnect/generated';

// The `CreateExamEdition` mutation requires an argument of type `CreateExamEditionVariables`:
const createExamEditionVars: CreateExamEditionVariables = {
  groupId: ..., 
  year: ..., 
  label: ..., // optional
};

// Call the `createExamEditionRef()` function to get a reference to the mutation.
const ref = createExamEditionRef(createExamEditionVars);
// Variables can be defined inline as well.
const ref = createExamEditionRef({ groupId: ..., year: ..., label: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createExamEditionRef(dataConnect, createExamEditionVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.examEdition_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.examEdition_insert);
});
```

## UpdateExamEdition
You can execute the `UpdateExamEdition` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateExamEdition(vars: UpdateExamEditionVariables): MutationPromise<UpdateExamEditionData, UpdateExamEditionVariables>;

interface UpdateExamEditionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateExamEditionVariables): MutationRef<UpdateExamEditionData, UpdateExamEditionVariables>;
}
export const updateExamEditionRef: UpdateExamEditionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateExamEdition(dc: DataConnect, vars: UpdateExamEditionVariables): MutationPromise<UpdateExamEditionData, UpdateExamEditionVariables>;

interface UpdateExamEditionRef {
  ...
  (dc: DataConnect, vars: UpdateExamEditionVariables): MutationRef<UpdateExamEditionData, UpdateExamEditionVariables>;
}
export const updateExamEditionRef: UpdateExamEditionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateExamEditionRef:
```typescript
const name = updateExamEditionRef.operationName;
console.log(name);
```

### Variables
The `UpdateExamEdition` mutation requires an argument of type `UpdateExamEditionVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateExamEditionVariables {
  editionId: UUIDString;
  year: number;
  label?: string | null;
}
```
### Return Type
Recall that executing the `UpdateExamEdition` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateExamEditionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateExamEditionData {
  examEdition_update?: ExamEdition_Key | null;
}
```
### Using `UpdateExamEdition`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateExamEdition, UpdateExamEditionVariables } from '@dataconnect/generated';

// The `UpdateExamEdition` mutation requires an argument of type `UpdateExamEditionVariables`:
const updateExamEditionVars: UpdateExamEditionVariables = {
  editionId: ..., 
  year: ..., 
  label: ..., // optional
};

// Call the `updateExamEdition()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateExamEdition(updateExamEditionVars);
// Variables can be defined inline as well.
const { data } = await updateExamEdition({ editionId: ..., year: ..., label: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateExamEdition(dataConnect, updateExamEditionVars);

console.log(data.examEdition_update);

// Or, you can use the `Promise` API.
updateExamEdition(updateExamEditionVars).then((response) => {
  const data = response.data;
  console.log(data.examEdition_update);
});
```

### Using `UpdateExamEdition`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateExamEditionRef, UpdateExamEditionVariables } from '@dataconnect/generated';

// The `UpdateExamEdition` mutation requires an argument of type `UpdateExamEditionVariables`:
const updateExamEditionVars: UpdateExamEditionVariables = {
  editionId: ..., 
  year: ..., 
  label: ..., // optional
};

// Call the `updateExamEditionRef()` function to get a reference to the mutation.
const ref = updateExamEditionRef(updateExamEditionVars);
// Variables can be defined inline as well.
const ref = updateExamEditionRef({ editionId: ..., year: ..., label: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateExamEditionRef(dataConnect, updateExamEditionVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.examEdition_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.examEdition_update);
});
```

## DeleteExamEdition
You can execute the `DeleteExamEdition` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteExamEdition(vars: DeleteExamEditionVariables): MutationPromise<DeleteExamEditionData, DeleteExamEditionVariables>;

interface DeleteExamEditionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteExamEditionVariables): MutationRef<DeleteExamEditionData, DeleteExamEditionVariables>;
}
export const deleteExamEditionRef: DeleteExamEditionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteExamEdition(dc: DataConnect, vars: DeleteExamEditionVariables): MutationPromise<DeleteExamEditionData, DeleteExamEditionVariables>;

interface DeleteExamEditionRef {
  ...
  (dc: DataConnect, vars: DeleteExamEditionVariables): MutationRef<DeleteExamEditionData, DeleteExamEditionVariables>;
}
export const deleteExamEditionRef: DeleteExamEditionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteExamEditionRef:
```typescript
const name = deleteExamEditionRef.operationName;
console.log(name);
```

### Variables
The `DeleteExamEdition` mutation requires an argument of type `DeleteExamEditionVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteExamEditionVariables {
  editionId: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteExamEdition` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteExamEditionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteExamEditionData {
  examEdition_delete?: ExamEdition_Key | null;
}
```
### Using `DeleteExamEdition`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteExamEdition, DeleteExamEditionVariables } from '@dataconnect/generated';

// The `DeleteExamEdition` mutation requires an argument of type `DeleteExamEditionVariables`:
const deleteExamEditionVars: DeleteExamEditionVariables = {
  editionId: ..., 
};

// Call the `deleteExamEdition()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteExamEdition(deleteExamEditionVars);
// Variables can be defined inline as well.
const { data } = await deleteExamEdition({ editionId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteExamEdition(dataConnect, deleteExamEditionVars);

console.log(data.examEdition_delete);

// Or, you can use the `Promise` API.
deleteExamEdition(deleteExamEditionVars).then((response) => {
  const data = response.data;
  console.log(data.examEdition_delete);
});
```

### Using `DeleteExamEdition`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteExamEditionRef, DeleteExamEditionVariables } from '@dataconnect/generated';

// The `DeleteExamEdition` mutation requires an argument of type `DeleteExamEditionVariables`:
const deleteExamEditionVars: DeleteExamEditionVariables = {
  editionId: ..., 
};

// Call the `deleteExamEditionRef()` function to get a reference to the mutation.
const ref = deleteExamEditionRef(deleteExamEditionVars);
// Variables can be defined inline as well.
const ref = deleteExamEditionRef({ editionId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteExamEditionRef(dataConnect, deleteExamEditionVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.examEdition_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.examEdition_delete);
});
```

## CreateExam
You can execute the `CreateExam` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createExam(vars: CreateExamVariables): MutationPromise<CreateExamData, CreateExamVariables>;

interface CreateExamRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateExamVariables): MutationRef<CreateExamData, CreateExamVariables>;
}
export const createExamRef: CreateExamRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createExam(dc: DataConnect, vars: CreateExamVariables): MutationPromise<CreateExamData, CreateExamVariables>;

interface CreateExamRef {
  ...
  (dc: DataConnect, vars: CreateExamVariables): MutationRef<CreateExamData, CreateExamVariables>;
}
export const createExamRef: CreateExamRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createExamRef:
```typescript
const name = createExamRef.operationName;
console.log(name);
```

### Variables
The `CreateExam` mutation requires an argument of type `CreateExamVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateExamVariables {
  editionId: UUIDString;
  title: string;
  description?: string | null;
  durationMinutes: number;
}
```
### Return Type
Recall that executing the `CreateExam` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateExamData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateExamData {
  exam_insert: Exam_Key;
}
```
### Using `CreateExam`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createExam, CreateExamVariables } from '@dataconnect/generated';

// The `CreateExam` mutation requires an argument of type `CreateExamVariables`:
const createExamVars: CreateExamVariables = {
  editionId: ..., 
  title: ..., 
  description: ..., // optional
  durationMinutes: ..., 
};

// Call the `createExam()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createExam(createExamVars);
// Variables can be defined inline as well.
const { data } = await createExam({ editionId: ..., title: ..., description: ..., durationMinutes: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createExam(dataConnect, createExamVars);

console.log(data.exam_insert);

// Or, you can use the `Promise` API.
createExam(createExamVars).then((response) => {
  const data = response.data;
  console.log(data.exam_insert);
});
```

### Using `CreateExam`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createExamRef, CreateExamVariables } from '@dataconnect/generated';

// The `CreateExam` mutation requires an argument of type `CreateExamVariables`:
const createExamVars: CreateExamVariables = {
  editionId: ..., 
  title: ..., 
  description: ..., // optional
  durationMinutes: ..., 
};

// Call the `createExamRef()` function to get a reference to the mutation.
const ref = createExamRef(createExamVars);
// Variables can be defined inline as well.
const ref = createExamRef({ editionId: ..., title: ..., description: ..., durationMinutes: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createExamRef(dataConnect, createExamVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.exam_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.exam_insert);
});
```

## UpdateExam
You can execute the `UpdateExam` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateExam(vars: UpdateExamVariables): MutationPromise<UpdateExamData, UpdateExamVariables>;

interface UpdateExamRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateExamVariables): MutationRef<UpdateExamData, UpdateExamVariables>;
}
export const updateExamRef: UpdateExamRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateExam(dc: DataConnect, vars: UpdateExamVariables): MutationPromise<UpdateExamData, UpdateExamVariables>;

interface UpdateExamRef {
  ...
  (dc: DataConnect, vars: UpdateExamVariables): MutationRef<UpdateExamData, UpdateExamVariables>;
}
export const updateExamRef: UpdateExamRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateExamRef:
```typescript
const name = updateExamRef.operationName;
console.log(name);
```

### Variables
The `UpdateExam` mutation requires an argument of type `UpdateExamVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateExamVariables {
  examId: UUIDString;
  title: string;
  description?: string | null;
  durationMinutes: number;
}
```
### Return Type
Recall that executing the `UpdateExam` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateExamData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateExamData {
  exam_update?: Exam_Key | null;
}
```
### Using `UpdateExam`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateExam, UpdateExamVariables } from '@dataconnect/generated';

// The `UpdateExam` mutation requires an argument of type `UpdateExamVariables`:
const updateExamVars: UpdateExamVariables = {
  examId: ..., 
  title: ..., 
  description: ..., // optional
  durationMinutes: ..., 
};

// Call the `updateExam()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateExam(updateExamVars);
// Variables can be defined inline as well.
const { data } = await updateExam({ examId: ..., title: ..., description: ..., durationMinutes: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateExam(dataConnect, updateExamVars);

console.log(data.exam_update);

// Or, you can use the `Promise` API.
updateExam(updateExamVars).then((response) => {
  const data = response.data;
  console.log(data.exam_update);
});
```

### Using `UpdateExam`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateExamRef, UpdateExamVariables } from '@dataconnect/generated';

// The `UpdateExam` mutation requires an argument of type `UpdateExamVariables`:
const updateExamVars: UpdateExamVariables = {
  examId: ..., 
  title: ..., 
  description: ..., // optional
  durationMinutes: ..., 
};

// Call the `updateExamRef()` function to get a reference to the mutation.
const ref = updateExamRef(updateExamVars);
// Variables can be defined inline as well.
const ref = updateExamRef({ examId: ..., title: ..., description: ..., durationMinutes: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateExamRef(dataConnect, updateExamVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.exam_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.exam_update);
});
```

## DeleteExam
You can execute the `DeleteExam` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteExam(vars: DeleteExamVariables): MutationPromise<DeleteExamData, DeleteExamVariables>;

interface DeleteExamRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteExamVariables): MutationRef<DeleteExamData, DeleteExamVariables>;
}
export const deleteExamRef: DeleteExamRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteExam(dc: DataConnect, vars: DeleteExamVariables): MutationPromise<DeleteExamData, DeleteExamVariables>;

interface DeleteExamRef {
  ...
  (dc: DataConnect, vars: DeleteExamVariables): MutationRef<DeleteExamData, DeleteExamVariables>;
}
export const deleteExamRef: DeleteExamRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteExamRef:
```typescript
const name = deleteExamRef.operationName;
console.log(name);
```

### Variables
The `DeleteExam` mutation requires an argument of type `DeleteExamVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteExamVariables {
  examId: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteExam` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteExamData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteExamData {
  exam_delete?: Exam_Key | null;
}
```
### Using `DeleteExam`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteExam, DeleteExamVariables } from '@dataconnect/generated';

// The `DeleteExam` mutation requires an argument of type `DeleteExamVariables`:
const deleteExamVars: DeleteExamVariables = {
  examId: ..., 
};

// Call the `deleteExam()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteExam(deleteExamVars);
// Variables can be defined inline as well.
const { data } = await deleteExam({ examId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteExam(dataConnect, deleteExamVars);

console.log(data.exam_delete);

// Or, you can use the `Promise` API.
deleteExam(deleteExamVars).then((response) => {
  const data = response.data;
  console.log(data.exam_delete);
});
```

### Using `DeleteExam`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteExamRef, DeleteExamVariables } from '@dataconnect/generated';

// The `DeleteExam` mutation requires an argument of type `DeleteExamVariables`:
const deleteExamVars: DeleteExamVariables = {
  examId: ..., 
};

// Call the `deleteExamRef()` function to get a reference to the mutation.
const ref = deleteExamRef(deleteExamVars);
// Variables can be defined inline as well.
const ref = deleteExamRef({ examId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteExamRef(dataConnect, deleteExamVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.exam_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.exam_delete);
});
```

## CreateTopic
You can execute the `CreateTopic` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createTopic(vars: CreateTopicVariables): MutationPromise<CreateTopicData, CreateTopicVariables>;

interface CreateTopicRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateTopicVariables): MutationRef<CreateTopicData, CreateTopicVariables>;
}
export const createTopicRef: CreateTopicRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createTopic(dc: DataConnect, vars: CreateTopicVariables): MutationPromise<CreateTopicData, CreateTopicVariables>;

interface CreateTopicRef {
  ...
  (dc: DataConnect, vars: CreateTopicVariables): MutationRef<CreateTopicData, CreateTopicVariables>;
}
export const createTopicRef: CreateTopicRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createTopicRef:
```typescript
const name = createTopicRef.operationName;
console.log(name);
```

### Variables
The `CreateTopic` mutation requires an argument of type `CreateTopicVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateTopicVariables {
  categoryId: UUIDString;
  name: string;
}
```
### Return Type
Recall that executing the `CreateTopic` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateTopicData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateTopicData {
  topic_insert: Topic_Key;
}
```
### Using `CreateTopic`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createTopic, CreateTopicVariables } from '@dataconnect/generated';

// The `CreateTopic` mutation requires an argument of type `CreateTopicVariables`:
const createTopicVars: CreateTopicVariables = {
  categoryId: ..., 
  name: ..., 
};

// Call the `createTopic()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createTopic(createTopicVars);
// Variables can be defined inline as well.
const { data } = await createTopic({ categoryId: ..., name: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createTopic(dataConnect, createTopicVars);

console.log(data.topic_insert);

// Or, you can use the `Promise` API.
createTopic(createTopicVars).then((response) => {
  const data = response.data;
  console.log(data.topic_insert);
});
```

### Using `CreateTopic`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createTopicRef, CreateTopicVariables } from '@dataconnect/generated';

// The `CreateTopic` mutation requires an argument of type `CreateTopicVariables`:
const createTopicVars: CreateTopicVariables = {
  categoryId: ..., 
  name: ..., 
};

// Call the `createTopicRef()` function to get a reference to the mutation.
const ref = createTopicRef(createTopicVars);
// Variables can be defined inline as well.
const ref = createTopicRef({ categoryId: ..., name: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createTopicRef(dataConnect, createTopicVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.topic_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.topic_insert);
});
```

## DeleteTopic
You can execute the `DeleteTopic` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteTopic(vars: DeleteTopicVariables): MutationPromise<DeleteTopicData, DeleteTopicVariables>;

interface DeleteTopicRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteTopicVariables): MutationRef<DeleteTopicData, DeleteTopicVariables>;
}
export const deleteTopicRef: DeleteTopicRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteTopic(dc: DataConnect, vars: DeleteTopicVariables): MutationPromise<DeleteTopicData, DeleteTopicVariables>;

interface DeleteTopicRef {
  ...
  (dc: DataConnect, vars: DeleteTopicVariables): MutationRef<DeleteTopicData, DeleteTopicVariables>;
}
export const deleteTopicRef: DeleteTopicRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteTopicRef:
```typescript
const name = deleteTopicRef.operationName;
console.log(name);
```

### Variables
The `DeleteTopic` mutation requires an argument of type `DeleteTopicVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteTopicVariables {
  topicId: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteTopic` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteTopicData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteTopicData {
  topic_delete?: Topic_Key | null;
}
```
### Using `DeleteTopic`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteTopic, DeleteTopicVariables } from '@dataconnect/generated';

// The `DeleteTopic` mutation requires an argument of type `DeleteTopicVariables`:
const deleteTopicVars: DeleteTopicVariables = {
  topicId: ..., 
};

// Call the `deleteTopic()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteTopic(deleteTopicVars);
// Variables can be defined inline as well.
const { data } = await deleteTopic({ topicId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteTopic(dataConnect, deleteTopicVars);

console.log(data.topic_delete);

// Or, you can use the `Promise` API.
deleteTopic(deleteTopicVars).then((response) => {
  const data = response.data;
  console.log(data.topic_delete);
});
```

### Using `DeleteTopic`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteTopicRef, DeleteTopicVariables } from '@dataconnect/generated';

// The `DeleteTopic` mutation requires an argument of type `DeleteTopicVariables`:
const deleteTopicVars: DeleteTopicVariables = {
  topicId: ..., 
};

// Call the `deleteTopicRef()` function to get a reference to the mutation.
const ref = deleteTopicRef(deleteTopicVars);
// Variables can be defined inline as well.
const ref = deleteTopicRef({ topicId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteTopicRef(dataConnect, deleteTopicVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.topic_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.topic_delete);
});
```

## CreateQuestion
You can execute the `CreateQuestion` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createQuestion(vars: CreateQuestionVariables): MutationPromise<CreateQuestionData, CreateQuestionVariables>;

interface CreateQuestionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateQuestionVariables): MutationRef<CreateQuestionData, CreateQuestionVariables>;
}
export const createQuestionRef: CreateQuestionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createQuestion(dc: DataConnect, vars: CreateQuestionVariables): MutationPromise<CreateQuestionData, CreateQuestionVariables>;

interface CreateQuestionRef {
  ...
  (dc: DataConnect, vars: CreateQuestionVariables): MutationRef<CreateQuestionData, CreateQuestionVariables>;
}
export const createQuestionRef: CreateQuestionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createQuestionRef:
```typescript
const name = createQuestionRef.operationName;
console.log(name);
```

### Variables
The `CreateQuestion` mutation requires an argument of type `CreateQuestionVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
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
Recall that executing the `CreateQuestion` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateQuestionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateQuestionData {
  question_insert: Question_Key;
}
```
### Using `CreateQuestion`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createQuestion, CreateQuestionVariables } from '@dataconnect/generated';

// The `CreateQuestion` mutation requires an argument of type `CreateQuestionVariables`:
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

// Call the `createQuestion()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createQuestion(createQuestionVars);
// Variables can be defined inline as well.
const { data } = await createQuestion({ examId: ..., topicId: ..., statement: ..., explanation: ..., difficulty: ..., option1Text: ..., option1IsCorrect: ..., option2Text: ..., option2IsCorrect: ..., option3Text: ..., option3IsCorrect: ..., option4Text: ..., option4IsCorrect: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createQuestion(dataConnect, createQuestionVars);

console.log(data.question_insert);

// Or, you can use the `Promise` API.
createQuestion(createQuestionVars).then((response) => {
  const data = response.data;
  console.log(data.question_insert);
});
```

### Using `CreateQuestion`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createQuestionRef, CreateQuestionVariables } from '@dataconnect/generated';

// The `CreateQuestion` mutation requires an argument of type `CreateQuestionVariables`:
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

// Call the `createQuestionRef()` function to get a reference to the mutation.
const ref = createQuestionRef(createQuestionVars);
// Variables can be defined inline as well.
const ref = createQuestionRef({ examId: ..., topicId: ..., statement: ..., explanation: ..., difficulty: ..., option1Text: ..., option1IsCorrect: ..., option2Text: ..., option2IsCorrect: ..., option3Text: ..., option3IsCorrect: ..., option4Text: ..., option4IsCorrect: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createQuestionRef(dataConnect, createQuestionVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.question_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.question_insert);
});
```

## CreateQuestion3
You can execute the `CreateQuestion3` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createQuestion3(vars: CreateQuestion3Variables): MutationPromise<CreateQuestion3Data, CreateQuestion3Variables>;

interface CreateQuestion3Ref {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateQuestion3Variables): MutationRef<CreateQuestion3Data, CreateQuestion3Variables>;
}
export const createQuestion3Ref: CreateQuestion3Ref;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createQuestion3(dc: DataConnect, vars: CreateQuestion3Variables): MutationPromise<CreateQuestion3Data, CreateQuestion3Variables>;

interface CreateQuestion3Ref {
  ...
  (dc: DataConnect, vars: CreateQuestion3Variables): MutationRef<CreateQuestion3Data, CreateQuestion3Variables>;
}
export const createQuestion3Ref: CreateQuestion3Ref;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createQuestion3Ref:
```typescript
const name = createQuestion3Ref.operationName;
console.log(name);
```

### Variables
The `CreateQuestion3` mutation requires an argument of type `CreateQuestion3Variables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateQuestion3Variables {
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
}
```
### Return Type
Recall that executing the `CreateQuestion3` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateQuestion3Data`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateQuestion3Data {
  question_insert: Question_Key;
}
```
### Using `CreateQuestion3`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createQuestion3, CreateQuestion3Variables } from '@dataconnect/generated';

// The `CreateQuestion3` mutation requires an argument of type `CreateQuestion3Variables`:
const createQuestion3Vars: CreateQuestion3Variables = {
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
};

// Call the `createQuestion3()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createQuestion3(createQuestion3Vars);
// Variables can be defined inline as well.
const { data } = await createQuestion3({ examId: ..., topicId: ..., statement: ..., explanation: ..., difficulty: ..., option1Text: ..., option1IsCorrect: ..., option2Text: ..., option2IsCorrect: ..., option3Text: ..., option3IsCorrect: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createQuestion3(dataConnect, createQuestion3Vars);

console.log(data.question_insert);

// Or, you can use the `Promise` API.
createQuestion3(createQuestion3Vars).then((response) => {
  const data = response.data;
  console.log(data.question_insert);
});
```

### Using `CreateQuestion3`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createQuestion3Ref, CreateQuestion3Variables } from '@dataconnect/generated';

// The `CreateQuestion3` mutation requires an argument of type `CreateQuestion3Variables`:
const createQuestion3Vars: CreateQuestion3Variables = {
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
};

// Call the `createQuestion3Ref()` function to get a reference to the mutation.
const ref = createQuestion3Ref(createQuestion3Vars);
// Variables can be defined inline as well.
const ref = createQuestion3Ref({ examId: ..., topicId: ..., statement: ..., explanation: ..., difficulty: ..., option1Text: ..., option1IsCorrect: ..., option2Text: ..., option2IsCorrect: ..., option3Text: ..., option3IsCorrect: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createQuestion3Ref(dataConnect, createQuestion3Vars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.question_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.question_insert);
});
```

## CreateQuestion2
You can execute the `CreateQuestion2` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createQuestion2(vars: CreateQuestion2Variables): MutationPromise<CreateQuestion2Data, CreateQuestion2Variables>;

interface CreateQuestion2Ref {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateQuestion2Variables): MutationRef<CreateQuestion2Data, CreateQuestion2Variables>;
}
export const createQuestion2Ref: CreateQuestion2Ref;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createQuestion2(dc: DataConnect, vars: CreateQuestion2Variables): MutationPromise<CreateQuestion2Data, CreateQuestion2Variables>;

interface CreateQuestion2Ref {
  ...
  (dc: DataConnect, vars: CreateQuestion2Variables): MutationRef<CreateQuestion2Data, CreateQuestion2Variables>;
}
export const createQuestion2Ref: CreateQuestion2Ref;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createQuestion2Ref:
```typescript
const name = createQuestion2Ref.operationName;
console.log(name);
```

### Variables
The `CreateQuestion2` mutation requires an argument of type `CreateQuestion2Variables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateQuestion2Variables {
  examId: UUIDString;
  topicId?: UUIDString | null;
  statement: string;
  explanation?: string | null;
  difficulty: QuestionDifficulty;
  option1Text: string;
  option1IsCorrect: boolean;
  option2Text: string;
  option2IsCorrect: boolean;
}
```
### Return Type
Recall that executing the `CreateQuestion2` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateQuestion2Data`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateQuestion2Data {
  question_insert: Question_Key;
}
```
### Using `CreateQuestion2`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createQuestion2, CreateQuestion2Variables } from '@dataconnect/generated';

// The `CreateQuestion2` mutation requires an argument of type `CreateQuestion2Variables`:
const createQuestion2Vars: CreateQuestion2Variables = {
  examId: ..., 
  topicId: ..., // optional
  statement: ..., 
  explanation: ..., // optional
  difficulty: ..., 
  option1Text: ..., 
  option1IsCorrect: ..., 
  option2Text: ..., 
  option2IsCorrect: ..., 
};

// Call the `createQuestion2()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createQuestion2(createQuestion2Vars);
// Variables can be defined inline as well.
const { data } = await createQuestion2({ examId: ..., topicId: ..., statement: ..., explanation: ..., difficulty: ..., option1Text: ..., option1IsCorrect: ..., option2Text: ..., option2IsCorrect: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createQuestion2(dataConnect, createQuestion2Vars);

console.log(data.question_insert);

// Or, you can use the `Promise` API.
createQuestion2(createQuestion2Vars).then((response) => {
  const data = response.data;
  console.log(data.question_insert);
});
```

### Using `CreateQuestion2`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createQuestion2Ref, CreateQuestion2Variables } from '@dataconnect/generated';

// The `CreateQuestion2` mutation requires an argument of type `CreateQuestion2Variables`:
const createQuestion2Vars: CreateQuestion2Variables = {
  examId: ..., 
  topicId: ..., // optional
  statement: ..., 
  explanation: ..., // optional
  difficulty: ..., 
  option1Text: ..., 
  option1IsCorrect: ..., 
  option2Text: ..., 
  option2IsCorrect: ..., 
};

// Call the `createQuestion2Ref()` function to get a reference to the mutation.
const ref = createQuestion2Ref(createQuestion2Vars);
// Variables can be defined inline as well.
const ref = createQuestion2Ref({ examId: ..., topicId: ..., statement: ..., explanation: ..., difficulty: ..., option1Text: ..., option1IsCorrect: ..., option2Text: ..., option2IsCorrect: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createQuestion2Ref(dataConnect, createQuestion2Vars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.question_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.question_insert);
});
```

## UpdateQuestion
You can execute the `UpdateQuestion` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateQuestion(vars: UpdateQuestionVariables): MutationPromise<UpdateQuestionData, UpdateQuestionVariables>;

interface UpdateQuestionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateQuestionVariables): MutationRef<UpdateQuestionData, UpdateQuestionVariables>;
}
export const updateQuestionRef: UpdateQuestionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateQuestion(dc: DataConnect, vars: UpdateQuestionVariables): MutationPromise<UpdateQuestionData, UpdateQuestionVariables>;

interface UpdateQuestionRef {
  ...
  (dc: DataConnect, vars: UpdateQuestionVariables): MutationRef<UpdateQuestionData, UpdateQuestionVariables>;
}
export const updateQuestionRef: UpdateQuestionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateQuestionRef:
```typescript
const name = updateQuestionRef.operationName;
console.log(name);
```

### Variables
The `UpdateQuestion` mutation requires an argument of type `UpdateQuestionVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateQuestionVariables {
  questionId: UUIDString;
  topicId?: UUIDString | null;
  statement: string;
  explanation?: string | null;
  difficulty: QuestionDifficulty;
}
```
### Return Type
Recall that executing the `UpdateQuestion` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateQuestionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateQuestionData {
  question_update?: Question_Key | null;
}
```
### Using `UpdateQuestion`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateQuestion, UpdateQuestionVariables } from '@dataconnect/generated';

// The `UpdateQuestion` mutation requires an argument of type `UpdateQuestionVariables`:
const updateQuestionVars: UpdateQuestionVariables = {
  questionId: ..., 
  topicId: ..., // optional
  statement: ..., 
  explanation: ..., // optional
  difficulty: ..., 
};

// Call the `updateQuestion()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateQuestion(updateQuestionVars);
// Variables can be defined inline as well.
const { data } = await updateQuestion({ questionId: ..., topicId: ..., statement: ..., explanation: ..., difficulty: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateQuestion(dataConnect, updateQuestionVars);

console.log(data.question_update);

// Or, you can use the `Promise` API.
updateQuestion(updateQuestionVars).then((response) => {
  const data = response.data;
  console.log(data.question_update);
});
```

### Using `UpdateQuestion`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateQuestionRef, UpdateQuestionVariables } from '@dataconnect/generated';

// The `UpdateQuestion` mutation requires an argument of type `UpdateQuestionVariables`:
const updateQuestionVars: UpdateQuestionVariables = {
  questionId: ..., 
  topicId: ..., // optional
  statement: ..., 
  explanation: ..., // optional
  difficulty: ..., 
};

// Call the `updateQuestionRef()` function to get a reference to the mutation.
const ref = updateQuestionRef(updateQuestionVars);
// Variables can be defined inline as well.
const ref = updateQuestionRef({ questionId: ..., topicId: ..., statement: ..., explanation: ..., difficulty: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateQuestionRef(dataConnect, updateQuestionVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.question_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.question_update);
});
```

## DeleteAnswerOptionsByQuestion
You can execute the `DeleteAnswerOptionsByQuestion` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteAnswerOptionsByQuestion(vars: DeleteAnswerOptionsByQuestionVariables): MutationPromise<DeleteAnswerOptionsByQuestionData, DeleteAnswerOptionsByQuestionVariables>;

interface DeleteAnswerOptionsByQuestionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteAnswerOptionsByQuestionVariables): MutationRef<DeleteAnswerOptionsByQuestionData, DeleteAnswerOptionsByQuestionVariables>;
}
export const deleteAnswerOptionsByQuestionRef: DeleteAnswerOptionsByQuestionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteAnswerOptionsByQuestion(dc: DataConnect, vars: DeleteAnswerOptionsByQuestionVariables): MutationPromise<DeleteAnswerOptionsByQuestionData, DeleteAnswerOptionsByQuestionVariables>;

interface DeleteAnswerOptionsByQuestionRef {
  ...
  (dc: DataConnect, vars: DeleteAnswerOptionsByQuestionVariables): MutationRef<DeleteAnswerOptionsByQuestionData, DeleteAnswerOptionsByQuestionVariables>;
}
export const deleteAnswerOptionsByQuestionRef: DeleteAnswerOptionsByQuestionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteAnswerOptionsByQuestionRef:
```typescript
const name = deleteAnswerOptionsByQuestionRef.operationName;
console.log(name);
```

### Variables
The `DeleteAnswerOptionsByQuestion` mutation requires an argument of type `DeleteAnswerOptionsByQuestionVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteAnswerOptionsByQuestionVariables {
  questionId: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteAnswerOptionsByQuestion` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteAnswerOptionsByQuestionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteAnswerOptionsByQuestionData {
  answerOption_deleteMany: number;
}
```
### Using `DeleteAnswerOptionsByQuestion`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteAnswerOptionsByQuestion, DeleteAnswerOptionsByQuestionVariables } from '@dataconnect/generated';

// The `DeleteAnswerOptionsByQuestion` mutation requires an argument of type `DeleteAnswerOptionsByQuestionVariables`:
const deleteAnswerOptionsByQuestionVars: DeleteAnswerOptionsByQuestionVariables = {
  questionId: ..., 
};

// Call the `deleteAnswerOptionsByQuestion()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteAnswerOptionsByQuestion(deleteAnswerOptionsByQuestionVars);
// Variables can be defined inline as well.
const { data } = await deleteAnswerOptionsByQuestion({ questionId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteAnswerOptionsByQuestion(dataConnect, deleteAnswerOptionsByQuestionVars);

console.log(data.answerOption_deleteMany);

// Or, you can use the `Promise` API.
deleteAnswerOptionsByQuestion(deleteAnswerOptionsByQuestionVars).then((response) => {
  const data = response.data;
  console.log(data.answerOption_deleteMany);
});
```

### Using `DeleteAnswerOptionsByQuestion`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteAnswerOptionsByQuestionRef, DeleteAnswerOptionsByQuestionVariables } from '@dataconnect/generated';

// The `DeleteAnswerOptionsByQuestion` mutation requires an argument of type `DeleteAnswerOptionsByQuestionVariables`:
const deleteAnswerOptionsByQuestionVars: DeleteAnswerOptionsByQuestionVariables = {
  questionId: ..., 
};

// Call the `deleteAnswerOptionsByQuestionRef()` function to get a reference to the mutation.
const ref = deleteAnswerOptionsByQuestionRef(deleteAnswerOptionsByQuestionVars);
// Variables can be defined inline as well.
const ref = deleteAnswerOptionsByQuestionRef({ questionId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteAnswerOptionsByQuestionRef(dataConnect, deleteAnswerOptionsByQuestionVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.answerOption_deleteMany);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.answerOption_deleteMany);
});
```

## DeleteAttemptAnswersByQuestion
You can execute the `DeleteAttemptAnswersByQuestion` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteAttemptAnswersByQuestion(vars: DeleteAttemptAnswersByQuestionVariables): MutationPromise<DeleteAttemptAnswersByQuestionData, DeleteAttemptAnswersByQuestionVariables>;

interface DeleteAttemptAnswersByQuestionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteAttemptAnswersByQuestionVariables): MutationRef<DeleteAttemptAnswersByQuestionData, DeleteAttemptAnswersByQuestionVariables>;
}
export const deleteAttemptAnswersByQuestionRef: DeleteAttemptAnswersByQuestionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteAttemptAnswersByQuestion(dc: DataConnect, vars: DeleteAttemptAnswersByQuestionVariables): MutationPromise<DeleteAttemptAnswersByQuestionData, DeleteAttemptAnswersByQuestionVariables>;

interface DeleteAttemptAnswersByQuestionRef {
  ...
  (dc: DataConnect, vars: DeleteAttemptAnswersByQuestionVariables): MutationRef<DeleteAttemptAnswersByQuestionData, DeleteAttemptAnswersByQuestionVariables>;
}
export const deleteAttemptAnswersByQuestionRef: DeleteAttemptAnswersByQuestionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteAttemptAnswersByQuestionRef:
```typescript
const name = deleteAttemptAnswersByQuestionRef.operationName;
console.log(name);
```

### Variables
The `DeleteAttemptAnswersByQuestion` mutation requires an argument of type `DeleteAttemptAnswersByQuestionVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteAttemptAnswersByQuestionVariables {
  questionId: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteAttemptAnswersByQuestion` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteAttemptAnswersByQuestionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteAttemptAnswersByQuestionData {
  attemptAnswer_deleteMany: number;
}
```
### Using `DeleteAttemptAnswersByQuestion`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteAttemptAnswersByQuestion, DeleteAttemptAnswersByQuestionVariables } from '@dataconnect/generated';

// The `DeleteAttemptAnswersByQuestion` mutation requires an argument of type `DeleteAttemptAnswersByQuestionVariables`:
const deleteAttemptAnswersByQuestionVars: DeleteAttemptAnswersByQuestionVariables = {
  questionId: ..., 
};

// Call the `deleteAttemptAnswersByQuestion()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteAttemptAnswersByQuestion(deleteAttemptAnswersByQuestionVars);
// Variables can be defined inline as well.
const { data } = await deleteAttemptAnswersByQuestion({ questionId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteAttemptAnswersByQuestion(dataConnect, deleteAttemptAnswersByQuestionVars);

console.log(data.attemptAnswer_deleteMany);

// Or, you can use the `Promise` API.
deleteAttemptAnswersByQuestion(deleteAttemptAnswersByQuestionVars).then((response) => {
  const data = response.data;
  console.log(data.attemptAnswer_deleteMany);
});
```

### Using `DeleteAttemptAnswersByQuestion`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteAttemptAnswersByQuestionRef, DeleteAttemptAnswersByQuestionVariables } from '@dataconnect/generated';

// The `DeleteAttemptAnswersByQuestion` mutation requires an argument of type `DeleteAttemptAnswersByQuestionVariables`:
const deleteAttemptAnswersByQuestionVars: DeleteAttemptAnswersByQuestionVariables = {
  questionId: ..., 
};

// Call the `deleteAttemptAnswersByQuestionRef()` function to get a reference to the mutation.
const ref = deleteAttemptAnswersByQuestionRef(deleteAttemptAnswersByQuestionVars);
// Variables can be defined inline as well.
const ref = deleteAttemptAnswersByQuestionRef({ questionId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteAttemptAnswersByQuestionRef(dataConnect, deleteAttemptAnswersByQuestionVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.attemptAnswer_deleteMany);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.attemptAnswer_deleteMany);
});
```

## DeleteExamAttemptsByExam
You can execute the `DeleteExamAttemptsByExam` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteExamAttemptsByExam(vars: DeleteExamAttemptsByExamVariables): MutationPromise<DeleteExamAttemptsByExamData, DeleteExamAttemptsByExamVariables>;

interface DeleteExamAttemptsByExamRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteExamAttemptsByExamVariables): MutationRef<DeleteExamAttemptsByExamData, DeleteExamAttemptsByExamVariables>;
}
export const deleteExamAttemptsByExamRef: DeleteExamAttemptsByExamRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteExamAttemptsByExam(dc: DataConnect, vars: DeleteExamAttemptsByExamVariables): MutationPromise<DeleteExamAttemptsByExamData, DeleteExamAttemptsByExamVariables>;

interface DeleteExamAttemptsByExamRef {
  ...
  (dc: DataConnect, vars: DeleteExamAttemptsByExamVariables): MutationRef<DeleteExamAttemptsByExamData, DeleteExamAttemptsByExamVariables>;
}
export const deleteExamAttemptsByExamRef: DeleteExamAttemptsByExamRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteExamAttemptsByExamRef:
```typescript
const name = deleteExamAttemptsByExamRef.operationName;
console.log(name);
```

### Variables
The `DeleteExamAttemptsByExam` mutation requires an argument of type `DeleteExamAttemptsByExamVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteExamAttemptsByExamVariables {
  examId: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteExamAttemptsByExam` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteExamAttemptsByExamData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteExamAttemptsByExamData {
  examAttempt_deleteMany: number;
}
```
### Using `DeleteExamAttemptsByExam`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteExamAttemptsByExam, DeleteExamAttemptsByExamVariables } from '@dataconnect/generated';

// The `DeleteExamAttemptsByExam` mutation requires an argument of type `DeleteExamAttemptsByExamVariables`:
const deleteExamAttemptsByExamVars: DeleteExamAttemptsByExamVariables = {
  examId: ..., 
};

// Call the `deleteExamAttemptsByExam()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteExamAttemptsByExam(deleteExamAttemptsByExamVars);
// Variables can be defined inline as well.
const { data } = await deleteExamAttemptsByExam({ examId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteExamAttemptsByExam(dataConnect, deleteExamAttemptsByExamVars);

console.log(data.examAttempt_deleteMany);

// Or, you can use the `Promise` API.
deleteExamAttemptsByExam(deleteExamAttemptsByExamVars).then((response) => {
  const data = response.data;
  console.log(data.examAttempt_deleteMany);
});
```

### Using `DeleteExamAttemptsByExam`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteExamAttemptsByExamRef, DeleteExamAttemptsByExamVariables } from '@dataconnect/generated';

// The `DeleteExamAttemptsByExam` mutation requires an argument of type `DeleteExamAttemptsByExamVariables`:
const deleteExamAttemptsByExamVars: DeleteExamAttemptsByExamVariables = {
  examId: ..., 
};

// Call the `deleteExamAttemptsByExamRef()` function to get a reference to the mutation.
const ref = deleteExamAttemptsByExamRef(deleteExamAttemptsByExamVars);
// Variables can be defined inline as well.
const ref = deleteExamAttemptsByExamRef({ examId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteExamAttemptsByExamRef(dataConnect, deleteExamAttemptsByExamVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.examAttempt_deleteMany);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.examAttempt_deleteMany);
});
```

## DeleteQuestion
You can execute the `DeleteQuestion` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteQuestion(vars: DeleteQuestionVariables): MutationPromise<DeleteQuestionData, DeleteQuestionVariables>;

interface DeleteQuestionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteQuestionVariables): MutationRef<DeleteQuestionData, DeleteQuestionVariables>;
}
export const deleteQuestionRef: DeleteQuestionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteQuestion(dc: DataConnect, vars: DeleteQuestionVariables): MutationPromise<DeleteQuestionData, DeleteQuestionVariables>;

interface DeleteQuestionRef {
  ...
  (dc: DataConnect, vars: DeleteQuestionVariables): MutationRef<DeleteQuestionData, DeleteQuestionVariables>;
}
export const deleteQuestionRef: DeleteQuestionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteQuestionRef:
```typescript
const name = deleteQuestionRef.operationName;
console.log(name);
```

### Variables
The `DeleteQuestion` mutation requires an argument of type `DeleteQuestionVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteQuestionVariables {
  questionId: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteQuestion` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteQuestionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteQuestionData {
  question_delete?: Question_Key | null;
}
```
### Using `DeleteQuestion`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteQuestion, DeleteQuestionVariables } from '@dataconnect/generated';

// The `DeleteQuestion` mutation requires an argument of type `DeleteQuestionVariables`:
const deleteQuestionVars: DeleteQuestionVariables = {
  questionId: ..., 
};

// Call the `deleteQuestion()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteQuestion(deleteQuestionVars);
// Variables can be defined inline as well.
const { data } = await deleteQuestion({ questionId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteQuestion(dataConnect, deleteQuestionVars);

console.log(data.question_delete);

// Or, you can use the `Promise` API.
deleteQuestion(deleteQuestionVars).then((response) => {
  const data = response.data;
  console.log(data.question_delete);
});
```

### Using `DeleteQuestion`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteQuestionRef, DeleteQuestionVariables } from '@dataconnect/generated';

// The `DeleteQuestion` mutation requires an argument of type `DeleteQuestionVariables`:
const deleteQuestionVars: DeleteQuestionVariables = {
  questionId: ..., 
};

// Call the `deleteQuestionRef()` function to get a reference to the mutation.
const ref = deleteQuestionRef(deleteQuestionVars);
// Variables can be defined inline as well.
const ref = deleteQuestionRef({ questionId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteQuestionRef(dataConnect, deleteQuestionVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.question_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.question_delete);
});
```

## ReplaceAnswerOptions
You can execute the `ReplaceAnswerOptions` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
replaceAnswerOptions(vars: ReplaceAnswerOptionsVariables): MutationPromise<ReplaceAnswerOptionsData, ReplaceAnswerOptionsVariables>;

interface ReplaceAnswerOptionsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ReplaceAnswerOptionsVariables): MutationRef<ReplaceAnswerOptionsData, ReplaceAnswerOptionsVariables>;
}
export const replaceAnswerOptionsRef: ReplaceAnswerOptionsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
replaceAnswerOptions(dc: DataConnect, vars: ReplaceAnswerOptionsVariables): MutationPromise<ReplaceAnswerOptionsData, ReplaceAnswerOptionsVariables>;

interface ReplaceAnswerOptionsRef {
  ...
  (dc: DataConnect, vars: ReplaceAnswerOptionsVariables): MutationRef<ReplaceAnswerOptionsData, ReplaceAnswerOptionsVariables>;
}
export const replaceAnswerOptionsRef: ReplaceAnswerOptionsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the replaceAnswerOptionsRef:
```typescript
const name = replaceAnswerOptionsRef.operationName;
console.log(name);
```

### Variables
The `ReplaceAnswerOptions` mutation requires an argument of type `ReplaceAnswerOptionsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
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
Recall that executing the `ReplaceAnswerOptions` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ReplaceAnswerOptionsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ReplaceAnswerOptionsData {
  answerOption_deleteMany: number;
  answerOption_insertMany: AnswerOption_Key[];
}
```
### Using `ReplaceAnswerOptions`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, replaceAnswerOptions, ReplaceAnswerOptionsVariables } from '@dataconnect/generated';

// The `ReplaceAnswerOptions` mutation requires an argument of type `ReplaceAnswerOptionsVariables`:
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

// Call the `replaceAnswerOptions()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await replaceAnswerOptions(replaceAnswerOptionsVars);
// Variables can be defined inline as well.
const { data } = await replaceAnswerOptions({ questionId: ..., option1Text: ..., option1IsCorrect: ..., option2Text: ..., option2IsCorrect: ..., option3Text: ..., option3IsCorrect: ..., option4Text: ..., option4IsCorrect: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await replaceAnswerOptions(dataConnect, replaceAnswerOptionsVars);

console.log(data.answerOption_deleteMany);
console.log(data.answerOption_insertMany);

// Or, you can use the `Promise` API.
replaceAnswerOptions(replaceAnswerOptionsVars).then((response) => {
  const data = response.data;
  console.log(data.answerOption_deleteMany);
  console.log(data.answerOption_insertMany);
});
```

### Using `ReplaceAnswerOptions`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, replaceAnswerOptionsRef, ReplaceAnswerOptionsVariables } from '@dataconnect/generated';

// The `ReplaceAnswerOptions` mutation requires an argument of type `ReplaceAnswerOptionsVariables`:
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

// Call the `replaceAnswerOptionsRef()` function to get a reference to the mutation.
const ref = replaceAnswerOptionsRef(replaceAnswerOptionsVars);
// Variables can be defined inline as well.
const ref = replaceAnswerOptionsRef({ questionId: ..., option1Text: ..., option1IsCorrect: ..., option2Text: ..., option2IsCorrect: ..., option3Text: ..., option3IsCorrect: ..., option4Text: ..., option4IsCorrect: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = replaceAnswerOptionsRef(dataConnect, replaceAnswerOptionsVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.answerOption_deleteMany);
console.log(data.answerOption_insertMany);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.answerOption_deleteMany);
  console.log(data.answerOption_insertMany);
});
```

## ReplaceAnswerOptions3
You can execute the `ReplaceAnswerOptions3` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
replaceAnswerOptions3(vars: ReplaceAnswerOptions3Variables): MutationPromise<ReplaceAnswerOptions3Data, ReplaceAnswerOptions3Variables>;

interface ReplaceAnswerOptions3Ref {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ReplaceAnswerOptions3Variables): MutationRef<ReplaceAnswerOptions3Data, ReplaceAnswerOptions3Variables>;
}
export const replaceAnswerOptions3Ref: ReplaceAnswerOptions3Ref;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
replaceAnswerOptions3(dc: DataConnect, vars: ReplaceAnswerOptions3Variables): MutationPromise<ReplaceAnswerOptions3Data, ReplaceAnswerOptions3Variables>;

interface ReplaceAnswerOptions3Ref {
  ...
  (dc: DataConnect, vars: ReplaceAnswerOptions3Variables): MutationRef<ReplaceAnswerOptions3Data, ReplaceAnswerOptions3Variables>;
}
export const replaceAnswerOptions3Ref: ReplaceAnswerOptions3Ref;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the replaceAnswerOptions3Ref:
```typescript
const name = replaceAnswerOptions3Ref.operationName;
console.log(name);
```

### Variables
The `ReplaceAnswerOptions3` mutation requires an argument of type `ReplaceAnswerOptions3Variables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ReplaceAnswerOptions3Variables {
  questionId: UUIDString;
  option1Text: string;
  option1IsCorrect: boolean;
  option2Text: string;
  option2IsCorrect: boolean;
  option3Text: string;
  option3IsCorrect: boolean;
}
```
### Return Type
Recall that executing the `ReplaceAnswerOptions3` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ReplaceAnswerOptions3Data`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ReplaceAnswerOptions3Data {
  answerOption_deleteMany: number;
  answerOption_insertMany: AnswerOption_Key[];
}
```
### Using `ReplaceAnswerOptions3`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, replaceAnswerOptions3, ReplaceAnswerOptions3Variables } from '@dataconnect/generated';

// The `ReplaceAnswerOptions3` mutation requires an argument of type `ReplaceAnswerOptions3Variables`:
const replaceAnswerOptions3Vars: ReplaceAnswerOptions3Variables = {
  questionId: ..., 
  option1Text: ..., 
  option1IsCorrect: ..., 
  option2Text: ..., 
  option2IsCorrect: ..., 
  option3Text: ..., 
  option3IsCorrect: ..., 
};

// Call the `replaceAnswerOptions3()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await replaceAnswerOptions3(replaceAnswerOptions3Vars);
// Variables can be defined inline as well.
const { data } = await replaceAnswerOptions3({ questionId: ..., option1Text: ..., option1IsCorrect: ..., option2Text: ..., option2IsCorrect: ..., option3Text: ..., option3IsCorrect: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await replaceAnswerOptions3(dataConnect, replaceAnswerOptions3Vars);

console.log(data.answerOption_deleteMany);
console.log(data.answerOption_insertMany);

// Or, you can use the `Promise` API.
replaceAnswerOptions3(replaceAnswerOptions3Vars).then((response) => {
  const data = response.data;
  console.log(data.answerOption_deleteMany);
  console.log(data.answerOption_insertMany);
});
```

### Using `ReplaceAnswerOptions3`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, replaceAnswerOptions3Ref, ReplaceAnswerOptions3Variables } from '@dataconnect/generated';

// The `ReplaceAnswerOptions3` mutation requires an argument of type `ReplaceAnswerOptions3Variables`:
const replaceAnswerOptions3Vars: ReplaceAnswerOptions3Variables = {
  questionId: ..., 
  option1Text: ..., 
  option1IsCorrect: ..., 
  option2Text: ..., 
  option2IsCorrect: ..., 
  option3Text: ..., 
  option3IsCorrect: ..., 
};

// Call the `replaceAnswerOptions3Ref()` function to get a reference to the mutation.
const ref = replaceAnswerOptions3Ref(replaceAnswerOptions3Vars);
// Variables can be defined inline as well.
const ref = replaceAnswerOptions3Ref({ questionId: ..., option1Text: ..., option1IsCorrect: ..., option2Text: ..., option2IsCorrect: ..., option3Text: ..., option3IsCorrect: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = replaceAnswerOptions3Ref(dataConnect, replaceAnswerOptions3Vars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.answerOption_deleteMany);
console.log(data.answerOption_insertMany);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.answerOption_deleteMany);
  console.log(data.answerOption_insertMany);
});
```

## ReplaceAnswerOptions2
You can execute the `ReplaceAnswerOptions2` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
replaceAnswerOptions2(vars: ReplaceAnswerOptions2Variables): MutationPromise<ReplaceAnswerOptions2Data, ReplaceAnswerOptions2Variables>;

interface ReplaceAnswerOptions2Ref {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ReplaceAnswerOptions2Variables): MutationRef<ReplaceAnswerOptions2Data, ReplaceAnswerOptions2Variables>;
}
export const replaceAnswerOptions2Ref: ReplaceAnswerOptions2Ref;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
replaceAnswerOptions2(dc: DataConnect, vars: ReplaceAnswerOptions2Variables): MutationPromise<ReplaceAnswerOptions2Data, ReplaceAnswerOptions2Variables>;

interface ReplaceAnswerOptions2Ref {
  ...
  (dc: DataConnect, vars: ReplaceAnswerOptions2Variables): MutationRef<ReplaceAnswerOptions2Data, ReplaceAnswerOptions2Variables>;
}
export const replaceAnswerOptions2Ref: ReplaceAnswerOptions2Ref;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the replaceAnswerOptions2Ref:
```typescript
const name = replaceAnswerOptions2Ref.operationName;
console.log(name);
```

### Variables
The `ReplaceAnswerOptions2` mutation requires an argument of type `ReplaceAnswerOptions2Variables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ReplaceAnswerOptions2Variables {
  questionId: UUIDString;
  option1Text: string;
  option1IsCorrect: boolean;
  option2Text: string;
  option2IsCorrect: boolean;
}
```
### Return Type
Recall that executing the `ReplaceAnswerOptions2` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ReplaceAnswerOptions2Data`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ReplaceAnswerOptions2Data {
  answerOption_deleteMany: number;
  answerOption_insertMany: AnswerOption_Key[];
}
```
### Using `ReplaceAnswerOptions2`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, replaceAnswerOptions2, ReplaceAnswerOptions2Variables } from '@dataconnect/generated';

// The `ReplaceAnswerOptions2` mutation requires an argument of type `ReplaceAnswerOptions2Variables`:
const replaceAnswerOptions2Vars: ReplaceAnswerOptions2Variables = {
  questionId: ..., 
  option1Text: ..., 
  option1IsCorrect: ..., 
  option2Text: ..., 
  option2IsCorrect: ..., 
};

// Call the `replaceAnswerOptions2()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await replaceAnswerOptions2(replaceAnswerOptions2Vars);
// Variables can be defined inline as well.
const { data } = await replaceAnswerOptions2({ questionId: ..., option1Text: ..., option1IsCorrect: ..., option2Text: ..., option2IsCorrect: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await replaceAnswerOptions2(dataConnect, replaceAnswerOptions2Vars);

console.log(data.answerOption_deleteMany);
console.log(data.answerOption_insertMany);

// Or, you can use the `Promise` API.
replaceAnswerOptions2(replaceAnswerOptions2Vars).then((response) => {
  const data = response.data;
  console.log(data.answerOption_deleteMany);
  console.log(data.answerOption_insertMany);
});
```

### Using `ReplaceAnswerOptions2`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, replaceAnswerOptions2Ref, ReplaceAnswerOptions2Variables } from '@dataconnect/generated';

// The `ReplaceAnswerOptions2` mutation requires an argument of type `ReplaceAnswerOptions2Variables`:
const replaceAnswerOptions2Vars: ReplaceAnswerOptions2Variables = {
  questionId: ..., 
  option1Text: ..., 
  option1IsCorrect: ..., 
  option2Text: ..., 
  option2IsCorrect: ..., 
};

// Call the `replaceAnswerOptions2Ref()` function to get a reference to the mutation.
const ref = replaceAnswerOptions2Ref(replaceAnswerOptions2Vars);
// Variables can be defined inline as well.
const ref = replaceAnswerOptions2Ref({ questionId: ..., option1Text: ..., option1IsCorrect: ..., option2Text: ..., option2IsCorrect: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = replaceAnswerOptions2Ref(dataConnect, replaceAnswerOptions2Vars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.answerOption_deleteMany);
console.log(data.answerOption_insertMany);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.answerOption_deleteMany);
  console.log(data.answerOption_insertMany);
});
```

