import "./App.css";
import CategoryLabel from "../components/CategoryLabel";
import { FaRegBookmark } from "react-icons/fa";
import SeeMoreButton from "./components/SeeMoreButton";
import Heading from "./components/Heading";
import Switch from "./components/Switch";
import MovieRating from "../components/MovieRating";

const StyledBookmark = styled(FaRegBookmark)`
  font-size: 24px;
  color: #bcbccd;
`;

function DetailView() {
  return (
    <div className="DetailView">
      <header className="gridContainer">
        <Image width="768px" height="300" />
        <Heading title="MyMovie" size="16" as="h1" />
        <Switch />
      </header>
      <main>
        <section>
          <div className="flexcontainer justify">
            <Heading title="Now Showing" size="16" as="h2" />
            <StyledBookmark />
          </div>
          <div>
            <MovieRating />
          </div>
          <div>
            <CategoryLabel/>
          </div>

          
        </section>
    
      </main>
    
    </div>
  );
}

export default DetailView;
