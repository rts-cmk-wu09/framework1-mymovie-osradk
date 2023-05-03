import "./App.css";
import MoviePating from "./components/MoviePopular";
import MovieCard from "./templates/MovieCard";
import SeeMoreButton from "./components/SeeMoreButton";
import Heading from "./components/Heading";
import Switch from "./components/Switch";
import MovieItem from "./templates/MovieItem";
import FooterComponent from "./components/FooterComponent";

import DetailView from "./DetailView";
function App() {
  return (
    // <DetailView/>
    <div className="App">
       <header className="gridContainer">
        <Heading title="MyMovie" size="16" as="h1" />

        <Switch />
      </header>
      <main>
        <section className="HorizontalMovieListContainer">
          <div className="flexcontainer justify">
            <Heading title="Now Showing" size="16" as="h2"/>
            <SeeMoreButton title="Se More" margin="24" />
          </div>
          <div className="flexcontainer movieCardContainer">
            <MovieCard
              title="Spiderman: No Way
Home"
            />
            <MovieCard title="Eternals" />
            <MovieCard title="Sharon" />
            <MovieCard title="Eternals" />
            <MovieCard title="Eternals" />
            <MovieCard title="Eternals" />
          </div>
        </section>
        <section className="movieItemContainer">
          <div className="flexcontainer justify VerticalMovieListTitleLayout">
            <Heading title="Popular" size="16" as="h2" />
            <SeeMoreButton title="Se More" />
          </div>
          <div className="movieListContainerLayout">
            <div>
              <MovieItem title="Venom Let There Be Carnage" />
            </div>
            <div>
              <MovieItem title="The King’s Man" />
            </div>
            <div>
              <MovieItem title="Venom Let There Be Carnage" />
            </div>
            <div>
              <MovieItem title="Venom Let There Be Carnage" />
            </div>
            <div>
              <MovieItem title="Venom Let There Be Carnage" />
            </div>
            <div>
              <MovieItem title="Venom Let There Be Carnage" />
            </div>
            <div>
              <MovieItem title="Venom Let There Be Carnage" />
            </div>
          </div>
        </section>
      </main>
      <footer>
        <nav>
          <FooterComponent />
        </nav>
      </footer> 
      
    </div>
  );
}

export default App;
