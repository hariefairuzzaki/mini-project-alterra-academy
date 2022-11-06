import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";

export default function ToastAddToCart({ showAddCart, setShowAddCart }) {
  return (
    <div>
      <ToastContainer className="p-3" position="top-end">
        <Toast onClose={() => setShowAddCart(false)} show={showAddCart} delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto">Nike</strong>
            <small>just now</small>
          </Toast.Header>
          <Toast.Body>Add to bag, successfully!</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}
