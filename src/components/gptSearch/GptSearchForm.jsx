import React from "react";
import lang from "../../utils/language/languageConstants";
import { useSelector } from "react-redux";

const GptSearchForm = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 grid grid-cols-12 rounded-lg bg-black">
        <input
          className="p-4 m-4 col-span-9 rounded-md"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="py-2 px-4 m-4 col-span-3 bg-red-500 text-white font-bold rounded-lg">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchForm;
