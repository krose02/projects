import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getHashParams, spotifyWebApi } from "../DataUtils";
import Button from "./Button";
import Header from "./Header";

const LogIn = props => {
  const params = getHashParams();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (params.access_token) {
      /* library stores access token */
      spotifyWebApi.setAccessToken(params.access_token);
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [params.access_token]);

  if (loggedIn) {
    return (
      <div>
        <Header text="Let's See What Your Friends Are Listening To" />
        <Button text="Check Now" />
      </div>
    );
  }
  return (
    <div>
      <a href="http://localhost:8888">
        <button> Log into spotify</button>
      </a>
    </div>
  );
};

LogIn.propTypes = {};
LogIn.defaultProps = {};

export default LogIn;
