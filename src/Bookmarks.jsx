import Image from "./components/Image";
// const LazyImage = lazy(() => import("./components/Image"));
import Heading from "./components/Heading";
import FooterComponent from "./components/FooterComponent";
import Switch from "./components/Switch";
import {  useLoaderData, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CategoryLabel from "./components/CategoryLabel";


const Bookmarks = () => {
  const [allFavorites, setAllFavorites] = useState();
  const MovieData = useLoaderData();
  console.log( " asoooooo" ,  MovieData)


  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/genre/movie/list?api_key=33b7f9cafa5f31863b6e09d72dbe99ef"
        ); 
        const data = await response.json();
        setGenres(data.genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, []);

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
        setAllFavorites(data.results);
      } catch (error) {
        console.error("Fejl ved hentning af favoritstatus:", error);
      }
    };
    checkFavoriteStatus(); // Kald funktionen til at hente favoritstatus
  }, []);

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
        <main className="   dark:bg-black mt-12  mb-5" >
          <div className=" flex flex-col  justify-between pt-[30px]">
            {allFavorites &&
              allFavorites.map((favorite) => (
                <Link to={`/details/${favorite.id}`} key={favorite.id}>
                  <div className=" dark:bg-black p-4 rounded-md  ">
                    <div>
                
                      <Image
                        className="flex justify-center  opject-cover"
                        width="150"
                    
                        shadow={true}
                        src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${favorite.poster_path}`}
                        alt="Cover Image"
                      />
                    </div>
                    <div>
                    <Heading
                        style={{
                          paddingTop: "10px",
                          fontSize: "18px",
                          color:"110E47",
                          paddingLeft:"18px",
                 
                        }}
                        title={favorite.title}
                        size="14"
                        as="h3"
                      />
                    <div  className="containerLabel">
                    {favorite.genre_ids.map((genreId) => (
                      <CategoryLabel
                        key={genreId}
                        title={getGenreNameById(genreId, genres)}
                      />
                    ))}
        </div>
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
function getGenreNameById(genreId, genres) {
  const genre = genres.find((genre) => genre.id === genreId);
  return genre ? genre.name : "Ukendt genre";
 }



export default Bookmarks;
