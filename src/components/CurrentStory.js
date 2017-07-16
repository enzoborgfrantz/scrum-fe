import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Ticket } from './Ticket';
import { currentStorySelector } from '../ducks/currentStory.duck';

const CurrentStoryStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const H2 = styled.h2`
  font-family: Raleway;
  font-weight: 400;
`;

const SelectStory = styled.h3`
  font-family: Raleway;
  font-weight: 300;
  margin: 5px 0;
`;

const CurrentStory = ({ currentStory}) => (
  <CurrentStoryStyle>
    <H2>Current Story</H2>
    {console.log('my current props', currentStory)}
    {currentStory ? <Ticket id={currentStory.key} {...currentStory} /> : <SelectStory>Please select a story to begin.</SelectStory>}

  </CurrentStoryStyle>
);

export default connect(currentStorySelector)(CurrentStory);
