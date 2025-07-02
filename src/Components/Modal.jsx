// Modal.jsx
import React, {
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import { HiXMark } from "react-icons/hi2";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ open, close, openName }}>
      {children}
    </ModalContext.Provider>
  );
}

const Open = ({ children, opens: opensWindowName }) => {
  const { open } = useContext(ModalContext);

  return cloneElement(children, {
    onClick: () => open(opensWindowName),
  });
};

const Window = ({ children, name }) => {
  const { close, openName } = useContext(ModalContext);

  if (name !== openName) return null;

  return (
    <div
      onClick={() => close()}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
    >
      <div
        className="relative rounded-2xl bg-gray-300/85 p-5 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {cloneElement(children, { close })}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={close}
        >
          <HiXMark className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
