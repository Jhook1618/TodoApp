interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
  children: React.ReactNode; // Allow children
}

const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen, children }) => {
  return (
    <>
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal-box relative">
            <label
              onClick={() => setModalOpen(false)}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </label>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
