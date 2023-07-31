import React, { useState } from "react";

const Switcher = ({ onChange }) => {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onChange(!isChecked);
  };

  return (
    <>
      <label className="themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-white p-1 border">
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span
          className={`flex items-center space-x-[6px] rounded py-2 px-8 text-sm font-medium  ${
            !isChecked ? "text-primary bg-[#f4f7ff]" : "text-body-color"
          }`}
        >
          Одноразовая услуга
        </span>
        <span
          className={`flex items-center space-x-[6px] rounded py-2 px-8 text-sm font-medium ${
            isChecked ? "text-white-fade bg-green-600 " : "text-body-color"
          }`}
        >
          Подписка
        </span>
      </label>
    </>
  );
};

export default Switcher;
