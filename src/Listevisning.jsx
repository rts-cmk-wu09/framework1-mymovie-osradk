import "./App.css";
import NowShowing from "./templates/NowShowing";
import SeeMoreButton from "./components/SeeMoreButton";
import Heading from "./components/Heading";
import Switch from "./components/Switch";
import MovieItem from "./templates/MovieItem";
import FooterComponent from "./components/FooterComponent";
import axios from "axios";
// import { useState } from "react";

const Listevisning = () => {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // // Funktion til at skifte dark mode-tilstand
  // const handleDarkModeChange = (newDarkModeValue) => {
  //   setIsDarkMode(newDarkModeValue);
  // };

  return (
    <>

      <header  className="gridContainer dark:bg-black">
        <Heading title="MyMovie" size="16" as="h1" textAlign="center" align="center" />
      
        <Switch  />
      </header>
      <main>
        <section className="HorizontalMovieListContainer">
          <div className="flexcontainer justify">
            <Heading title="Now Showing" size="16" as="h2" />
            <SeeMoreButton title="Se More" margin="24" />
          </div>
          <div className="flexcontainer movieCardContainer">
            <NowShowing />
          </div>
        </section>
        <section className="movieItemContainer">
          <div className="flexcontainer justify VerticalMovieListTitleLayout  dark:bg-black">
            <Heading title="Popular" size="16" as="h2" />
            <SeeMoreButton title="Se More" />
          </div>
          <div className="movieListContainerLayout">
            <div>
              <MovieItem title="Venom Let There Be Carnage" />
            </div>
          </div>
        </section>
      </main>
      <footer className="gridContainer dark:bg-black">
        <nav>
          <FooterComponent />
        </nav>
      </footer>
      
    </>
  );
};

export const listViewData = async () => {
  return await Promise.allSettled([
    await axios(
      "https://api.themoviedb.org/3/movie/now_playing/?api_key=a1f2e68a40958dfb3a6c547ab28ee83d"
    ),
    await axios(
      "https://api.themoviedb.org/3/movie/popular/?api_key=a1f2e68a40958dfb3a6c547ab28ee83d"
    ),
    await axios("https://api.themoviedb.org/3/genre/movie/list?api_key=a1f2e68a40958dfb3a6c547ab28ee83d"),
  ]).then((values) => {
    console.log("Value: ", values)
  
    return {
      nowShowing: values[0].value.data.results,
      popular: values[1].value.data.results,
      genre:values[2].value.data.results,
    };


  });
};

export default Listevisning;
