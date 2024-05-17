import React from "react";

function Displaytodo({ todos, handleDelete, handleEdit }) {
  return (
    <>
      {todos.length > 0 ? (
        todos?.map((todo, index) => (
          <div key={todo.id}>
            {index + 1}. {todo.todoName}
            &nbsp;
            {/* <button onClick={() => handleEdit(todo.id)}>Edit</button> */}
            &nbsp;
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
            <br />
          </div>
        ))
      ) : (
        <p>no todos found !</p>
      )}
    </>
  );
}

export default Displaytodo;
