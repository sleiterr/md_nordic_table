import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

export function Modal({ show, children, onClose }) {
  return (
    <Transition show={show} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 flex items-center"
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900 opacity-50"></div>
        </Transition.Child>
        <Dialog.Panel className="relative transform overflo-hidden rounded-lg bg-white shadow-xl transition-all p-7 mx-auto sm:my-10 sm:w-full sm:max-w-2xl sm:h-80 sm:max-h-80 border border-rose-500">
          {children}
        </Dialog.Panel>
      </Dialog>
    </Transition>
  );
}

// Modal window component from @headlessui/react, used for displaying forms in the backoffice. It provides a backdrop and handles the opening/closing animations. The content of the modal is passed as children, allowing for flexible use across different forms (e.g., adding/editing dishes). The onClose prop is called when the modal should be closed, such as when clicking outside the panel or pressing the escape key.
