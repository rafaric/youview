// import "./reset.css";
import GlobalStyle from "./Global";
import Home from "./components/Home/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Video from "./pages/Registro/Video/Video";
import Categoria from "./pages/Registro/Categoria/Categoria";
import { VideoContextProvider } from "./Contexts/VideoContexts";
import { register } from "swiper/element/bundle";

register();

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/newvideo",
      element: <Video />,
    },
    {
      path: "/newcat",
      element: <Categoria />,
    },
  ]);
  return (
    <VideoContextProvider>
      <div className="App">
        <GlobalStyle />
        <RouterProvider router={router} />
      </div>
    </VideoContextProvider>
  );
}

export default App;
