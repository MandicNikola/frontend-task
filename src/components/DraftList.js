import React from "react";
import { DraftedNote } from "./DraftedNote";

export const DraftList = props => {
  return (
    <div className="m-auto  d-flex flex-wrap justify-content-center">
      {props.draftedNotes.map(note => {
        return (
          <DraftedNote
            id={note.id}
            key={note.id}
            title={note.title}
            date={note.date}
            body={note.body}
            author_name={note.author_name}
            status={note.status}
            publishDraft={props.publishDraft}
            deleteNote={props.deleteNote}
          />
        );
      })}
    </div>
  );
};
