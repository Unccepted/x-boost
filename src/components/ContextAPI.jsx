import React, { createContext, useRef, useState } from "react";

export const ContextApp = createContext();

const ContextAppProvider = (props) => {
  const [scrolled, setScrolled] = useState(false);
  const [navmenu, setNavmenu] = useState(false);
  const notifisystem = useRef();
  const [keyword, setKeyword] = useState("");

  return (
    <ContextApp.Provider
      value={{
        scrolled,
        setScrolled,
        notifisystem,
        keyword,
        setKeyword,
        navmenu,
        setNavmenu,
      }}
    >
      {props.children}
    </ContextApp.Provider>
  );
};
export default ContextAppProvider;
