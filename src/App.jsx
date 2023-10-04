import "./App.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { ScrollRestoration } from "react-router-dom";

function App() {
  const [darkmode, setIsDarkmode] = useState(false);
  return (
    <>
     
      <div className= {"app " +(darkmode && "dark" )} >
      <div className="dark:bg-black">
        <Outlet context={[darkmode, setIsDarkmode]} />
        <ScrollRestoration />
        </div>
        </div>
   
    </>
  );
}

export default App;
