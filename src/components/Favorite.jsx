import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { useState } from "react";

const Favorite = () => {
  const [favorite, setFavorite] = useState(false);

  const handleChange = () => {
    setFavorite(!favorite);
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
