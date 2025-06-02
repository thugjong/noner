import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Card, CardContent, Chip, Stack, Box } from '@mui/material';
import { chapters } from '../data/chapters';

const ChapterDetail: React.FC = () => {
  const { id } = useParams();
  const chapter = chapters.find(c => c.id === Number(id));

  if (!chapter) {
    return (
      <Typography variant="h5" color="error" align="center">
        찾을 수 없는 장입니다.
      </Typography>
    );
  }

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        <span className="chinese">{chapter.title.chinese}</span>
        {' - '}
        {chapter.title.korean}
      </Typography>

      <Stack spacing={3} sx={{ mt: 4 }}>
        {chapter.passages.map((passage) => (
          <Card key={passage.id}>
            <CardContent>
              <Typography className="chinese" variant="h5" gutterBottom>
                {passage.chinese}
              </Typography>
              <Typography variant="body1" paragraph>
                {passage.korean}
              </Typography>
              <Stack direction="row" spacing={1}>
                {passage.themes.map((theme) => (
                  <Chip
                    key={theme}
                    label={theme}
                    variant="outlined"
                    className="chinese"
                    size="small"
                    color="primary"
                  />
                ))}
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default ChapterDetail; 