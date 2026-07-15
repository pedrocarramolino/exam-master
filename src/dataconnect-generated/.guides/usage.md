# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.




### React
For each operation, there is a wrapper hook that can be used to call the operation.

Here are all of the hooks that get generated:
```ts
import { useUpsertUser, useListExamCategories, useListExamGroupsByCategory, useListExamEditionsByGroup, useListExamsByEdition, useGetExamForAttempt, useGetAttemptReview, useGetMyAttempts, useGetAttemptById } from '@dataconnect/generated/react';
// The types of these hooks are available in react/index.d.ts

const { data, isPending, isSuccess, isError, error } = useUpsertUser(upsertUserVars);

const { data, isPending, isSuccess, isError, error } = useListExamCategories();

const { data, isPending, isSuccess, isError, error } = useListExamGroupsByCategory(listExamGroupsByCategoryVars);

const { data, isPending, isSuccess, isError, error } = useListExamEditionsByGroup(listExamEditionsByGroupVars);

const { data, isPending, isSuccess, isError, error } = useListExamsByEdition(listExamsByEditionVars);

const { data, isPending, isSuccess, isError, error } = useGetExamForAttempt(getExamForAttemptVars);

const { data, isPending, isSuccess, isError, error } = useGetAttemptReview(getAttemptReviewVars);

const { data, isPending, isSuccess, isError, error } = useGetMyAttempts();

const { data, isPending, isSuccess, isError, error } = useGetAttemptById(getAttemptByIdVars);

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
import { upsertUser, listExamCategories, listExamGroupsByCategory, listExamEditionsByGroup, listExamsByEdition, getExamForAttempt, getAttemptReview, getMyAttempts, getAttemptById } from '@dataconnect/generated';


// Operation UpsertUser:  For variables, look at type UpsertUserVars in ../index.d.ts
const { data } = await UpsertUser(dataConnect, upsertUserVars);

// Operation ListExamCategories: 
const { data } = await ListExamCategories(dataConnect);

// Operation ListExamGroupsByCategory:  For variables, look at type ListExamGroupsByCategoryVars in ../index.d.ts
const { data } = await ListExamGroupsByCategory(dataConnect, listExamGroupsByCategoryVars);

// Operation ListExamEditionsByGroup:  For variables, look at type ListExamEditionsByGroupVars in ../index.d.ts
const { data } = await ListExamEditionsByGroup(dataConnect, listExamEditionsByGroupVars);

// Operation ListExamsByEdition:  For variables, look at type ListExamsByEditionVars in ../index.d.ts
const { data } = await ListExamsByEdition(dataConnect, listExamsByEditionVars);

// Operation GetExamForAttempt:  For variables, look at type GetExamForAttemptVars in ../index.d.ts
const { data } = await GetExamForAttempt(dataConnect, getExamForAttemptVars);

// Operation GetAttemptReview:  For variables, look at type GetAttemptReviewVars in ../index.d.ts
const { data } = await GetAttemptReview(dataConnect, getAttemptReviewVars);

// Operation GetMyAttempts: 
const { data } = await GetMyAttempts(dataConnect);

// Operation GetAttemptById:  For variables, look at type GetAttemptByIdVars in ../index.d.ts
const { data } = await GetAttemptById(dataConnect, getAttemptByIdVars);


```