import React, { useState, useEffect } from 'react';
import { Typography, Card, CardContent, Grid, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { chapters } from '../data/chapters';
import { Passage } from '../types';

const Home: React.FC = () => {
  const [randomPassage, setRandomPassage] = useState<Passage | null>(null);

  useEffect(() => {
    const allPassages = chapters.flatMap(chapter => chapter.passages);
    const randomIndex = Math.floor(Math.random() * allPassages.length);
    setRandomPassage(allPassages[randomIndex]);
  }, []);

  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom align="center" className="chinese">
        論語
      </Typography>
      <Typography variant="h5" gutterBottom align="center" sx={{ mb: 6 }}>
        공자의 가르침
      </Typography>
      
      {randomPassage && (
        <Card sx={{ mb: 6 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom color="primary">
              오늘의 구절
            </Typography>
            <Typography className="chinese" variant="h5" gutterBottom>
              {randomPassage.chinese}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {randomPassage.korean}
            </Typography>
          </CardContent>
        </Card>
      )}

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom color="primary">
                장별 보기
              </Typography>
              <Typography variant="body1" paragraph>
                논어의 20편을 장별로 살펴보세요.
              </Typography>
              <Button
                variant="contained"
                component={RouterLink}
                to="/chapters"
                fullWidth
              >
                장 목록 보기
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom color="primary">
                주제별 보기
              </Typography>
              <Typography variant="body1" paragraph>
                덕목과 주제별로 논어의 가르침을 탐구해보세요.
              </Typography>
              <Button
                variant="contained"
                component={RouterLink}
                to="/themes"
                fullWidth
              >
                주제 목록 보기
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home; 