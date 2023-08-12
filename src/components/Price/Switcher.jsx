import React, { useState } from "react";

const Switcher = ({ onChange }) => {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onChange(!isChecked);
  };

  return (
    <>
      <label className="w-full shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-white p-1 border">
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span
          className={`min-[425px]:w-1/2 flex items-center justify-center space-x-[6px] rounded py-2 px-4 lg:px-8 text-sm font-medium  ${
            !isChecked ? "text-primary bg-[#f4f7ff]" : "text-"
          }`}
        >
          План на месяц
        </span>
        <span
          className={`min-[425px]:w-1/2 flex items-center justify-center space-x-[6px] rounded py-2 px-4 lg:px-8 text-sm font-medium ${
            isChecked ? "text-white-fade bg-green-600 " : "text-gray-900"
          }`}
        >
          От трех месяцев
        </span>
      </label>
    </>
  );
};

export default Switcher;
