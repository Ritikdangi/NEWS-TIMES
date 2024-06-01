import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css"
import Home from "./pages/Home";
import Headline from "./pages/Headline";
import Navbar from "./Components/Navbar";
import { Route,Routes } from "react-router";
import Footer from "./Components/Footer";
import AppContextProvider from "./Context/AppContext";
import { AppContext } from "./Context/AppContext";
import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router";
function App() {

  const { fetchArticlePosts } = useContext(AppContext);
  const [searchParams,setSearchParams] = useSearchParams();
  const location = useLocation();

  return (
    <div className="">
      <div>
        <Navbar/>
      </div>
      <div>
      <Routes>
    <Route path="/" element={ <Home/>}/>
    <Route path="/top-headlines" element={ <Headline/> } />
     </Routes>
      </div>
     <div> 
      <Footer/>
     </div>
    </div>
  );
}

export default App;
