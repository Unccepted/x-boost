import { useEffect } from "react";
// import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

function ChangeLanguage() {
  const { i18n } = useTranslation();
  const handleLangChange = (evt) => {
    const lang = evt.target.value;
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    const userLang = navigator.language.slice(0, 2);
    i18n.changeLanguage(userLang);
  }, [i18n]);

  return (
    <>
      {/* <Helmet>
        <link rel="alternate" hreflang="en" href="http://localhost:3000/en" />
        <link rel="alternate" hreflang="uk" href="http://localhost:3000/uk" />
        <link rel="alternate" hreflang="ru" href="http://localhost:3000/ru" />
      </Helmet> */}
      <select
        onChange={handleLangChange}
        value={i18n.language}
        className=" text-green-500 ml-4 text-base list-none bg-white rounded-md border-2 border-green-500 shadow-green-500  p-2 font-medium  outline-none"
      >
        <option
          value="uk"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          UA
        </option>
        <option
          value="en"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          EN
        </option>
        <option
          value="ru"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          RU
        </option>
      </select>
    </>
  );
}

export default ChangeLanguage;
