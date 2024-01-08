import "./styles/main.scss";
import CloudsBG from "./assets/cloudsbg.png";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div style={{ backgroundImage: `url(${CloudsBG})` }} className="App">
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
