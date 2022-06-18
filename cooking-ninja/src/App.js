import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Recipe from './pages/recipe/Recipe';
import Search from './pages/search/Search';
import Navbar from './components/Navbar';
import ThemeSelector from './components/ThemeSelector';
import { useTheme } from './components/Hooks/useTheme';

function App() {
  const { mode } = useTheme();
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
          <Navbar/>
          <ThemeSelector/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/create" element={<Create/>}/>
              <Route path="/search" element={<Search/>}/>
              <Route path="/recipes/:id" element={<Recipe/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
