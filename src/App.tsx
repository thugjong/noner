import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import ChapterList from './pages/ChapterList';
import ChapterDetail from './pages/ChapterDetail';
import ThemeList from './pages/ThemeList';
import ThemeDetail from './pages/ThemeDetail';

const App: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navigation />
      <Container component="main" sx={{ flex: 1, py: 3 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chapters" element={<ChapterList />} />
          <Route path="/chapters/:id" element={<ChapterDetail />} />
          <Route path="/themes" element={<ThemeList />} />
          <Route path="/themes/:id" element={<ThemeDetail />} />
        </Routes>
      </Container>
    </Box>
  );
};

export default App; 