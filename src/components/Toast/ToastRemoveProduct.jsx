import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";

export default function ToastRemoveProduct({ showRemoveProduct, setRemoveProduct }) {
  return (
    <div>
      <ToastContainer className="p-3" position="top-end">
        <Toast onClose={() => setRemoveProduct(false)} show={showRemoveProduct} delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto">Nike</strong>
            <small>just now</small>
          </Toast.Header>
          <Toast.Body>Item deleted, successfully!</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}
