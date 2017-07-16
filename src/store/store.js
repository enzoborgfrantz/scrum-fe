import { createStore, applyMiddleware, combineReducers } from 'redux';
import { chatMiddleware } from '../middleware/chat.middleware';
import { countDownReducer } from '../components/CountDown';
import { backlogReducer } from '../ducks/backlog.duck';
import { currentStoryReducer } from '../ducks/currentStory.duck';

const middlewares = [
  chatMiddleware,
];

const reducers = combineReducers({
  countDown: countDownReducer,
  backlog: backlogReducer,
  currentStory: currentStoryReducer,
});

const store = createStore(
  reducers,
  applyMiddleware(...middlewares),
);

export default store;
