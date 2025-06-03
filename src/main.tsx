import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider, createTheme, Card, CardContent, Typography, Box, AppBar, Toolbar, Button, IconButton } from '@mui/material';
import { chapters } from './data/chapters';
import { BrowserRouter, Routes, Route, useNavigate, Link } from 'react-router-dom';
import ChapterList from './pages/ChapterList';
import ChapterDetail from './pages/ChapterDetail';
import Search from './pages/Search';
import SearchIcon from '@mui/icons-material/Search';
import About from './pages/About';
import ThemeList from './pages/ThemeList';
import ThemeDetail from './pages/ThemeDetail';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import '@fontsource/montserrat/900.css';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, Noto Sans KR, Pretendard, sans-serif',
    fontWeightBold: 900,
    h4: { fontWeight: 900, fontSize: 32, letterSpacing: 1 },
    h6: { fontWeight: 900, fontSize: 22, letterSpacing: 1 },
    button: { fontWeight: 900, fontSize: 18, letterSpacing: 1 },
  },
  palette: {
    mode: 'light',
    primary: { main: '#111' },
    secondary: { main: '#222' },
    background: { default: '#fff', paper: '#fff' },
    text: { primary: '#111', secondary: '#555' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { background: '#fff' },
        '.chinese': { fontFamily: 'Noto Serif SC, serif' },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          fontWeight: 900,
          background: '#fff',
          color: '#111',
          border: '2px solid #111',
          boxShadow: 'none',
          textTransform: 'none',
          '&:hover': { background: '#111', color: '#fff', border: '2px solid #111' },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: 'none',
          border: '1.5px solid #eee',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: '#fff',
          color: '#111',
          boxShadow: 'none',
          borderBottom: '2px solid #eee',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: 72,
          paddingLeft: 32,
          paddingRight: 32,
        },
      },
    },
  },
});

const GNB: React.FC = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width:600px)');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleMenuClick = (path: string) => {
    navigate(path);
    setDrawerOpen(false);
  };
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', cursor: 'pointer' }}>
          <Typography variant="h4" sx={{ fontWeight: 900, letterSpacing: 2, color: '#111', fontFamily: 'Montserrat, Noto Sans KR, Pretendard, sans-serif' }}>
            NONER CLUB
          </Typography>
        </Box>
        {isMobile ? (
          <>
            <IconButton sx={{ color: '#111' }} onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
              <Box sx={{ width: 220 }} role="presentation" onClick={() => setDrawerOpen(false)}>
                <List>
                  <ListItem disablePadding>
                    <ListItemButton onClick={() => handleMenuClick('/chapters')}>
                      <ListItemText primary="장별" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton onClick={() => handleMenuClick('/themes')}>
                      <ListItemText primary="주제별" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton onClick={() => handleMenuClick('/about')}>
                      <ListItemText primary="클럽소개" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton onClick={() => handleMenuClick('/search')}>
                      <ListItemText primary="검색" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Button
              variant="outlined"
              sx={{
                color: '#111',
                borderColor: '#111',
                fontWeight: 900,
                px: 2.5,
                borderRadius: 0,
                fontSize: 18,
                '&:hover': {
                  bgcolor: '#111',
                  color: '#fff',
                  borderColor: '#111',
                },
              }}
              onClick={() => navigate('/chapters')}
            >
              장별
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: '#111',
                borderColor: '#111',
                fontWeight: 900,
                px: 2.5,
                borderRadius: 0,
                fontSize: 18,
                '&:hover': {
                  bgcolor: '#111',
                  color: '#fff',
                  borderColor: '#111',
                },
              }}
              onClick={() => navigate('/themes')}
            >
              주제별
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: '#111',
                borderColor: '#111',
                fontWeight: 900,
                px: 2.5,
                borderRadius: 0,
                fontSize: 18,
                '&:hover': {
                  bgcolor: '#111',
                  color: '#fff',
                  borderColor: '#111',
                },
              }}
              onClick={() => navigate('/about')}
            >
              클럽소개
            </Button>
            <IconButton sx={{ color: '#111', ml: 2 }} aria-label="검색" onClick={() => navigate('/search')}>
              <SearchIcon />
            </IconButton>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

const MainUI: React.FC = () => {
  const [passages, setPassages] = useState<any[]>([]);

  useEffect(() => {
    const allPassages = chapters.flatMap(ch => ch.passages);
    if (allPassages.length > 0) {
      // 3개 랜덤 추출 (중복 없이)
      const shuffled = allPassages.sort(() => 0.5 - Math.random());
      setPassages(shuffled.slice(0, 3));
    }
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5', pt: 10, pb: 6, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ width: '100%', maxWidth: 600 }}>
        <Typography variant="h6" gutterBottom color="primary" sx={{ fontWeight: 700, fontSize: 24, mb: 4, textAlign: 'center' }}>
          오늘의 추천 구절
        </Typography>
        {passages.map((passage) => (
          <Card key={passage.id} sx={{ mb: 4 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, mb: 1 }}>
                {passage.korean}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 300 }}>
                {passage.chinese}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <GNB />
        <Routes>
          <Route path="/" element={<MainUI />} />
          <Route path="/chapters" element={<ChapterList />} />
          <Route path="/chapters/:id" element={<ChapterDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/themes" element={<ThemeList />} />
          <Route path="/themes/:id" element={<ThemeDetail />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
