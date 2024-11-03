import React, { useRef } from "react";
import lang from "../../utils/language/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../../utils/openai";
import { API_OPTIONS } from "../../utils/constants";
import { addGptMovies } from "../../utils/slices/gptSlice";

const GptSearchForm = () => {
  const langKey = useSelector((store) => store.config.lang);
  const serachText = useRef(null);
  const dispatch = useDispatch();

  const fetchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const movieData = await data.json();
    return movieData.results;
  };

  const handleGptSearchClick = async (e) => {
    e.preventDefault();
    const searchQuery = serachText.current.value.trim();
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query :" +
      searchQuery +
      ". only give me names of 5 movies, comma seperated. like the example result given ahead. Example Result: Gadar, Sholay, Don,  PK, Dangal.";

    // make an api call to gpt api and get movies results

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    const gptMovies = gptResults.choices?.[0].message?.content.split(","); // convert into an array
    // for each movie try to find tmdb api
    const data = gptMovies.map((movie) => fetchMovieTMDB(movie.trim())); // return array of promises
    const gptMovieResults = await Promise.all(data);
    dispatch(
      addGptMovies({ movieNames: gptMovies, movieResult: gptMovieResults })
    );
  };

  // search movie in TMDB

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 grid grid-cols-12 rounded-lg bg-black">
        <input
          className="p-4 m-4 col-span-9 rounded-md"
          type="text"
          ref={serachText}
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          onClick={handleGptSearchClick}
          className="py-2 px-4 m-4 col-span-3 bg-red-500 text-white font-bold rounded-lg"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchForm;
