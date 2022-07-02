import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App