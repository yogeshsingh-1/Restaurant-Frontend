import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Home, About, Service, Contact, Explore, Trending } from "./components"
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/trending" element={<Trending />} />
      </Routes>
    </>
  )
}

export default App;