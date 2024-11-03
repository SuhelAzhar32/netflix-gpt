import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../browsePage/secondryContainer/MovieList";

const GptSearchContainer = () => {
  const { gptMoviesList, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {movieNames.map((movieName, i) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={gptMoviesList[i]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptSearchContainer;
