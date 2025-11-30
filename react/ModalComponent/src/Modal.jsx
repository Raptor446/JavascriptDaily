import { useEffect } from "react";
import ReactDOM from "react-dom";

const MODAL_ROOT_ID = "modal-root";

function getModalRoot() {
  let root = document.getElementById(MODAL_ROOT_ID);
  if (!root) {
    root = document.createElement("div");
    root.id = MODAL_ROOT_ID;
    document.body.appendChild(root);
  }
  return root;
}

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  closeOnBackdrop = true,
  closeOnEsc = true,
}) {
  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape" && closeOnEsc) {
        onClose?.();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeOnEsc, onClose]);

  if (!isOpen) return null;

  const modalRoot = getModalRoot();

  const handleBackdropClick = (e) => {
    if (!closeOnBackdrop) return;
    if (e.target === e.currentTarget) {
      onClose?.();
    }
  };

  const modal = (
    <div
      onClick={handleBackdropClick}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
      aria-modal="true"
      role="dialog"
      aria-label={title}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 8,
          minWidth: 320,
          maxWidth: "90vw",
          maxHeight: "90vh",
          padding: 16,
          boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
          overflow: "auto",
        }}
      >
        {title && (
          <div
            style={{
              marginBottom: 12,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 8,
            }}
          >
            <h2 style={{ margin: 0, fontSize: 18 }}>{title}</h2>
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                style={{
                  border: "none",
                  background: "transparent",
                  fontSize: 20,
                  cursor: "pointer",
                }}
              >
                ×
              </button>
            )}
          </div>
        )}

        {children}
      </div>
    </div>
  );

  return ReactDOM.createPortal(modal, modalRoot);
}
