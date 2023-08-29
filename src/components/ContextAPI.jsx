import React, { createContext, useRef, useState } from "react";
export const ContextApp = createContext();

const ContextAppProvider = (props) => {
  // State for scrolling page
  const [scrolled, setScrolled] = useState(false);
  // Navigation menu state
  const [navmenu, setNavmenu] = useState(false);

  const notifisystem = useRef();
  //State for popup component
  const [showModal, setShowModal] = useState(false);
  return (
    <ContextApp.Provider
      value={{
        scrolled,
        setScrolled,
        notifisystem,
        showModal,
        setShowModal,
        navmenu,
        setNavmenu,
      }}
    >
      {props.children}
    </ContextApp.Provider>
  );
};
export default ContextAppProvider;
