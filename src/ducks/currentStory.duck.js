import { socket } from '../socket/socket';
import store from '../store/store';

const CURRENT_STORY_UPDATED = 'CURRENT_STORY_UPDATED';

socket.on('current story updated', currentStory => {
  store.dispatch({ type:CURRENT_STORY_UPDATED, payload: currentStory });
});

export const currentStoryReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch(type) {
    case CURRENT_STORY_UPDATED: {
      return {...state, ...payload};
    }
    default: return state;
  }
}

export const currentStorySelector = state => ({ currentStory: state.currentStory[0] });
