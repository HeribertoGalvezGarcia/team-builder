import React from "react";
import styled from 'styled-components';
import Member from "./Member";

const StyledDiv = styled.div`
  width: 100%;
  margin: 5px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Members({members}) {
  return (
    <StyledDiv>
      {members.map(member => <Member member={member} />)}
    </StyledDiv>
  );
}

export default Members;
