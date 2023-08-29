import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function ChangeLanguage() {
  const { t, i18n } = useTranslation();

  const handleLangChange = (evt) => {
    const lang = evt.target.value;
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    const userLang = navigator.language.slice(0, 2);
    i18n.changeLanguage(userLang);
  }, []);

  /* <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700" id="language-dropdown-menu">
          <ul class="py-2 font-medium" role="none">
            <li>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                <div class="inline-flex items-center">
                  English (US)
                </div>
              </a>
            </li> */

  return (
    <select onChange={handleLangChange} value={i18n.language}>
      <option value="en">EN</option>
      <option value="uk">UK</option>
      <option value="ru">RU</option>
    </select>
  );
}

export default ChangeLanguage;
