import "./App.css";
import MovieCard from "./templates/MovieCard";
import SeeMoreButton from "./components/SeeMoreButton";
import Heading from "./components/Heading";
import Switch from "./components/Switch";

function App() {
  return (
    <div className="App">
      <header className="gridContainer">
     
      <h1
       style={{
        fontSize:"16px",
         justifySelf:"center",
          gridColumnStart:2,
          }}
          >
          MyMovie
          </h1>
      <Switch/>
      </header>
      <main>
        <section>
          <div className="flexcontainer justify">
        <h2>Now showing</h2>
            <SeeMoreButton />
          </div>
          <div className="flexcontainer movieCardContainer">
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </div>
        </section>
        <section></section>
      </main>
      <footer>
        <nav></nav>
      </footer>
    </div>
  );
}

export default App;
