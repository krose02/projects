import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Box from "./Box";
import { user_ids } from "../DataUtils";

const LastSongPlayed = props => {
  const [song, setSong] = useState("");

  useEffect(() => {
    async function fetchData(url) {
      await fetch(url, {
        method: "GET",
        headers: { Authorization: "Bearer " + params.access_token }
      })
        .then(response => {
          return response.json();
        })
        .then(playlists => {
          data.push(playlists.items);
          setData(data);
        });
    }
    urls.forEach(url => {
      fetchData(url);
    });
  });
};

LastSongPlayed.props = {};
LastSongPlayed.defaultProps = {};
