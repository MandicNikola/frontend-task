import React from "react";
import { Note } from "./Note";

export const NoteList = props => {
  return (
    <div className="m-auto p-4 d-flex">
      <div className="m-auto col-9 d-flex flex-wrap justify-content-center">
        {props.notes.map(note => {
          return (
            <Note
              id={note.id}
              key={note.id}
              title={note.title}
              date={note.date}
              body={note.body}
              author_name={note.author_name}
              status={note.status}
              onClick={props.deleteNote}
            />
          );
        })}
      </div>
    </div>
  );
};
