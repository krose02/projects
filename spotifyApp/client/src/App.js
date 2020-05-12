import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import NowPlaying from "./Components/NowPlaying";

import Spotify from "spotify-web-api-js";
import useFetch from "./DataUtils";

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
  /* Checking if user is logged in using API */
  useEffect(() => {
    if (params.access_token) {
      /* library stores access token */
      spotifyWebApi.setAccessToken(params.access_token);
      setLoggedIn(true);
    }
  }, []);
  const data = useFetch.fetchData;
  console.log(data);

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
