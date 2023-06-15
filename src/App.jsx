import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
