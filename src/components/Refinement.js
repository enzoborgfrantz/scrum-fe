import React from 'react';
import styled from 'styled-components';
import Backlog from './Backlog';
import ActionPanel from './ActionPanel';
// import { Estimated } from './Estimated';

const RefinementWrapper = styled.div`
  display: flex;
  ${''/* border: 1px solid; */}
`;

const BacklogWrapper = styled.div`
  flex: 1;
  margin: 0 10px;
`;

const ActionPanelWrapper = styled.div`
  flex: 2;
  ${''/* border: 1px solid grey; */}
`;

const EstimatedWrapper = styled.div`
  flex: 1;
  ${''/* border: 1px solid blue; */}
`;

const Refinement = () => (
  <RefinementWrapper>
    <BacklogWrapper>
      <Backlog />
    </BacklogWrapper>
    <ActionPanelWrapper>
      <ActionPanel />
    </ActionPanelWrapper>
    <EstimatedWrapper />
  </RefinementWrapper>
);

export { Refinement };
