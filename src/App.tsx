import React from 'react';
import { Routes, Route, HashRouter as Router } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import Home from './pages/Home';
import ChapterList from './pages/ChapterList';
import ChapterDetail from './pages/ChapterDetail';
import ThemeList from './pages/ThemeList';
import ThemeDetail from './pages/ThemeDetail';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { Link } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
              <Box component="span" sx={{ mr: 1, fontSize: '1.5rem' }}>📚</Box>
              산스 논어클럽
            </Typography>
          </Toolbar>
        </AppBar>

        <Container component="main" sx={{ mt: 4, mb: 4, flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chapters" element={<ChapterList />} />
            <Route path="/chapters/:id" element={<ChapterDetail />} />
            <Route path="/themes" element={<ThemeList />} />
            <Route path="/themes/:id" element={<ThemeDetail />} />
          </Routes>
        </Container>
      </Box>
    </Router>
  );
};

export default App; 