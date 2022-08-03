import React from "react";
import { FaAlignJustify, FaWindowClose } from "react-icons/fa";

export default function Button(props) {
  const { handleShow, type } = props;
  return (
    <button
      className="flex justify-center items-center top-0 left-0"
      onClick={handleShow}
    >
      {type === "open" ? (
        <FaAlignJustify size={24} color="#fff" />
      ) : (
        <FaWindowClose size={24} />
      )}
    </button>
  );
}
