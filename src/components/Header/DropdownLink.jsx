import React, { useContext } from "react";
import { HashLink as Link } from "react-router-hash-link";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { ContextApp } from "../ContextAPI";

export function DropdownLink(props, { onClick }) {
  const { navmenu, setNavmenu } = useContext(ContextApp);

  return (
    <li
      className="border-b grid grid-flow-col auto-cols-2 items-center  text-gray-500 hover:text-green-500 active:text-green-600"
      onClick={() => {
        setNavmenu(!navmenu);
      }}
    >
      <Link
        smooth
        className="text-lg sm:text-2xl   py-4  font-normal flex justify-between"
        to={props.link}
      >
        {props.text}
        <span className="font-extrabold">
          <ChevronRightRoundedIcon fontSize="medium" />
        </span>
      </Link>
    </li>
  );
}
