import React from "react";
import { Modal, ModalBody, ModalFooter } from "reactstrap";
import { DraftList } from "./DraftList";

export const Draft = props => {
  return (
    <React.Fragment>
      <Modal isOpen={props.isOpen}>
        <ModalBody>
          <DraftList
            publishDraft={props.publishDraft}
            deleteNote={props.deleteNote}
            draftedNotes={props.draftedNotes}
          />
        </ModalBody>
        <ModalFooter>
          <button
            className="btn btn-warning btn-outline-danger m-3 btn-small"
            onClick={() => {
              props.closeModal();
            }}
          >
            Back
          </button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};
