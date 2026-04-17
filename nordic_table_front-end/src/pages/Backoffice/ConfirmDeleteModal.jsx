import React from "react";
import { MdOutlineFolderDelete } from "react-icons/md";
import { Modal } from "../../components/Modal/Modal";
import DeleteBtn from "./DeleteBtn";

const ConfirmDeleteModal = ({ onConfirm, onClose }) => {
  return (
    <Modal show={true} onClose={onClose}>
      <div className="relative flex items-center justify-center min-h-75">
        <button
          onClick={onClose}
          className="absolute -top-4 right-0 translate-x-1/2 text-lg font-bold cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-black w-9 h-9 hover:text-gray-300 transition-colors duration-300"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div className="flex flex-col my-auto gap-2 py-12 px-6 items-center justify-center">
          <MdOutlineFolderDelete className="text-zinc-800 w-24 h-24" />
          <h2 className="text-zinc-800 text-2xl font-bold">
            Er du sikker på, at du vil slette denne Dish ?
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4 w-full">
            <DeleteBtn onClick={onConfirm} className="w-full!">
              Ja
            </DeleteBtn>
            <DeleteBtn
              onClick={onClose}
              className="bg-blue-500! hover:bg-blue-600! w-full!"
            >
              Nej
            </DeleteBtn>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmDeleteModal;

// ConfirmDeleteModal component that displays a confirmation dialog when the user attempts to delete a dish, with options to confirm or cancel the deletion. { Modal } is a reusable modal component that handles the display and backdrop, while the content of the modal is defined within this component.
