import React, { useState } from "react";
import Logo from "../Logo";
import Button from "./Button";
import MenuItem from "./MenuItem";

export default function Hamburger() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  const menus = [
    {
      text: "Food",
      href: "#food",
    },
    {
      text: "Undaa",
      href: "#undaa",
    },
  ];

  return (
    <div className="flex justify-between p-6 bg-dark">
      <div className="">
        <Logo size={"68px"} />
      </div>
      <Button type="open" show={show} handleShow={handleShow} />

      {/* SideBar */}
      <div
        className={`h-screen w-4/5 bg-white fixed top-0 z-50 p-8 transition-all duration-300 ${
          show ? "-right-5" : "-right-full transition-all duration-300"
        }`}
      >
        <Logo size={"120px"} />
        <ul className="mt-10">
          {menus.map((i, idx) => {
            return <MenuItem item={i} />;
          })}
        </ul>

        <div className="my-10 text-sm text-center">
          &copy; 2022 Mobicom | All rights reserved.
        </div>
      </div>

      {/* Shadow */}
      {show ? (
        <>
          <div
            className="h-screen left-0 top-0 w-screen bg-black opacity-50 fixed z-10"
            onClick={handleShow}
          ></div>
        </>
      ) : null}
    </div>
  );
}
