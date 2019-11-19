import React from "react";

export const DraftedNote = props => {
  return (
    <div
      className="card text-white bg-dark m-3 border-white"
      style={{ width: "20rem" }}
    >
      <div className="card-body rounded">
        <h5 className="card-title">{props.title}</h5>
        <h6 className="card-text small text-info">Created on: {props.date}</h6>
        <p className="card-text small ">Made by: {props.author_name}</p>
        <p className="card-text" style={{ height: "5rem" }}>
          {props.body}
        </p>
        <div className="form-check m-2">
          <input
            className="form-check-input"
            type="checkbox"
            checked={props.status}
            id="defaultCheck1"
          />
          <label className="form-check-label" htmlFor="defaultCheck1">
            Status
          </label>
        </div>
        <button
          onClick={() => {
            props.publishDraft(props.id);
          }}
          className="btn btn-dark btn-outline-success m-3 btn-small"
        >
          Publish
        </button>
        <button
          onClick={() => {
            props.deleteNote(props.id);
          }}
          className="btn btn-outline-warning btn-small m-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
