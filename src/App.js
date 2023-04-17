import Banner from "./components/Banner/Banner";
import Slider from "./components/Carousel/Slider/Slider";
import Header from "./components/Header/Header";
import "./reset.css";
function App() {
  return (
    <div className="App">
      <Header>
        <Banner />
        <Slider />
      </Header>
    </div>
  );
}

export default App;
