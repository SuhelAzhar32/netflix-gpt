import React from "react";
import GptSearchForm from "../components/gptSearch/GptSearchForm";
import { BG_LOGO } from "../utils/constants";
import GptSearchContainer from "../components/gptSearch/GptSearchContainer";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen object-cover" src={BG_LOGO} alt="bg-img" />
      </div>
      <div className="">
        <GptSearchForm />
        <GptSearchContainer />
      </div>
    </>
  );
};

export default GptSearch;
