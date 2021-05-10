import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { Link } from "react-router-dom";
export default function LogoutModal(props) {
  let { isOpen, handleModal } = props;
  return (
    <Modal isOpen={isOpen} centered={true}>
      <ModalHeader>Are you sure you want to Logout ?</ModalHeader>
      <ModalBody className="text-center">
        <button
          className="btn btn-outline-primary mx-1"
          onClick={(e) => handleModal(false)}
        >
          No
        </button>
        <Link className="btn btn-outline-danger mx-1" to="/">
          Yes
        </Link>
      </ModalBody>
    </Modal>
  );
}
