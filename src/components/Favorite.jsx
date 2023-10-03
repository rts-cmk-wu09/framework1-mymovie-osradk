import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Favorite = () => {
  const [favorite, setFavorite] = useState(false);
  const { id } = useParams();

  console.log("movie id: " + { id }.id);

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
