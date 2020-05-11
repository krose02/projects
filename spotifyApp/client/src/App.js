import React, { Component, useState, useEffect } from "react";
import "./App.css";
import Spotify from "spotify-web-api-js";

import Header from "./Components/Header";
import Box from "./Components/Box";
import NowPlaying from "./Components/NowPlaying";

const spotifyWebApi = new Spotify();

function App() {
  /* Setting intitial log in state of user to false */
  const [loggedIn, setLoggedIn] = useState(false);
  /* hash function that will return the access_token and refresh_token */
  const getHashParams = () => {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  };
  const params = getHashParams();
  useEffect(() => {
    if (params.access_token) {
      /* library stores access token */
      spotifyWebApi.setAccessToken(params.access_token);
      setLoggedIn(true);
    }
  }, [loggedIn]);

  return (
    <div className="App">
      <a href="http://localhost:8888">
        {!loggedIn && <button> Log into spotify</button>}
      </a>
      {<Header text="Let's See What Your Friends Are Listening To" />}
      {loggedIn && <NowPlaying />}
    </div>
  );
}

export default App;
