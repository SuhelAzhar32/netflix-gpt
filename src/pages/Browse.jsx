import React from "react";
import Header from "../components/Header";
import useFetchMovie from "../Hooks/useFetchMovie";
import usePopularMovies from "../Hooks/usePopularMovies";
import MainVideoPlayContainer from "../components/browsePage/mainContainer/MainVideoPlayConatiner";
import MovieListConainer from "../components/browsePage/secondryContainer/MoviesListContainer";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useFetchMovie();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();

  const isGptSeacrch = useSelector((store) => store.gpt.gptSeacrchView);
  return (
    <>
      <Header />
      {isGptSeacrch ? (
        <GptSearch />
      ) : (
        <>
          <MainVideoPlayContainer />
          <MovieListConainer />
        </>
      )}

      {/* browse page
      1. MainContainer
         1. video playing bg
         2. video title
      2. SecondryContainer
        1. MovieList *n
           1. MovieCard * n   
      */}
    </>
  );
};

export default Browse;
