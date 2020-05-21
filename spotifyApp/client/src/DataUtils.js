/*
 * This files contains functions all
 * functions that will be used in App.js
 */
import { useState, useEffect } from "react";
import Spotify from "spotify-web-api-js";
const spotifyWebApi = new Spotify();
const user_ids = [
  "coolkid_casey",
  "carolinegarrido",
  "127323676",
  "dx9apszk636qozmp7g25m6uog",
  "iloveeemusic",
  "nickifrankel"
];

var urls = [];

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

/* Checking to see if user is logged in */
function CheckLogIn() {
  /* Setting intitial log in state of user to false */
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (params.access_token) {
      /* library stores access token */
      spotifyWebApi.setAccessToken(params.access_token);
      setLoggedIn(true);
    }
  }, [loggedIn]);
  return loggedIn;
}

/* populating urls based on user_ids */
for (var i = 0; i < user_ids.length; i++) {
  urls.push(`https://api.spotify.com/v1/users/${user_ids[i]}/playlists`);
}

export { urls, params, CheckLogIn, GetPlaylists };
