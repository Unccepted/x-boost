import React, { createContext, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
export const ContextApp = createContext();

const ContextAppProvider = (props) => {
  // State for scrolling page
  const [scrolled, setScrolled] = useState(false);
  // Navigation menu state
  const [navmenu, setNavmenu] = useState(false);

  const notifisystem = useRef();
  //State for popup component
  const [showModal, setShowModal] = useState(false);

  const { t, i18n } = useTranslation();
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
        t,
      }}
    >
      {props.children}
    </ContextApp.Provider>
  );
};
export default ContextAppProvider;
