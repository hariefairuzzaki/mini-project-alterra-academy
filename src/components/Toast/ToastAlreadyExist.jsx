import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";

export default function ToastAlreadyExist({ showAlreadyExist, setAlreadyExist }) {
  return (
    <div>
      <ToastContainer className="p-3" position="top-end">
        <Toast bg="danger" onClose={() => setAlreadyExist(false)} show={showAlreadyExist} delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto">Nike</strong>
            <small>just now</small>
          </Toast.Header>
          <Toast.Body className="text-white">Product Already Exist!</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}
