import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Home, About, Service, Contact } from "./components"
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App;