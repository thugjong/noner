import React from 'react';
import { Grid, Card, CardContent, Typography, CardActionArea, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { chapters } from '../data/chapters';

const ChapterList: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        장별 보기
      </Typography>
      <Grid container spacing={3}>
        {chapters.map((chapter) => (
          <Grid item xs={12} sm={6} md={4} key={chapter.id}>
            <Card>
              <CardActionArea component={RouterLink} to={`/chapters/${chapter.id}`}>
                <CardContent>
                  <Typography className="chinese" variant="h5" gutterBottom align="center">
                    {chapter.title.chinese}
                  </Typography>
                  <Typography variant="h6" color="text.secondary" align="center">
                    {chapter.title.korean}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
                    구절 수: {chapter.passages.length}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ChapterList; 