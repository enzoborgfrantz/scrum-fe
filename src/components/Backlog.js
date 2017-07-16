import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  backlogSelector,
  selectCurrentStory
} from '../ducks/backlog.duck';

const BacklogItemStyle = styled.div`
  display: flex;
  background-color: #fafafa;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 4px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
  transition: transform .2s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: translateX(5px);
  }
`;

const TicketId = styled.div`
  background-color: #f7de31;
  padding: 5px;
  width: 70px;
  flex-grow: 0;
  flex-shrink: 0;
  text-align: center;
  ${''/* align-self: center; */}
  flex-basis: 70px;
  color: white;
`;

const TicketName = styled.div`
  padding: 5px;
`;

const BacklogItem = ({ id, summary, description, onClick }) => (
  <BacklogItemStyle onClick={onClick}>
    <TicketId>{id}</TicketId>
    <TicketName>{summary}</TicketName>
  </BacklogItemStyle>
)

const BacklogStyle = styled.div`
  background-color: #fafafa;
  border-radius: 10px;
  border: 1px solid #EEEEEE;
  padding: 5px 0 5px;
`;

const H2 = styled.h2`
  font-family: Raleway;
  font-weight: 400;
  padding-left: 15px;
  padding-right: 15px;
  text-align: center;
  ${''/* padding-left: 15px; */}
`;

const IssueContainer = styled.div`
  ${''/* padding: 5px 15px 5px; */}
  overflow-y: scroll;
  height: 80vh;
  margin: 0;
  padding: 5px 15px;
`;

const Backlog = ({ issues, issueCount, ...props }) => (
  <BacklogStyle>
    <H2>{issueCount} Unestimated Issues</H2>
    <IssueContainer>
      {issues && issues.map(i => <BacklogItem onClick={() => selectCurrentStory(i.key)} id={i.key} {...i}/>)}
    </IssueContainer>
  </BacklogStyle>
);

export default connect(backlogSelector)(Backlog);
