import Image from "./components/Image";
import Heading from "./components/Heading";
import FooterComponent from "./components/FooterComponent";
import Switch from "./components/Switch";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Bookmarks = () => {
  const [allFavorites, setAllFavorites] = useState();

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
        setAllFavorites(data.results);
      } catch (error) {
        console.error("Fejl ved hentning af favoritstatus:", error);
      }
    };
    checkFavoriteStatus(); // Kald funktionen til at hente favoritstatus
  }, []);

  console.log("favorites: " + allFavorites);

  return (
    <>
      <div className=" h-screen  dark:bg-black">
        <header className="gridContainer dark:bg-black">
          <Heading
            title="Bookmarks"
            size="20"
            as="h1"
            textAlign="center"
            align="center"
          />

          <Switch />
        </header>
        <main className="   dark:bg-black mt-12 ">
          <div className=" flex flex-col  justify-between pt-[30px]">
            {allFavorites &&
              allFavorites.map((favorite) => (
                <Link to={`/details/${favorite.id}`} key={favorite.id}>
                  <div className=" dark:bg-black p-4 rounded-md  ">
                    <div>
                    <Heading
                        style={{
                          paddingBottom: "10px",
                          fontSize: "18px",
                          color:"110E47",
                          paddingLeft:"25px",
                 
                        }}
                        title={favorite.title}
                        size="14"
                        as="h3"
                      />
                      <Image
                        className="flex justify-center  opject-cover"
                        width="150"
                    
                        shadow={true}
                        src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${favorite.poster_path}`}
                        alt="Cover Image"
                      />
                    </div>
                    <div>
                     
                    </div>
                  </div>
                  <hr style={{ color: "gray", width: "inherit" }} />
                </Link>
              ))}
          </div>
        </main>
        <footer className="gridContainer dark:bg-black">
          <nav>
            <FooterComponent />
          </nav>
        </footer>
      </div>
    </>
  );
};

export default Bookmarks;
