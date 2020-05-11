/*
 * This files contains functions all
 * functions that will be used in App.js
 */

import Spotify from "spotify-web-api-js";
import React, { useState, useEffect } from "react";

/* insance of spotify web api */
export const spotifyWebApi = new Spotify();

/* hash function that will return the access_token and refresh_token */
export function getHashParams() {
  var hashParams = {};
  var e,
    r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
}
// export function getNowPlaying() {
//   const [nowPlaying, setNowPlaying] = useState(0);
//   useEffect(async() => {
//     const response = spotifyWebApi.getMyCurrentPlaybackState().then(response => {
//       (nowPlaying.name = response.item.name),
//         (nowPlaying.imageUrl = response.item.album.images[0].url);
//     });
//   });
// }
/* Gets the song that the user is currently playing */
// export function getNowPlaying() {
//     spotifyWebApi.getMyCurrentPlaybackState().then(response => {
//       this.setState({
//         nowPlaying: {
//           name: response.item.name,
//           imageUrl: response.item.album.images[0].url
//         }
//       });
//     });
// }
