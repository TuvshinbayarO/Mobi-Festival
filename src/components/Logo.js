import React from "react";
import LogoImg from "../Assets/logo.png";

export default function Logo(props) {
  const { size } = props;

  console.log("fuck me", props);

  return (
    <div className="flex justify-center">
      <img
        src={LogoImg}
        class="attachment-full size-full"
        alt=""
        loading="lazy"
        width={`${size}`}
      />
    </div>
  );
}
