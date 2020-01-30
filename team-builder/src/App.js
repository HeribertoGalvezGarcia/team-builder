import React, {useState} from 'react';
import Form from "./components/Form";
import Members from "./components/Members";

const data = [
  {
    name: "Heriberto",
    email: "heriberto.galvezgarcia@gmail.com",
    role: "N/A"
  }
];


function App() {
  const [members, setMembers] = useState(data);

  return (
    <div>
      <Members members={members} />
      <Form setMembers={setMembers} />
    </div>
  );
}

export default App;
