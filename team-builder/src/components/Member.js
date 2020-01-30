import React from "react";
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 60%;
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #242424;
  border: 1px solid black;
  color: white;
`;

const PContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const StyledH4 = styled.h4`
  width: 80%;
`;

const StyledP = styled.p`
  width: 40%;
`;


function Member({member: {name, email, role}}) {
  return (
    <StyledDiv>
      <StyledH4>{name}</StyledH4>
      <PContainer>
        <StyledP>Email: {email}</StyledP>
        <StyledP>Role: {role}</StyledP>
      </PContainer>
    </StyledDiv>
  );
}

export default Member;
