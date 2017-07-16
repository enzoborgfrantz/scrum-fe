import styled from 'styled-components';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
import { Refinement } from './Refinement';
import { connect } from 'react-redux';
import { sendMessage } from '../socket/socket';

const Wrapper = styled.div`
  font-family: "Raleway";
  margin: 0;
  padding: 0;
`;

class App extends Component {
  constructor(props) {
    super(props);
    sendMessage();
  }

  render() {
    return (
      <Wrapper>
        <Provider store={store}>
          <Refinement />
        </Provider>
      </Wrapper>
    );
  }
}

export { App }
