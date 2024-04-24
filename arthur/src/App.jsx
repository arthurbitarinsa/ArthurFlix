import React from "react";
import "../css/App.css";
import Row from "../components/Row";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import requests from "../components/request";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="ArthurFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
    </div>
  );
}

export default App;
