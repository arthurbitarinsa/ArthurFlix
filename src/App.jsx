import React from "react";
import "../css/App.css";
import Row from "../components/Row";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import requests from "../components/request";
import Login from "../components/Login";
import Signup from "../components/Signup";

function App() {
  return (  
    <div>
      <div className="app">
      <Nav />
      <Banner />
      <Row
        title="ArthurFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
            <Row
        title="Top rated"
        fetchUrl={requests.fetchTopRated}
        isLargeRow
      />
            <Row
        title="Trending"
        fetchUrl={requests.fetchTrending}
        isLargeRow
      />
    </div>  
    </div> 
      
  );
  
}

export default App;
