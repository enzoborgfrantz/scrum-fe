import { socket } from '../socket/socket';
import store from '../store/store';

const REQUEST_BACKLOG = 'REQUEST_BACKLOG';
const BACKLOG_RECEIVED = 'BACKLOG_RECEIVED';

socket.emit('request backlog', 'get unestimated issues');

socket.on('backlog received', backlogIssues => {
  store.dispatch({ type: BACKLOG_RECEIVED, payload: backlogIssues });
});

export const selectCurrentStory = (key) => {
  socket.emit('select current story', key);
}

export const backlogReducer = (state = {issueCount: 0}, action) => {
  const { type, payload } = action;

  switch(type) {
    case BACKLOG_RECEIVED: {
      return {...state, issues: payload, issueCount: payload.length};
    }
    default: return state;
  }
}

export const backlogSelector = state => state.backlog;
