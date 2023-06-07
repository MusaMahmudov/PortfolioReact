import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Main from "./components/main/main";
import Career from "./components/career/career";
function App() {
  return (
    <div className="all">
      <Navbar />
      <Main />
      <Career />
    </div>
  );
}

export default App;
