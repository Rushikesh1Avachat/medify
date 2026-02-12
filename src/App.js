// App.jsx
import { Routes, Route } from 'react-router-dom'

import NavBar from "./components/NavBar/NavBar"
import Footer from "./components/Footer/Footer"
import Home from './Home/Home'
import MyBookings from './MyBookings/MyBookings'
import Search from './Search/Search'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />

        <Route path="/my-bookings" element={<MyBookings />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

