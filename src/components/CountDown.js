import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import { socket } from '../socket/socket';
import store from '../store/store';

const CountDownStyle = styled.div`
  font-weight: 100;
  font-size: 80px;
  text-align: center;
  visibility: ${props => props.voteInProgress && props.timeRemaining ? 'visible;' : 'hidden'};
`;

const CountDown = ({timeRemaining, voteInProgress}) => (
  <CountDownStyle voteInProgress={voteInProgress} timeRemaining={timeRemaining}>
    {timeRemaining}
  </CountDownStyle>
);

export const VOTE_STARTED = 'VOTE_STARTED';
export const VOTE_ENDED = 'VOTE_ENDED';
export const VOTE_COUNTDOWN_UPDATE = 'VOTE_COUNTDOWN_UPDATE';

socket.on('vote start', function(msg) {
  store.dispatch({type: VOTE_STARTED});
});

socket.on('vote end', function(msg) {
  store.dispatch({type: VOTE_ENDED});
});

socket.on('vote countdown', function(timeRemaining) {
  store.dispatch({type: VOTE_COUNTDOWN_UPDATE, payload: timeRemaining});
});

const defaultState = {
  voteInProgress: false,
  timeRemaining: 0,
};

export const countDownReducer = (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case VOTE_STARTED:
      return { ...state, voteInProgress: true };
    case VOTE_ENDED:
      return { ...state, voteInProgress: false};
    case VOTE_COUNTDOWN_UPDATE:
      return { ...state, timeRemaining: payload };
    default:
      return state;
  }
};

const countDownSelector = state => state.countDown;
export const voteInProgressSelector = state => ({ voteInProgress: countDownSelector(state).voteInProgress });

export default connect(countDownSelector)(CountDown);
