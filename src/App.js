import React, { useState } from "react";
import { NoteList } from "./components/NoteList";
import { NewNote } from "./components/NewNote";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import uuid from "uuid";
import jsonNotes from "./notes.json";
import { Draft } from "./components/Draft";

export default function App() {
  const [currNote, setCurrNote] = useState({ notes: jsonNotes });

  const [modal, setModal] = useState({
    active: false
  });
  const [draftModal, setDraftModal] = useState({
    active: false
  });

  const [newNote, setNewNote] = useState({
    title: "",
    body: "",
    author_name: ""
  });

  const [state, setState] = useState({
    newState: [...currNote.notes]
  });

  const [draftState, setDraftState] = useState({
    draftedNotes: []
  });

  const publishDraft = id => {
    let resultList = [];
    let filter = [];
    draftState.draftedNotes.map(note => {
      if (note.id !== id) {
        filter.push(note);
      } else {
        resultList.push(note);
      }
      return null;
    });
    setDraftState({
      draftedNotes: filter
    });
    setState({
      newState: [...state.newState, ...resultList]
    });
    setCurrNote({
      notes: [...currNote.notes, ...resultList]
    });
  };
  const triggerDraftModal = () => {
    setDraftModal({
      active: !draftModal.active
    });
  };
  const saveDraft = () => {
    setDraftState({
      draftedNotes: [...draftState.draftedNotes, newNote]
    });
  };
  const deleteDraft = id => {
    let result = [];
    draftState.draftedNotes.map(note => {
      if (note.id !== id) {
        result.push(note);
      }
      return null;
    });
    setDraftState({
      draftedNotes: result
    });
  };

  const triggerModal = () => {
    setModal({
      active: !modal.active
    });
  };

  const addNote = e => {
    let today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
    let newNoteId = uuid();
    const value = e.target.value;

    setNewNote({
      ...newNote,
      [e.target.name]: value,
      date: date,
      id: newNoteId
    });
  };

  const submitForm = () => {
    setCurrNote({
      notes: [...currNote.notes, newNote]
    });
    setState({
      newState: [...state.newState, newNote]
    });
  };

  const deleteNote = id => {
    let result = [];
    currNote.notes.map(note => {
      if (note.id !== id) {
        result.push(note);
      }
      return null;
    });
    setCurrNote({
      notes: result
    });
    setState({
      newState: result
    });
  };

  const sort = () => {
    const sort = currNote.notes
      .sort(function(a, b) {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      })
      .reverse();
    setCurrNote({
      notes: sort
    });
  };

  const search = e => {
    let result = [];
    if (e.target.value === "") {
      setCurrNote({
        notes: [...state.newState]
      });
    } else {
      currNote.notes.map(note => {
        if (note.title.startsWith(e.target.value)) {
          result.push(note);
        }
        return null;
      });
      setCurrNote({
        notes: [...result]
      });
    }
  };

  return (
    <React.Fragment>
      <div className="mx-auto bgstyle">
        <h1 className="text-capitalize text-center m-5  ">NOTES APP</h1>
        <div className="m-auto d-flex  justify-content-center">
          <textarea
            style={{
              height: "35px",
              width: "235px",
              resize: "none",
              overflow: "hidden"
            }}
            onChange={search}
            type="text"
            className="form-control text-dark"
            placeholder="Search for note"
          ></textarea>
        </div>
      </div>
      <NoteList notes={currNote.notes} deleteNote={deleteNote}></NoteList>
      <NewNote
        saveDraft={saveDraft}
        submitForm={submitForm}
        addNote={addNote}
        closeModal={triggerModal}
        isOpen={modal.active}
      />
      <div className="m-auto" style={{ width: "max-content" }}>
        <button
          onClick={triggerModal}
          className="btn btn-dark btn-outline-success m-4 btn-lg"
        >
          New Note
        </button>
        <button
          onClick={sort}
          className="btn btn-dark btn-outline-primary m-4 btn-lg"
        >
          Sort Notes
        </button>
        <button
          className="btn btn-dark btn-outline-danger m-4 btn-lg"
          onClick={triggerDraftModal}
        >
          Drafts
        </button>
        <Draft
          publishDraft={publishDraft}
          deleteNote={deleteDraft}
          draftedNotes={draftState.draftedNotes}
          closeModal={triggerDraftModal}
          isOpen={draftModal.active}
        />
      </div>
    </React.Fragment>
  );
}
