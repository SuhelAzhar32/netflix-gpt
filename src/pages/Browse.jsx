import React from "react";
import Header from "../components/Header";
import useFetchMovie from "../Hooks/useFetchMovie";
import MainVideoPlayContainer from "../components/browsePage/mainContainer/MainVideoPlayConatiner";
import MovieListConainer from "../components/browsePage/secondryContainer/MoviesListContainer";

const Browse = () => {
  useFetchMovie();
  return (
    <>
      <Header />
      <MainVideoPlayContainer />
      <MovieListConainer />
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
