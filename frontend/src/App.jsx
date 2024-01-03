import "./styles/main.scss";
import CloudsBG from "./assets/cloudsbg.png";

function App() {
  return (
    <div style={{ backgroundImage: `url(${CloudsBG})` }} className="App">
      <h1>Initial React Setup</h1>
    </div>
  );
}

export default App;
