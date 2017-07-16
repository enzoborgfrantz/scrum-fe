import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { voteInProgressSelector } from './CountDown';

const CardDisabled = `
  opacity: .35;
`;

const CardEnabled = `
  transition: all .15s ease-in-out;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
    box-shadow: #f7de31 0px 0px 0px 2px, #f7de31 0px 0px 0px;
  }
  &:active {
    background-color: #f7de31;
    color: white;
  }
`;

const Card = styled.div`
  width: 40px;
  height: 55px;
  line-height: 50px;
  border-radius: 5px;
  font-size: 25px;
  font-weight: 300;
  background-color: white;
  margin: 0 5px;
  box-shadow: rgba(0, 0, 0, 0.12) 2px 2px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
  ${ props => props.voteInProgress ? CardEnabled : CardDisabled };
`;

const DeckStyle = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  width: 100%;
`;

const Deck = ({ cards, voteInProgress }) => (
  <DeckStyle>
    {cards.map(c => <Card voteInProgress={voteInProgress} onClick={() => voteInProgress && console.log(voteInProgress)}>{c}</Card>)}
  </DeckStyle>
);

export default connect(voteInProgressSelector)(Deck);
