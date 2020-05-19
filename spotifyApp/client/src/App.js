import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import NowPlaying from "./Components/NowPlaying";

import Spotify from "spotify-web-api-js";
import { urls, params, CheckLogIn, GetPlaylists } from "./DataUtils";

const spotifyWebApi = new Spotify();

function App() {
  const loggedIn = CheckLogIn();
  const data = GetPlaylists();

  return (
    <div className="App">
      <a href="http://localhost:8888">
        {!loggedIn && <button> Log into spotify</button>}
      </a>
      {loggedIn && (
        <Header text="Let's See What Your Friends Are Listening To" />
      )}
      {loggedIn && <NowPlaying />}
    </div>
  );
}

export default App;
