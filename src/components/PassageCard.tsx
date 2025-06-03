import React from 'react';
import { Card, CardContent, Typography, Chip, Stack, IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

interface PassageCardProps {
  passage: any;
  onFavorite?: () => void;
  isFavorite?: boolean;
}

const PassageCard: React.FC<PassageCardProps> = ({ passage, onFavorite, isFavorite }) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6" className="chinese" gutterBottom>
          {passage.chinese}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {passage.korean}
        </Typography>
        <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
          {passage.themes && passage.themes.map((tag: string) => (
            <Chip key={tag} label={tag} size="small" color="primary" />
          ))}
        </Stack>
        {onFavorite && (
          <IconButton onClick={onFavorite} color={isFavorite ? 'warning' : 'default'}>
            {isFavorite ? <StarIcon /> : <StarBorderIcon />}
          </IconButton>
        )}
      </CardContent>
    </Card>
  );
};

export default PassageCard; 