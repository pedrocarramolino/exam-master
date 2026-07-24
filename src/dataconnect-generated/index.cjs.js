const { queryRef, executeQuery, validateArgsWithOptions, mutationRef, executeMutation, validateArgs, makeMemoryCacheProvider } = require('firebase/data-connect');

const AttemptStatus = {
  IN_PROGRESS: "IN_PROGRESS",
  FINISHED: "FINISHED",
  ABANDONED: "ABANDONED",
}
exports.AttemptStatus = AttemptStatus;

const QuestionDifficulty = {
  EASY: "EASY",
  MEDIUM: "MEDIUM",
  HARD: "HARD",
}
exports.QuestionDifficulty = QuestionDifficulty;

const UserRole = {
  STUDENT: "STUDENT",
  ADMIN: "ADMIN",
}
exports.UserRole = UserRole;

const connectorConfig = {
  connector: 'exammaster',
  service: 'exammaster',
  location: 'europe-west2'
};
exports.connectorConfig = connectorConfig;
const dataConnectSettings = {
  cacheSettings: {
    cacheProvider: makeMemoryCacheProvider()
  }
};
exports.dataConnectSettings = dataConnectSettings;

const upsertUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpsertUser', inputVars);
}
upsertUserRef.operationName = 'UpsertUser';
exports.upsertUserRef = upsertUserRef;

exports.upsertUser = function upsertUser(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(upsertUserRef(dcInstance, inputVars));
}
;

const startExamAttemptRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'StartExamAttempt', inputVars);
}
startExamAttemptRef.operationName = 'StartExamAttempt';
exports.startExamAttemptRef = startExamAttemptRef;

exports.startExamAttempt = function startExamAttempt(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(startExamAttemptRef(dcInstance, inputVars));
}
;

const saveAttemptAnswerRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'SaveAttemptAnswer', inputVars);
}
saveAttemptAnswerRef.operationName = 'SaveAttemptAnswer';
exports.saveAttemptAnswerRef = saveAttemptAnswerRef;

exports.saveAttemptAnswer = function saveAttemptAnswer(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(saveAttemptAnswerRef(dcInstance, inputVars));
}
;

const finishExamAttemptRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'FinishExamAttempt', inputVars);
}
finishExamAttemptRef.operationName = 'FinishExamAttempt';
exports.finishExamAttemptRef = finishExamAttemptRef;

exports.finishExamAttempt = function finishExamAttempt(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(finishExamAttemptRef(dcInstance, inputVars));
}
;

const createExamCategoryRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateExamCategory', inputVars);
}
createExamCategoryRef.operationName = 'CreateExamCategory';
exports.createExamCategoryRef = createExamCategoryRef;

exports.createExamCategory = function createExamCategory(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createExamCategoryRef(dcInstance, inputVars));
}
;

const updateExamCategoryRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateExamCategory', inputVars);
}
updateExamCategoryRef.operationName = 'UpdateExamCategory';
exports.updateExamCategoryRef = updateExamCategoryRef;

exports.updateExamCategory = function updateExamCategory(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateExamCategoryRef(dcInstance, inputVars));
}
;

const deleteExamCategoryRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteExamCategory', inputVars);
}
deleteExamCategoryRef.operationName = 'DeleteExamCategory';
exports.deleteExamCategoryRef = deleteExamCategoryRef;

exports.deleteExamCategory = function deleteExamCategory(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteExamCategoryRef(dcInstance, inputVars));
}
;

const createExamGroupRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateExamGroup', inputVars);
}
createExamGroupRef.operationName = 'CreateExamGroup';
exports.createExamGroupRef = createExamGroupRef;

exports.createExamGroup = function createExamGroup(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createExamGroupRef(dcInstance, inputVars));
}
;

const updateExamGroupRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateExamGroup', inputVars);
}
updateExamGroupRef.operationName = 'UpdateExamGroup';
exports.updateExamGroupRef = updateExamGroupRef;

exports.updateExamGroup = function updateExamGroup(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateExamGroupRef(dcInstance, inputVars));
}
;

const deleteExamGroupRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteExamGroup', inputVars);
}
deleteExamGroupRef.operationName = 'DeleteExamGroup';
exports.deleteExamGroupRef = deleteExamGroupRef;

exports.deleteExamGroup = function deleteExamGroup(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteExamGroupRef(dcInstance, inputVars));
}
;

const createExamEditionRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateExamEdition', inputVars);
}
createExamEditionRef.operationName = 'CreateExamEdition';
exports.createExamEditionRef = createExamEditionRef;

exports.createExamEdition = function createExamEdition(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createExamEditionRef(dcInstance, inputVars));
}
;

const updateExamEditionRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateExamEdition', inputVars);
}
updateExamEditionRef.operationName = 'UpdateExamEdition';
exports.updateExamEditionRef = updateExamEditionRef;

exports.updateExamEdition = function updateExamEdition(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateExamEditionRef(dcInstance, inputVars));
}
;

const deleteExamEditionRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteExamEdition', inputVars);
}
deleteExamEditionRef.operationName = 'DeleteExamEdition';
exports.deleteExamEditionRef = deleteExamEditionRef;

exports.deleteExamEdition = function deleteExamEdition(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteExamEditionRef(dcInstance, inputVars));
}
;

const createExamRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateExam', inputVars);
}
createExamRef.operationName = 'CreateExam';
exports.createExamRef = createExamRef;

exports.createExam = function createExam(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createExamRef(dcInstance, inputVars));
}
;

const updateExamRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateExam', inputVars);
}
updateExamRef.operationName = 'UpdateExam';
exports.updateExamRef = updateExamRef;

exports.updateExam = function updateExam(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateExamRef(dcInstance, inputVars));
}
;

const deleteExamRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteExam', inputVars);
}
deleteExamRef.operationName = 'DeleteExam';
exports.deleteExamRef = deleteExamRef;

exports.deleteExam = function deleteExam(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteExamRef(dcInstance, inputVars));
}
;

const createTopicRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateTopic', inputVars);
}
createTopicRef.operationName = 'CreateTopic';
exports.createTopicRef = createTopicRef;

exports.createTopic = function createTopic(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createTopicRef(dcInstance, inputVars));
}
;

const deleteTopicRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteTopic', inputVars);
}
deleteTopicRef.operationName = 'DeleteTopic';
exports.deleteTopicRef = deleteTopicRef;

exports.deleteTopic = function deleteTopic(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteTopicRef(dcInstance, inputVars));
}
;

const createQuestionRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateQuestion', inputVars);
}
createQuestionRef.operationName = 'CreateQuestion';
exports.createQuestionRef = createQuestionRef;

exports.createQuestion = function createQuestion(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createQuestionRef(dcInstance, inputVars));
}
;

const createQuestion3Ref = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateQuestion3', inputVars);
}
createQuestion3Ref.operationName = 'CreateQuestion3';
exports.createQuestion3Ref = createQuestion3Ref;

exports.createQuestion3 = function createQuestion3(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createQuestion3Ref(dcInstance, inputVars));
}
;

const createQuestion2Ref = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateQuestion2', inputVars);
}
createQuestion2Ref.operationName = 'CreateQuestion2';
exports.createQuestion2Ref = createQuestion2Ref;

exports.createQuestion2 = function createQuestion2(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createQuestion2Ref(dcInstance, inputVars));
}
;

const updateQuestionRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateQuestion', inputVars);
}
updateQuestionRef.operationName = 'UpdateQuestion';
exports.updateQuestionRef = updateQuestionRef;

exports.updateQuestion = function updateQuestion(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateQuestionRef(dcInstance, inputVars));
}
;

const deleteAnswerOptionsByQuestionRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteAnswerOptionsByQuestion', inputVars);
}
deleteAnswerOptionsByQuestionRef.operationName = 'DeleteAnswerOptionsByQuestion';
exports.deleteAnswerOptionsByQuestionRef = deleteAnswerOptionsByQuestionRef;

exports.deleteAnswerOptionsByQuestion = function deleteAnswerOptionsByQuestion(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteAnswerOptionsByQuestionRef(dcInstance, inputVars));
}
;

const deleteAttemptAnswersByQuestionRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteAttemptAnswersByQuestion', inputVars);
}
deleteAttemptAnswersByQuestionRef.operationName = 'DeleteAttemptAnswersByQuestion';
exports.deleteAttemptAnswersByQuestionRef = deleteAttemptAnswersByQuestionRef;

exports.deleteAttemptAnswersByQuestion = function deleteAttemptAnswersByQuestion(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteAttemptAnswersByQuestionRef(dcInstance, inputVars));
}
;

const deleteExamAttemptsByExamRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteExamAttemptsByExam', inputVars);
}
deleteExamAttemptsByExamRef.operationName = 'DeleteExamAttemptsByExam';
exports.deleteExamAttemptsByExamRef = deleteExamAttemptsByExamRef;

exports.deleteExamAttemptsByExam = function deleteExamAttemptsByExam(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteExamAttemptsByExamRef(dcInstance, inputVars));
}
;

const deleteAllAttemptAnswersRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteAllAttemptAnswers');
}
deleteAllAttemptAnswersRef.operationName = 'DeleteAllAttemptAnswers';
exports.deleteAllAttemptAnswersRef = deleteAllAttemptAnswersRef;

exports.deleteAllAttemptAnswers = function deleteAllAttemptAnswers(dc) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dc, undefined);
  return executeMutation(deleteAllAttemptAnswersRef(dcInstance, inputVars));
}
;

const deleteAllExamAttemptsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteAllExamAttempts');
}
deleteAllExamAttemptsRef.operationName = 'DeleteAllExamAttempts';
exports.deleteAllExamAttemptsRef = deleteAllExamAttemptsRef;

exports.deleteAllExamAttempts = function deleteAllExamAttempts(dc) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dc, undefined);
  return executeMutation(deleteAllExamAttemptsRef(dcInstance, inputVars));
}
;

const deleteQuestionRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteQuestion', inputVars);
}
deleteQuestionRef.operationName = 'DeleteQuestion';
exports.deleteQuestionRef = deleteQuestionRef;

exports.deleteQuestion = function deleteQuestion(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteQuestionRef(dcInstance, inputVars));
}
;

const replaceAnswerOptionsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'ReplaceAnswerOptions', inputVars);
}
replaceAnswerOptionsRef.operationName = 'ReplaceAnswerOptions';
exports.replaceAnswerOptionsRef = replaceAnswerOptionsRef;

exports.replaceAnswerOptions = function replaceAnswerOptions(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(replaceAnswerOptionsRef(dcInstance, inputVars));
}
;

const replaceAnswerOptions3Ref = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'ReplaceAnswerOptions3', inputVars);
}
replaceAnswerOptions3Ref.operationName = 'ReplaceAnswerOptions3';
exports.replaceAnswerOptions3Ref = replaceAnswerOptions3Ref;

exports.replaceAnswerOptions3 = function replaceAnswerOptions3(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(replaceAnswerOptions3Ref(dcInstance, inputVars));
}
;

const replaceAnswerOptions2Ref = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'ReplaceAnswerOptions2', inputVars);
}
replaceAnswerOptions2Ref.operationName = 'ReplaceAnswerOptions2';
exports.replaceAnswerOptions2Ref = replaceAnswerOptions2Ref;

exports.replaceAnswerOptions2 = function replaceAnswerOptions2(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(replaceAnswerOptions2Ref(dcInstance, inputVars));
}
;

const listExamCategoriesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListExamCategories');
}
listExamCategoriesRef.operationName = 'ListExamCategories';
exports.listExamCategoriesRef = listExamCategoriesRef;

