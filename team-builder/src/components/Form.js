import React, {useState} from "react";
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  justify-content: space-around;
`;

function Form({setMembers}) {
  const [user, setUser] = useState({name: "", email: "", role: ""});

  function handleChange(event) {
    setUser({...user, [event.target.name]: event.target.value});
  }

  function handleSubmit(event) {
    event.preventDefault();
    setMembers(members => [...members, user]);
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="text" name="email" onChange={handleChange} />
      </label>
      <label>
        Role:
        <input type="text" name="role" onChange={handleChange} />
      </label>
      <button>Submit!</button>
    </StyledForm>
  );
}


export default Form;