/** @format */

import { DeleteOutline } from "@material-ui/icons";
import React from "react";

const Note = (props) => {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };
  return (
    <>
      <div className="note">
        <h1>{props.title}</h1>
        <br />
        <p>{props.content}</p>
        <button className="btn" onClick={deleteNote}>
          <DeleteOutline className="delteIcon" />
        </button>
      </div>
    </>
  );
};

export default Note;
