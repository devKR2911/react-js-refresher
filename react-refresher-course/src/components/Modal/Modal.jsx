import classes from "./Modal.module.css";
function Modal({ children, closeModal }) {
  return (
    <>
      <div className={classes.backdrop} onClick={closeModal}></div>
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
