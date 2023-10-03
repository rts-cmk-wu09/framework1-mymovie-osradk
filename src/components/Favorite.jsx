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
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWYyZTY4YTQwOTU4ZGZiM2E2YzU0N2FiMjhlZTgzZCIsInN1YiI6IjY0NTg5YjRhMWI3MGFlMDBmZDZhYmJkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-j_u_YEyEImA7LWssb-OnID5OVClpbSfpN4pVehX0Zg",
            },
          }
        );

        const data = await response.json();
        const movieIdFromUrl = parseInt(id, 10);

        const isMovieInFavorite = data.results.some(
          (movie) => movie.id === movieIdFromUrl
        );

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
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWYyZTY4YTQwOTU4ZGZiM2E2YzU0N2FiMjhlZTgzZCIsInN1YiI6IjY0NTg5YjRhMWI3MGFlMDBmZDZhYmJkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-j_u_YEyEImA7LWssb-OnID5OVClpbSfpN4pVehX0Zg",
      },
      body: JSON.stringify({
        media_type: "movie",
        media_id: { id }.id,
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
