import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

const Video = styled.div`
  position: relative;
  width: 100%;
  :hover {
    transform: scale(1.08);
    transition: 0.5s;
  }
`;

const VideoCard = ({ dato, image }) => {
  return (
    <Video>
      {/* <iframe
        position="absolute"
        width="100%"
        height="150%"
        src={dato.url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe> */}
      {/* <video width="100%" src={dato} controls muted></video> */}
      <ReactPlayer width="100%" url={dato} light={image} />
    </Video>
  );
};

export default VideoCard;
