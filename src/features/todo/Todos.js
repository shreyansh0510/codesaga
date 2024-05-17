import React, { useState } from "react";
import uniqid from "uniqid";
import Displaytodo from "./Displaytodo";

export default function Todos() {
  const [todoData, setTodoData] = useState({
    todoName: "",
    id: "",
  });

  const [db, setdb] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodoData({
      [name]: value,
      id: uniqid(),
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    db.push(todoData);
    clearForm();
  };

  const handleDelete = (id) => {
    console.log("handleDelete");
    let newdb = db.filter((item) => item.id !== id);
    setdb(newdb);
  };

  const handleEdit = (id) => {
    console.log("handleEdit", id);
    let data = db.filter((item) => item.id === id);
    let dataid = data[0].id;
    let dataName = data[0].todoName;
  };

  const clearForm = () => {
    setTodoData({
      todoName: "",
      id: "",
    });
  };

  return (
    <div>
      <form action="#" onSubmit={handleSave}>
        <label htmlFor="todoName">Enter the task</label>
        &nbsp;
        <input
          type="text"
          id="todoName"
          name="todoName"
          value={todoData.todoName}
          onChange={handleChange}
        />
        <button type="submit">Save</button>
        <button type="button" onClick={clearForm}>
          Clear
        </button>
      </form>
      <br />
      <hr />
      <br />
      <Displaytodo
        todos={db}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
}
