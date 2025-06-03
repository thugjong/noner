import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Button } from '@mui/material';
import Home from './pages/Home';
import ChapterDetail from './pages/ChapterDetail';
import Search from './pages/Search';
import Favorites from './pages/Favorites';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
            산스 논어클럽
          </Typography>
          <Button color="inherit" component={Link} to="/search">검색</Button>
          <Button color="inherit" component={Link} to="/favorites">즐겨찾기</Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chapters/:id" element={<ChapterDetail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App; 