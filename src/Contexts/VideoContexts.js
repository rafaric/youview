import { createContext, useEffect } from "react";
import { useState } from "react";

export const VideoContext = createContext();

export const VideoContextProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [categorias, setCategorias] = useState([]);

  /* const client = createClient(
    "BKotq8jbwwZRrBRaESVYOKWxfQ1qJxJ08Z8klQUfEQymmNGWxNAr1PxY"
  );
  const query = "Naturaleza"; */

  useEffect(() => {
    /* client.videos
      .search({ query, size: "small", per_page: 10 })
      .then((videos) => setVideos(videos.videos)); */

    fetch("https://youview-c7790-default-rtdb.firebaseio.com/data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setVideos(data);
      });
    fetch("https://youview-c7790-default-rtdb.firebaseio.com/categorias.json", {
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCategorias(data);
      });
  }, []);

  return (
    <VideoContext.Provider value={{ videos, categorias }}>
      {children}
    </VideoContext.Provider>
  );
};
