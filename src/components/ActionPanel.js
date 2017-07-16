import React from 'react';
import styled from 'styled-components';
import CurrentStory from './CurrentStory';
import { StartVoteButton } from './Button';
import CountDown from './CountDown';
import Deck from './Deck';
import { TeamMembersPanel } from './TeamMembersPanel';
import { startVote } from '../socket/socket';
import { connect } from 'react-redux';
import { voteInProgressSelector } from './CountDown';

const ActionPanelStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fafafa;
  padding: 0px 15px 15px;
  border-radius: 10px;
  border: 1px solid #EEEEEE;
`;

const CountDownWrapper = styled.div`
  margin: 25px 0;
`;

const DeckWrapper = styled.div`
  margin: 25px 0;
`;

const ActionPanel = ({ voteInProgress }) => (
  <ActionPanelStyle>
    <CurrentStory />
    <CountDownWrapper>
      <CountDown />
    </CountDownWrapper>
    <StartVoteButton onClick={() => !voteInProgress && startVote()} enabled={!voteInProgress}/>
    <DeckWrapper>
      <Deck cards={[1,2,3,5,8,13,21]}/>
    </DeckWrapper>
    <TeamMembersPanel />
  </ActionPanelStyle>
);

export default connect(voteInProgressSelector)(ActionPanel);
