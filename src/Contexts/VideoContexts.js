import { createContext, useEffect } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const VideoContext = createContext();

export const VideoContextProvider = ({ children }) => {
  const datos = {
    data: [
      {
        titulo:
          "7 cosas que debes saber para ser programador frontend este 2023",
        categoria: "Front-End",
        limagen: "https://img.youtube.com/vi/q0UgClC8md4/hqdefault.jpg",
        lvideo: "https://www.youtube.com/watch?v=q0UgClC8md4",
        descripcion:
          "Hola Nicolas, en estos días he tenido una charla profunda con mi yo interior y a mis 63 años ya estoy pensando en que voy hacer al pensionarme, pero nooooo me voy a quedar quieto eso nunca. Tengo un hijo Ing. Electrónico y hoy hablando de mi charla interna hemos decidido que me convertiré en PROGRAMADOR frontend, para e",
        usuario: "rafaric",
        id: 2,
      },
      {
        titulo: "DirectvGo",
        categoria: "Back-End",
        limagen: "https://img.youtube.com/vi/Fzv-rgwcFKk/hqdefault.jpg",
        lvideo: "https://www.youtube.com/watch?v=Fzv-rgwcFKk",
        descripcion:
          "Se trabaja con distintos merenderos de la ciudad, no sólo ayudando en la proporción de alimentos sino también generando talleres que se conviertan en espacios recreativos, educativos y de acompañamiento espiritual para las infancias.  Finalidad: de que por intermedio de ellos, se pueda incluir al grupo familiar al proyecto.",
        usuario: "rafaric",
        id: 3,
      },
      {
        titulo:
          "From Design to Code // HTML & CSS from scratch // Frontend Mentor",
        limagen: "https://img.youtube.com/vi/KqFAs5d3Yl8/hqdefault.jpg",
        lvideo: "https://www.youtube.com/watch?v=KqFAs5d3Yl8",
        descripcion:
          "Taking on a Frontend Mentor challenge to explore how I go from design to code, including breaking down some of my thought processes along the way. This project is a fun exploration of flexbox, grid, custom properties, and variable fonts, to name a few things.",
        usuario: "rafaric",
        id: 4,
      },
      {
        titulo: "Proyecto Frontend HTML, CSS y JavaScript desde cero",
        limagen: "https://img.youtube.com/vi/O7i2M6FNcj8/hqdefault.jpg",
        lvideo: "https://www.youtube.com/watch?v=O7i2M6FNcj8",
        descripcion:
          'Aprovecha el DESCUENTO de Hostinger: https://hostinger.com/juanwmedia 👉 Usa el código "JUANWMEDIA" para un descuento EXTRA.  👉 Código finalizado: https://replit.com/@Wmedia/Frontend-P...  Si estás estudiando desarrollo Web Frontend nada mejor para practicar HTML, CSS y JavaScript que programar desde cero un pequeño proyecto. Vamos allá.',
        usuario: "rafaric",
        categoria: "Front-End",
        id: 6,
      },
      {
        titulo:
          "FRONT-END EN 5 PASOS - ¿Que aprender y por donde empezar para ser Desarrollador Web Frontend? *2023*",
        limagen: "https://img.youtube.com/vi/SDMpGO1_qU0/hqdefault.jpg",
        lvideo: "https://www.youtube.com/watch?v=SDMpGO1_qU0",
        descripcion:
          "prende CSS, Responsive, SASS, Flexbox, Grid y Bootstrap 👉 https://victorroblesweb.es/master-css\n💡 Aprende JavaScript, jQuery, Angular, NodeJS y mucho más aquí: https://victorroblesweb.es/master-jav...\n\n🔥",
        categoria: "Front-End",
        usuario: "rafaric",
        id: 7,
      },
      {
        titulo: "Ruta para ser programador FRONTEND",
        limagen: "https://img.youtube.com/vi/lCGoeEF8T_I/hqdefault.jpg",
        lvideo: "https://www.youtube.com/watch?v=lCGoeEF8T_I",
        descripcion:
          "Todas las tecnologías frontend que hay que aprender  para ser un programador web, desarrollador web o ingeniero de software frontend en el año 2022. Puedes enfocarte en frontend, backed, fullstack o devops y este video se enfoca en FRONTEND. 💻 También recomiendo las librerías y frameworks más populares de Javascript en esta ruta para de aprendizaje de programación web.",
        categoria: "Front-End",
        usuario: "rafaric",
        id: 8,
      },
      {
        titulo: "¿Qué es Git y GitHub? - Repositorios, ramas y mucho más",
        limagen: "https://img.youtube.com/vi/DinilgacaWs/hqdefault.jpg",
        lvideo: "https://www.youtube.com/watch?v=DinilgacaWs",
        descripcion:
          "Git es un software de control de versiones diseñado por Linus Torvalds, pensando en la eficiencia y la confiabilidad del mantenimiento de versiones de aplicaciones cuando estas tienen un gran número de archivos de código fuente. En su lugar GitHub es una forja para alojar proyectos utilizando el sistema de control de versiones Git. GitHub sería la red social de código para los programadores, tu propio curriculum vitae.\n\nEn esta clase el profesor Freddy Vega nos enseña para qué sirve Git, cómo usarlo, cómo mejora nuestra productividad y cómo sacarle el mayor provecho.",
        categoria: "Git",
        usuario: "rafaric",
        id: 9,
      },
    ],
    categorias: [
      {
        nombre: "Front-End",
        color: "#6BD1FF",
        id: 1,
      },
      {
        nombre: "Back-End",
        color: "#00C86F",
        descripcion: "videos para git desde alura latam",
        usuario: "rafaric",
        id: 2,
      },
      {
        nombre: "Git",
        color: "#FFBA05",
        id: 3,
      },
      {
        nombre: "UX-UI",
        color: "#DC6EBE",
        id: 4,
      },
      {
        nombre: "Soft Skills",
        color: "#6B5BE2",
        id: 5,
      },
    ],
  };
  const [videos, setVideos] = useState(datos.data);
  const [categorias, setCategorias] = useState(datos.categorias);

  /* 
  useEffect(() => {
    /* client.videos
      .search({ query, size: "small", per_page: 10 })
      .then((videos) => setVideos(videos.videos)); */

  /*    fetch("https://youview-c7790-default-rtdb.firebaseio.com/data.json", {
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
  }, []); */

  useEffect(() => {
    const localVideo = JSON.parse(localStorage.getItem("videos"));
    const localCategorias = JSON.parse(localStorage.getItem("categorias"));
    if (localVideo) {
      console.log("se carga", localVideo);
      setVideos(localVideo);
    }
    if (localCategorias) {
      setCategorias(localCategorias);
    }
  }, []);

  /* useEffect(() => {
    localStorage.setItem("videos", JSON.stringify(videos));
  }, [videos]);

  useEffect(() => {
    localStorage.setItem("categorias", JSON.stringify(categorias));
  }, [categorias]); */

  const addVideo = (item) => {
    console.log(item);
    setVideos({ ...videos, item });
  };
  const addCategoria = (item) => {
    setCategorias({ ...categorias, item });
  };

  return (
    <VideoContext.Provider
      value={{ videos, categorias, addVideo, addCategoria }}
    >
      {children}
    </VideoContext.Provider>
  );
};
