// src/App.jsx — corrected (no BrowserRouter inside)
import { Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './Home/Home';
import Search from './Search/Search';
import MyBookings from './MyBookings/MyBookings';

const theme = createTheme({
  palette: {
    primary: { main: '#2AA7FF' },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* NO <BrowserRouter> here anymore */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/my-bookings" element={<MyBookings />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;