import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import { FAVORITES, HOME } from './constants/routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={HOME} element={<Home />} />
          <Route path={FAVORITES} element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
