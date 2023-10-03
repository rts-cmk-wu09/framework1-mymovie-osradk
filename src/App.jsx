import "./App.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";


function App() {
  const [darkmode, setIsDarkmode] = useState(false);
  return (
    <>
     
      <div className= {"app " +(darkmode && "dark" )} >
      <div className="dark:bg-black">
        <Outlet context={[darkmode, setIsDarkmode]} />
        </div>
        </div>
   
    </>
  );
}

export default App;
