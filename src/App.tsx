import './App.css';
import { Home, Meet } from './Routes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/meet-the-team' element={<Meet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
