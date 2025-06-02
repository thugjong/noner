import React from 'react';
import { Routes, Route, HashRouter as Router } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import ChapterList from './pages/ChapterList';
import ChapterDetail from './pages/ChapterDetail';
import ThemeList from './pages/ThemeList';
import ThemeDetail from './pages/ThemeDetail';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { CssBaseline } from '@mui/material';

const App: React.FC = () => {
  return (
    <Router>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
              論語
            </Typography>
          </Toolbar>
        </AppBar>
        
        {/* 날짜와 방문자 수 표시 */}
        <Box sx={{ 
          bgcolor: 'background.paper', 
          p: 1, 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: 1,
          borderColor: 'divider'
        }}>
          <Typography variant="body2" color="text.secondary">
            {new Date().toLocaleDateString('ko-KR', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric',
              weekday: 'long'
            })}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="body2" color="text.secondary">
              방문자 수:
            </Typography>
            <img src="https://hits.sh/thugjong.github.io/noner.svg?view=today-total" alt="방문자 수" height="20" />
          </Box>
        </Box>

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