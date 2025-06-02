import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Card, CardContent, Box } from '@mui/material';
import { themes } from '../data/themes';
import { chapters } from '../data/chapters';

const ThemeDetail: React.FC = () => {
  const { id } = useParams();
  const theme = themes.find(t => t.id === id);
  
  const themePassages = chapters.flatMap(chapter =>
    chapter.passages.filter(passage =>
      passage.themes.includes(id || '')
    ).map(passage => ({
      ...passage,
      chapterTitle: chapter.title
    }))
  );

  if (!theme) {
    return (
      <Typography variant="h5" color="error" align="center">
        찾을 수 없는 주제입니다.
      </Typography>
    );
  }

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        <span className="chinese">{theme.name.chinese}</span>
        {' - '}
        {theme.name.korean}
      </Typography>
      
      <Typography variant="body1" paragraph align="center" sx={{ mb: 4 }}>
        {theme.description}
      </Typography>

      <Typography variant="h5" gutterBottom align="center" sx={{ mb: 3 }}>
        관련 구절
      </Typography>

      {themePassages.map((passage) => (
        <Card key={passage.id} sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              {passage.chapterTitle.korean}
            </Typography>
            <Typography className="chinese" variant="h5" gutterBottom>
              {passage.chinese}
            </Typography>
            <Typography variant="body1">
              {passage.korean}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default ThemeDetail; 