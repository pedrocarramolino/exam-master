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
  - [*GetAttemptById*](#getattemptbyid)
- [**Mutations**](#mutations)
  - [*UpsertUser*](#upsertuser)

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

