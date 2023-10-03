import Image from "./components/Image";
import Heading from "./components/Heading";
import MovieRating from "./components/MovieRating";
import billede from "./assets/moviecover.png";
import FooterComponent from "./components/FooterComponent";
import Switch from "./components/Switch";
import { Link } from "react-router-dom";




const Bookmarks = () => {
  return (
    <div className=" h-screen  dark:bg-black">
      <header className="gridContainer dark:bg-black">
        <Heading
          title="Bookmarks"
          size="16"
          as="h1"
          textAlign="center"
          align="center"
        />

        <Switch />
      </header>
      <main className="   dark:bg-black mt-12 ">
        <div className=" flex flex-col  justify-between gap-4">
        {/* <Link to={`details/${data.id}`} > */}
          <div className=" dark:bg-black p-4 rounded-md ">
            <figure>
              <Image
                width="143"
                shadow={true}
                src={billede}
                alt="Cover Image"
              />
            </figure>
            <Heading
         style={{paddingTop:"6px", fontSize:"18px"}}
              title="movie title"
              size="14"
              as="h3"
              paddingLeft="0"
              margin="0"
            />
         
          </div>
          {/* </Link> */}
        {/* <Link to={`details/${data.id}`} > */}
        <div className=" dark:bg-black p-4 rounded-md ">
            <figure>
              <Image
                width="143"
                shadow={true}
                src={billede}
                alt="Cover Image"
              />
            </figure>
            <Heading
         style={{paddingTop:"6px", fontSize:"18px"}}
              title="movie title"
              size="14"
              as="h3"
              paddingLeft="0"
              margin="0"
            />
         
          </div>
          {/* </Link> */}
        {/* <Link to={`details/${data.id}`} > */}
        <div className=" dark:bg-black p-4 rounded-md ">
            <figure>
              <Image
                width="143"
                shadow={true}
                src={billede}
                alt="Cover Image"
              />
            </figure>
            <Heading
         style={{paddingTop:"6px", fontSize:"18px"}}
              title="movie title"
              size="14"
              as="h3"
              paddingLeft="0"
              margin="0"
            />
         
          </div>
          {/* </Link> */}
       
       
        </div>
      </main>
     <footer className="gridContainer dark:bg-black">
        <nav>
          <FooterComponent />
        </nav>
      </footer>
    </div>
  );
};

export default Bookmarks;
