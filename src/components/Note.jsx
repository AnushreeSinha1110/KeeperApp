import React from "react";

function Note(props) {
  function handleDel() {
    props.onDel(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDel}>DELETE</button>
    </div>
  );
}

export default Note;
