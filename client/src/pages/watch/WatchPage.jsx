import { ArrowBack } from "@material-ui/icons";
import React from "react";
import "./watchPage.scss";
import ReactPlayer from "react-player"

export const WatchPage = () => {
  return (
    <div className="watchPage">
      <div className="back">
        <ArrowBack />
        Home
      </div>
      <ReactPlayer
        className="video"
        controls
        autoPlay
        progress
        width="100%"
        height="600px"
        object-fit="cover"
        url="https://vimeo.com/546472954"
      />
    </div>
  );
};


