import { useState } from "react";
import { Modal } from "./Modal";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: 24 }}>
      <button type="button" onClick={() => setOpen(true)}>
        Open modal
      </button>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Confirm action"
      >
        <p>Are you sure you want to do this?</p>
        <div style={{ marginTop: 16, display: "flex", gap: 8, justifyContent: "flex-end" }}>
          <button type="button" onClick={() => setOpen(false)}>
            Cancel
          </button>
          <button
            type="button"
            onClick={() => {
              // perform action here
              setOpen(false);
            }}
          >
            Confirm
          </button>
        </div>
      </Modal>
    </div>
  );
}
