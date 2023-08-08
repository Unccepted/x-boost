import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export function Links(props) {
  return (
    <li className="mr-12">
      <Link
        smooth
        className="text-xl uppercase text-gray-500 hover:text-green-500 active:text-green-600  scroll-smooth"
        to={props.url}
      >
        {props.text}
      </Link>
    </li>
  );
}
