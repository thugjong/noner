import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Button, Card, CardContent, CardActionArea, Stack, Paper, Divider } from '@mui/material';
import { chapters } from '../data/chapters';
import PassageCard from '../components/PassageCard';
import { Link } from 'react-router-dom';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BrushIcon from '@mui/icons-material/Brush';
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';

const illustrationUrl = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80';

const chapterIcons = [MenuBookIcon, BrushIcon, WbIncandescentIcon];

const Home: React.FC = () => {
  const [randomPassage, setRandomPassage] = useState<any>(null);
  useEffect(() => {
    const allPassages = chapters.flatMap(ch => ch.passages);
    if (allPassages.length > 0) {
      setRandomPassage(allPassages[Math.floor(Math.random() * allPassages.length)]);
    }
  }, []);

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', py: { xs: 2, md: 5 }, px: 2, bgcolor: '#f9f6f1', minHeight: '100vh' }}>
      {/* 상단 메뉴 */}
      <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 4 }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            borderRadius: 8,
            fontWeight: 700,
            px: 4,
            py: 1.5,
            fontSize: 20,
            bgcolor: '#1a237e',
            color: '#fff',
            boxShadow: 3,
            fontFamily: 'Nanum Brush Script, serif',
            letterSpacing: 2,
            '&:hover': { bgcolor: '#283593' },
          }}
          component={Link}
          to="/"
        >
          <span style={{ fontSize: 28, marginRight: 8 }}>章</span> 장별로 보기
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{
            borderRadius: 8,
            fontWeight: 700,
            px: 4,
            py: 1.5,
            fontSize: 20,
            bgcolor: '#bfa14a',
            color: '#fff',
            boxShadow: 3,
            fontFamily: 'Nanum Brush Script, serif',
            letterSpacing: 2,
            '&:hover': { bgcolor: '#a68b2a' },
          }}
          component={Link}
          to="/themes"
        >
          <span style={{ fontSize: 28, marginRight: 8 }}>題</span> 주제별로 보기
        </Button>
      </Stack>

      {/* 상단 일러스트 + 오버레이 */}
      <Box sx={{ position: 'relative', mb: 5, borderRadius: 5, overflow: 'hidden', boxShadow: 4 }}>
        <Box
          component="img"
          src={illustrationUrl}
          alt="논어 일러스트"
          sx={{ width: '100%', maxHeight: 260, objectFit: 'cover', filter: 'grayscale(0.2)' }}
        />
        <Box sx={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          bgcolor: 'rgba(26,35,126,0.35)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        }}>
          <Typography variant="h2" sx={{ color: '#fffde7', fontWeight: 900, fontFamily: 'Nanum Brush Script, serif', letterSpacing: 8, mb: 1, textShadow: '2px 2px 8px #222' }}>
            論語
          </Typography>
          <Typography variant="h5" sx={{ color: '#ffe082', fontWeight: 600, textShadow: '1px 1px 6px #222' }}>
            고전의 지혜, 오늘의 삶에 스며들다
          </Typography>
        </Box>
      </Box>

      {/* 오늘의 추천 구절 - 서책 느낌 카드 */}
      <Paper elevation={6} sx={{ my: 4, bgcolor: '#fffbe7', borderRadius: 4, p: { xs: 2, md: 4 }, boxShadow: 6, border: '2px solid #bfa14a', maxWidth: 700, mx: 'auto' }}>
        <Typography variant="h6" color="primary" gutterBottom sx={{ fontWeight: 700, fontFamily: 'Nanum Brush Script, serif', fontSize: 28, color: '#bfa14a', letterSpacing: 2 }}>
          오늘의 추천 구절
        </Typography>
        <Divider sx={{ mb: 2, bgcolor: '#bfa14a' }} />
        {randomPassage && <PassageCard passage={randomPassage} />}
      </Paper>

      {/* 논어 20편 목록 */}
      <Box sx={{ my: 4 }}>
        <Typography variant="h5" color="primary" gutterBottom sx={{ fontWeight: 700, fontFamily: 'Nanum Brush Script, serif', color: '#1a237e', letterSpacing: 2 }}>
          논어 20편
        </Typography>
        <Grid container spacing={3}>
          {chapters.map((chapter, idx) => {
            const Icon = chapterIcons[idx % chapterIcons.length];
            return (
              <Grid item xs={12} sm={6} md={4} key={chapter.id}>
                <Card sx={{
                  borderRadius: 4,
                  boxShadow: 3,
                  bgcolor: '#fff',
                  border: '1.5px solid #e0c97f',
                  transition: '0.2s',
                  '&:hover': { boxShadow: 8, transform: 'translateY(-6px) scale(1.03)', borderColor: '#bfa14a' },
                }}>
                  <CardActionArea component={Link} to={`/chapters/${chapter.id}`} sx={{ p: 2 }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
                        <Icon sx={{ fontSize: 32, color: '#bfa14a', mr: 1 }} />
                        <Typography className="chinese" variant="h5" align="center" sx={{ fontWeight: 800, fontFamily: 'Nanum Brush Script, serif', color: '#1a237e', letterSpacing: 4 }}>
                          {chapter.title.chinese}
                        </Typography>
                      </Box>
                      <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 1, fontWeight: 600, fontSize: 18 }}>
                        {chapter.title.korean}
                      </Typography>
                      <Typography variant="body2" align="center" color="text.secondary">
                        구절 수: {chapter.passages.length}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Home; 