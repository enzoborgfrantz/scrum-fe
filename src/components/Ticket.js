import React from 'react';
import styled from 'styled-components';

const TicketStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 4px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
  transition: transform .25s ease-in-out;
  &:hover {
    cursor: pointer;
  }
`;

const TicketId = styled.span`
  background-color: #f7de31;
  padding: 5px;
  height: 100%;
  color: white;
`;

const TicketName = styled.span`
  padding: 5px;
`;

const TicketHeader = styled.div`
  display: flex;
`;

const TicketDescription = styled.div`
  background-color: white;
  padding: 5px;
`;

const Ticket = ({id, summary, description, ...props}) => (
  <TicketStyle>
    <TicketHeader>
      <TicketId>{id}</TicketId>
      <TicketName>{summary}</TicketName>
    </TicketHeader>
    {description && <TicketDescription>{description}</TicketDescription>}
  </TicketStyle>
);

export { Ticket };
