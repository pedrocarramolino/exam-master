# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.




### React
For each operation, there is a wrapper hook that can be used to call the operation.

Here are all of the hooks that get generated:
```ts
import { useUpsertUser, useCreateExamCategory, useUpdateExamCategory, useDeleteExamCategory, useCreateExamGroup, useUpdateExamGroup, useDeleteExamGroup, useCreateExamEdition, useUpdateExamEdition, useDeleteExamEdition } from '@dataconnect/generated/react';
// The types of these hooks are available in react/index.d.ts

const { data, isPending, isSuccess, isError, error } = useUpsertUser(upsertUserVars);

const { data, isPending, isSuccess, isError, error } = useCreateExamCategory(createExamCategoryVars);

const { data, isPending, isSuccess, isError, error } = useUpdateExamCategory(updateExamCategoryVars);

const { data, isPending, isSuccess, isError, error } = useDeleteExamCategory(deleteExamCategoryVars);

const { data, isPending, isSuccess, isError, error } = useCreateExamGroup(createExamGroupVars);

const { data, isPending, isSuccess, isError, error } = useUpdateExamGroup(updateExamGroupVars);

const { data, isPending, isSuccess, isError, error } = useDeleteExamGroup(deleteExamGroupVars);

const { data, isPending, isSuccess, isError, error } = useCreateExamEdition(createExamEditionVars);

const { data, isPending, isSuccess, isError, error } = useUpdateExamEdition(updateExamEditionVars);

const { data, isPending, isSuccess, isError, error } = useDeleteExamEdition(deleteExamEditionVars);

```

Here's an example from a different generated SDK:

```ts
import { useListAllMovies } from '@dataconnect/generated/react';

function MyComponent() {
  const { isLoading, data, error } = useListAllMovies();
  if(isLoading) {
    return <div>Loading...</div>
  }
  if(error) {
    return <div> An Error Occurred: {error} </div>
  }
}

// App.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MyComponent from './my-component';

function App() {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>
    <MyComponent />
  </QueryClientProvider>
}
```



## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { upsertUser, createExamCategory, updateExamCategory, deleteExamCategory, createExamGroup, updateExamGroup, deleteExamGroup, createExamEdition, updateExamEdition, deleteExamEdition } from '@dataconnect/generated';


// Operation UpsertUser:  For variables, look at type UpsertUserVars in ../index.d.ts
const { data } = await UpsertUser(dataConnect, upsertUserVars);

// Operation CreateExamCategory:  For variables, look at type CreateExamCategoryVars in ../index.d.ts
const { data } = await CreateExamCategory(dataConnect, createExamCategoryVars);

// Operation UpdateExamCategory:  For variables, look at type UpdateExamCategoryVars in ../index.d.ts
const { data } = await UpdateExamCategory(dataConnect, updateExamCategoryVars);

// Operation DeleteExamCategory:  For variables, look at type DeleteExamCategoryVars in ../index.d.ts
const { data } = await DeleteExamCategory(dataConnect, deleteExamCategoryVars);

// Operation CreateExamGroup:  For variables, look at type CreateExamGroupVars in ../index.d.ts
const { data } = await CreateExamGroup(dataConnect, createExamGroupVars);

// Operation UpdateExamGroup:  For variables, look at type UpdateExamGroupVars in ../index.d.ts
const { data } = await UpdateExamGroup(dataConnect, updateExamGroupVars);

// Operation DeleteExamGroup:  For variables, look at type DeleteExamGroupVars in ../index.d.ts
const { data } = await DeleteExamGroup(dataConnect, deleteExamGroupVars);

// Operation CreateExamEdition:  For variables, look at type CreateExamEditionVars in ../index.d.ts
const { data } = await CreateExamEdition(dataConnect, createExamEditionVars);

// Operation UpdateExamEdition:  For variables, look at type UpdateExamEditionVars in ../index.d.ts
const { data } = await UpdateExamEdition(dataConnect, updateExamEditionVars);

// Operation DeleteExamEdition:  For variables, look at type DeleteExamEditionVars in ../index.d.ts
const { data } = await DeleteExamEdition(dataConnect, deleteExamEditionVars);


```