import Home from "./pages/Home";
import Header from "./components/Header";
import Timer from "./components/Timer";

import "./App.css";
import "./Header.css";
import "./Timer.css";
import "./Home.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Timer />
      <Home />
    </div>
  );
}

export default App;
