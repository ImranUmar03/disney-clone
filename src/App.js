import { useState } from "react";
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import ProductionHouse from "./Components/ProductionHouse";
import GenreMoieList from "./Components/GenreMoieList";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Header />
      <Slider />
      <ProductionHouse />
      <GenreMoieList />
    </div>
  );
}

export default App;
