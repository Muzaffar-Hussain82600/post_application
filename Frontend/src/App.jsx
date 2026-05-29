import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App