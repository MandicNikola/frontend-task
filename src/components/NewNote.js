import React from "react";
//Modals import
import { Modal, ModalBody, ModalFooter } from "reactstrap";

export const NewNote = props => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  const validateInput = () => {
    const event = document.querySelectorAll("input");
    let error = false;
    event.forEach(input => {
      if (input.value === "") {
        error = true;
      }
    });
    if (error === true) {
      alert("You need to fill all fields");
    } else {
      props.submitForm();
      props.closeModal();
    }
  };

  const validateDraftInput = () => {
    const event = document.querySelectorAll("input");
    let error = false;
    event.forEach(input => {
      if (input.value === "") {
        error = true;
      }
    });
    if (error === true) {
      window.alert("You need to fill all fields");
    } else {
      props.saveDraft();
      props.closeModal();
    }
  };
  return (
    <Modal isOpen={props.isOpen}>
      <form onSubmit={handleSubmit} className="bg-dark myForm">
        <ModalBody>
          <input
            name="title"
            placeholder="Title"
            onChange={props.addNote}
            className="form-control m-2"
            type="text"
          />
          <input
            name="body"
            onChange={props.addNote}
            placeholder="Body"
            className="form-control m-2 "
            type="text"
          />
          <input
            name="author_name"
            placeholder="Author"
            onChange={props.addNote}
            className="form-control m-2"
            type="text"
          />
        </ModalBody>
        <ModalFooter>
          <button
            onClick={() => {
              validateInput();
            }}
            className="btn btn-dark btn-outline-success m-3 btn-small"
          >
            Submit
          </button>
          <button
            onClick={() => {
              props.closeModal();
            }}
            className="btn btn-warning btn-outline-danger m-3 btn-small"
          >
            Cancel
          </button>
          <button
            className="btn btn-secondary btn-outline-warning m-3 btn-small"
            onClick={() => {
              validateDraftInput();
            }}
          >
            Draft
          </button>
        </ModalFooter>
      </form>
    </Modal>
  );
};
