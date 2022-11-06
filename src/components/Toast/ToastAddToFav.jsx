import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";

export default function ToastAddToFav({ showAddFav, setShowAddFav }) {
  return (
    <div>
      <ToastContainer className="p-3" position="top-end">
        <Toast onClose={() => setShowAddFav(false)} show={showAddFav} delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto">Nike</strong>
            <small>just now</small>
          </Toast.Header>
          <Toast.Body>Add to favourite, successfully!</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}