exports.listExamCategories = function listExamCategories(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(listExamCategoriesRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const listExamGroupsByCategoryRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListExamGroupsByCategory', inputVars);
}
listExamGroupsByCategoryRef.operationName = 'ListExamGroupsByCategory';
exports.listExamGroupsByCategoryRef = listExamGroupsByCategoryRef;

exports.listExamGroupsByCategory = function listExamGroupsByCategory(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(listExamGroupsByCategoryRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const listExamEditionsByGroupRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListExamEditionsByGroup', inputVars);
}
listExamEditionsByGroupRef.operationName = 'ListExamEditionsByGroup';
exports.listExamEditionsByGroupRef = listExamEditionsByGroupRef;

exports.listExamEditionsByGroup = function listExamEditionsByGroup(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(listExamEditionsByGroupRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const listExamsByEditionRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListExamsByEdition', inputVars);
}
listExamsByEditionRef.operationName = 'ListExamsByEdition';
exports.listExamsByEditionRef = listExamsByEditionRef;

exports.listExamsByEdition = function listExamsByEdition(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(listExamsByEditionRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const getExamForAttemptRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetExamForAttempt', inputVars);
}
getExamForAttemptRef.operationName = 'GetExamForAttempt';
exports.getExamForAttemptRef = getExamForAttemptRef;

exports.getExamForAttempt = function getExamForAttempt(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getExamForAttemptRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const getAttemptReviewRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetAttemptReview', inputVars);
}
getAttemptReviewRef.operationName = 'GetAttemptReview';
exports.getAttemptReviewRef = getAttemptReviewRef;

exports.getAttemptReview = function getAttemptReview(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getAttemptReviewRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const getMyAttemptsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMyAttempts');
}
getMyAttemptsRef.operationName = 'GetMyAttempts';
exports.getMyAttemptsRef = getMyAttemptsRef;

exports.getMyAttempts = function getMyAttempts(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(getMyAttemptsRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const getMyAnswersWithTopicRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMyAnswersWithTopic');
}
getMyAnswersWithTopicRef.operationName = 'GetMyAnswersWithTopic';
exports.getMyAnswersWithTopicRef = getMyAnswersWithTopicRef;

exports.getMyAnswersWithTopic = function getMyAnswersWithTopic(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(getMyAnswersWithTopicRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const getInProgressAttemptRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetInProgressAttempt', inputVars);
}
getInProgressAttemptRef.operationName = 'GetInProgressAttempt';
exports.getInProgressAttemptRef = getInProgressAttemptRef;

exports.getInProgressAttempt = function getInProgressAttempt(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getInProgressAttemptRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const getAttemptByIdRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetAttemptById', inputVars);
}
getAttemptByIdRef.operationName = 'GetAttemptById';
exports.getAttemptByIdRef = getAttemptByIdRef;

exports.getAttemptById = function getAttemptById(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getAttemptByIdRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const getUserRoleRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUserRole', inputVars);
}
getUserRoleRef.operationName = 'GetUserRole';
exports.getUserRoleRef = getUserRoleRef;

exports.getUserRole = function getUserRole(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getUserRoleRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const adminListGroupsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'AdminListGroups', inputVars);
}
adminListGroupsRef.operationName = 'AdminListGroups';
exports.adminListGroupsRef = adminListGroupsRef;

exports.adminListGroups = function adminListGroups(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(adminListGroupsRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const adminListEditionsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'AdminListEditions', inputVars);
}
adminListEditionsRef.operationName = 'AdminListEditions';
exports.adminListEditionsRef = adminListEditionsRef;

exports.adminListEditions = function adminListEditions(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(adminListEditionsRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const adminListExamsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'AdminListExams', inputVars);
}
adminListExamsRef.operationName = 'AdminListExams';
exports.adminListExamsRef = adminListExamsRef;

exports.adminListExams = function adminListExams(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(adminListExamsRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const adminListTopicsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'AdminListTopics', inputVars);
}
adminListTopicsRef.operationName = 'AdminListTopics';
exports.adminListTopicsRef = adminListTopicsRef;

exports.adminListTopics = function adminListTopics(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(adminListTopicsRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const adminListQuestionsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'AdminListQuestions', inputVars);
}
adminListQuestionsRef.operationName = 'AdminListQuestions';
exports.adminListQuestionsRef = adminListQuestionsRef;

exports.adminListQuestions = function adminListQuestions(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(adminListQuestionsRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const adminGetQuestionRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'AdminGetQuestion', inputVars);
}
adminGetQuestionRef.operationName = 'AdminGetQuestion';
exports.adminGetQuestionRef = adminGetQuestionRef;

exports.adminGetQuestion = function adminGetQuestion(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(adminGetQuestionRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;
