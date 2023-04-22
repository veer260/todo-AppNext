import React from "react";

interface ModalProps {
  open: boolean;
  setOpen: (param1: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ open, setOpen }) => {
  return (
    <div className={"modal " + (open ? "modal-open" : "")}>
      <div className="relative modal-box">
        <label
          htmlFor="my-modal-3"
          onClick={() => {
            setOpen(false);
          }}
          className="absolute btn btn-sm btn-circle right-2 top-2"
        >
          ✕
        </label>
        <h3 className="text-lg font-bold">
          Congratulations random Internet user!
        </h3>
        <p className="py-4">
          You've been selected for a chance to get one year of subscription to
          use Wikipedia for free!
        </p>
      </div>
    </div>
  );
};

export default Modal;
