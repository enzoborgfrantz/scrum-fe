import React from 'react';
import styled from 'styled-components';

const Button = styled.input.attrs({
  type: 'button',
  value: 'Start Vote',
})`
  appearance: none;
  outline: none;
  font-family: Raleway;
`;

const StartVoteButtonDisabled = `
  background-color: #e0e0e0;
  cursor: not-allowed;
`;

const StartVoteButtonEnabled = `
  transition: opacity .15s ease-in;
  &:active {
    cursor: pointer;
    box-shadow: none;
  }
  &:hover {
    cursor: pointer;
    opacity: .8;
  }
`;

const StartVoteButton = styled(Button)`
  border-radius: 5px;
  background-color: #f7de31;
  color: white;
  box-shadow: inset -2px -3px 0px 0px rgba(27,31,35,0.12);
  width: 200px;
  height: 44px;
  border: none;
  font-size: 20px;
  font-weight: 500;
  ${props => props.enabled ? StartVoteButtonEnabled : StartVoteButtonDisabled};
`;

export { StartVoteButton };
