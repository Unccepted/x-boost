import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";
import CookieConsent, {
  getCookieConsentValue,
  Cookies,
} from "react-cookie-consent";
import CookieIcon from "@mui/icons-material/Cookie";

import { ContextApp } from "../../components/ContextAPI";

export default function GoogleAnalyticsCookies() {
  const location = useLocation();
  const [showCookiePopup, setShowCookiePopup] = useState(true);
  const { t } = useContext(ContextApp);
  const handleAcceptCookie = () => {
    ReactGA.initialize("G-W3VHYXV94H");
    ReactGA.pageview(window.location.pathname + window.location.search);
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l !== "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", "GTM-KRVBXMLJ");
    setShowCookiePopup(false);
  };

  const handleDeclineCookie = () => {
    Cookies.remove("_ga");
    Cookies.remove("_gat");
    Cookies.remove("_gid");
    setShowCookiePopup(false);
  };

  useEffect(() => {
    const isConsent = getCookieConsentValue();
    if (isConsent === "true") {
      handleAcceptCookie();
    } else {
      setTimeout(() => {
        if (showCookiePopup) {
          handleAcceptCookie();
        }
      }, 10000); // 10 seconds
    }

    const currentPath = location.pathname + location.search;
    ReactGA.pageview(currentPath);
  }, [location]);

  return (
    <CookieConsent
      enableDeclineButton
      onAccept={handleAcceptCookie}
      onDecline={handleDeclineCookie}
      style={{
        background: "#fff",
        alignItems: "center",
        borderTop: "1px solid  #111827",
        color: "#111827",
      }}
      buttonStyle={{
        background: "#16a34a",
        color: "#fff",
        fontSize: "1rem",
        textTransform: "uppercase",
        borderRadius: "0.375rem",
      }}
      declineButtonStyle={{
        fontSize: "1rem",
        textTransform: "uppercase",
        borderRadius: "0.375rem",
      }}
      buttonText={t("cookies.ok")}
      declineButtonText={t("cookies.no")}
    >
      <h3 className={"uppercase font-bold flex items-center"}>
        {t("cookies.header")}
        <CookieIcon />
      </h3>
      {t("cookies.text")}
    </CookieConsent>
  );
}
