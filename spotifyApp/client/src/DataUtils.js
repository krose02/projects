/*
 * This files contains functions all
 * functions that will be used in App.js
 */
import { useState, useEffect } from "react";
const url = "https://api.spotify.com/v1/users/coolkid_casey/playlists";

/* Fetching data from my friend's playlists */
const useFetch = (/*url*/) => {
  // const [data, setData] = useState(null);

  // async function fetchData() {
  //   console.log("hi");
  //   const response = await fetch(
  //     "https://api.spotify.com/v1/users/coolkid_casey/playlists"
  //   );
  //   const json = await response.json();
  //   setData(json);
  //   console.log(json);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, ["https://api.spotify.com/v1/users/coolkid_casey/playlists"]);
  // return data;
  async function fetchData() {
    console.log("hi");
    const response = await fetch(
      "https://api.spotify.com/v1/users/coolkid_casey/playlists"
    );
    const json = await response.json();
    return json;
};

export default { useFetch };
