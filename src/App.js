import "./App.css";
import {Route, Routes } from 'react-router-dom'
import Landing from "./Component/Landing";
import Home from "./Component/Home";
import Detail from "./Component/Detail";
import Create from './Component/Create'

function App() {
  return (
    <div className="App">

      <Routes>
        <Route exact path="/" element={<Landing /> } />
        <Route path="/home" element={<Home /> } />
        <Route path="/home/:id" element={<Detail /> } />
        <Route path="/create" element={<Create /> } />
      </Routes>

    </div>
  );
}

export default App;
