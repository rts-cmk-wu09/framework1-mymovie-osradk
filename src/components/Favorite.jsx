import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Favorite = () => {
  const [favorite, setFavorite] = useState(false);
  const { id } = useParams();
  const movieId = { id }.id;

  console.log("movie id: " + movieId);

  useEffect(() => {
    // Funktion til at tjekke om filmen er favorit
    const checkFavoriteStatus = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/account/19377438/favorite/movies`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzM2I3ZjljYWZhNWYzMTg2M2I2ZTA5ZDcyZGJlOTllZiIsInN1YiI6IjY1NDJlMjYzMWFjMjkyMDBjNDk0ZDgzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g-K0WMqjG4Cc6HrnwHnV_8igigBVBlHBOle6dW_8j3o",
            },
          }
        );

        const data = await response.json();
        const movieIdFromUrl = parseInt(id, 10);

        // const isMovieInFavorite = data.results.some(
        //   (movie) => movie.id === movieIdFromUrl
        // );
        const isMovieInFavorite = data.results
          .map((movie) => movie.id)
          .includes(movieIdFromUrl);

        setFavorite(isMovieInFavorite); // Indstil favoritstatus baseret på API-svaret
      } catch (error) {
        console.error("Fejl ved hentning af favoritstatus:", error);
      }
    };
    checkFavoriteStatus(); // Kald funktionen til at hente favoritstatus
  }, [id]);

  const handleChange = () => {
    setFavorite(!favorite);

    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzM2I3ZjljYWZhNWYzMTg2M2I2ZTA5ZDcyZGJlOTllZiIsInN1YiI6IjY1NDJlMjYzMWFjMjkyMDBjNDk0ZDgzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g-K0WMqjG4Cc6HrnwHnV_8igigBVBlHBOle6dW_8j3o",
      },
      body: JSON.stringify({
        media_type: "movie",
        media_id: movieId,
        favorite: !favorite,
      }),
    };

    fetch("https://api.themoviedb.org/3/account/19377438/favorite", options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };
  return (
    <div>
      {favorite ? (
        <FaBookmark className="text-red-600" onClick={handleChange} />
      ) : (
        <FaRegBookmark className="text-red-600" onClick={handleChange} />
      )}
    </div>
  );
};

export default Favorite;
