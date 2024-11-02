import React from "react";
import GptSearchForm from "../components/gptSearch/GptSearchForm";
import { BG_LOGO } from "../utils/constants";
import GptSearchContainer from "../components/gptSearch/GptSearchContainer";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BG_LOGO} alt="bg-img" />
      </div>
      <GptSearchForm />
      <GptSearchContainer />
    </div>
  );
};

export default GptSearch;
