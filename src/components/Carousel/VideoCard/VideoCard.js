import React from "react";

const VideoCard = ({ dato }) => {
  return (
    <div key={dato.id}>
      <iframe
        width="100%"
        height="315"
        src={dato.url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoCard;
