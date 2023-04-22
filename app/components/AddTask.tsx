"use client";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
const AddTask = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <button
        onClick={() => {
          console.log("button clicked");
          setOpen(true);
        }}
        className="w-full capitalize btn-primary btn"
      >
        {" "}
        ADD NEW TASK
        <AiOutlinePlus className="ml-2 " size={18} />
      </button>
      <Modal open={open} setOpen={setOpen} />
    </div>
  );
};

export default AddTask;
