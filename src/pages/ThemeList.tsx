import React from 'react';
import { Grid, Card, CardContent, Typography, CardActionArea, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { themes } from '../data/themes';

const ThemeList: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        주제별 보기
      </Typography>
      <Grid container spacing={3}>
        {themes.map((theme) => (
          <Grid item xs={12} sm={6} md={4} key={theme.id}>
            <Card>
              <CardActionArea component={RouterLink} to={`/themes/${theme.id}`}>
                <CardContent>
                  <Typography className="chinese" variant="h5" gutterBottom align="center">
                    {theme.name.chinese}
                  </Typography>
                  <Typography variant="h6" color="text.secondary" align="center">
                    {theme.name.korean}
                  </Typography>
                  <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                    {theme.description}
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

export default ThemeList; 