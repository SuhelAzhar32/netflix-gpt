import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/slices/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);

  const getTopRatedMovies = async () => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        API_OPTIONS
      );
      const data = await res.json();
      dispatch(addTopRatedMovies(data.results));
    } catch (error) {
      throw new Error(error);
    }
  };
};

export default useTopRatedMovies;
