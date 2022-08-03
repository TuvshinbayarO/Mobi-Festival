import React from "react";

export default function MenuItem(props) {
  const { text, href } = props.item;
  return (
    <li className="uppercase my-5 border-b">
      <a href={href}>{text}</a>
    </li>
  );
}
