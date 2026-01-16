const Modal = ({ children, close }) => {
  return (
    <div className="modal-backdrop" onClick={close}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={close}>✕</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
