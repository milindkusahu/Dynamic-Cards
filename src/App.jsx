import React, { useState } from "react";
import Cards from "./components/Cards";
import Form from "./components/Form";

function App() {
  const [users, setUsers] = useState([
    {
      name: "Milind Kumar Sahu",
      email: "milindsahu2000@gmail.com",
      image:
        "https://lh3.googleusercontent.com/a/ACg8ocIPduTsm795IjcuxZOZ3erZ6ChW7BvpE1WvFy_vuul2OqkTiA_M=s288-c-no",
    },
  ]);

  console.log(users);

  const handleFormSubmitData = (data) => {
    setUsers([...users, data]);
  };

  const handleRemove = (id) => {
    setUsers(() =>
      users.filter((item, index) => {
        return index != id;
      })
    );
  };

  return (
    <div className="w-full h-screen bg-zinc-200 flex items-center justify-center">
      <div className="container mx-auto">
        <Cards handleRemove={handleRemove} users={users} />
        <Form handleFormSubmitData={handleFormSubmitData} />
      </div>
    </div>
  );
}

export default App;
