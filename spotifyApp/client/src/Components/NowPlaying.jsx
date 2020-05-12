import React, { useState, useEffect } from "react";
// import {
//   Card,
//   CardTitle,
//   CardImg,
//   CardBody,
//   CardHeader,
//   Button,
//   CardText,
//   CardSubtitle
// } from "reactstrap";
import PropTypes from "prop-types";
import Spotify from "spotify-web-api-js";
const spotifyWebApi = new Spotify();

const NowPlaying = props => {
  const [nowPlaying, setNowPlaying] = useState({});
  const [loading, setLoading] = useState(false);

  /* Fetching data from spotify API */
  useEffect(() => {
    spotifyWebApi.getMyCurrentPlaybackState().then(response => {
      setNowPlaying({
        song: response.item.name,
        src: response.item.album.images[0].url
      });
    });
  }, [nowPlaying]);

  return (
    <div>
      <div>
        <button onClick={() => setLoading(true)}>Check Now Playing</button>
        {loading && <div> {nowPlaying.song} </div>}
        {loading && (
          <div>
            <img src={nowPlaying.src} style={{ width: 100 }} />
          </div>
        )}
      </div>
    </div>
  );
};
NowPlaying.propTypes = {
  background_color: PropTypes.string
};
NowPlaying.defaultProps = {
  background_color: ""
};

export default NowPlaying;
