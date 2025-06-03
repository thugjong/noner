import React, { useMemo, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { chapters } from '../data/chapters';
import PassageCard from '../components/PassageCard';

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const allPassages = useMemo(() => chapters.flatMap(ch => ch.passages), []);
  const favoritePassages = allPassages.filter(p => favorites.includes(p.id));

  const handleFavorite = (pid: string) => {
    const next = favorites.filter(f => f !== pid);
    setFavorites(next);
    localStorage.setItem('favorites', JSON.stringify(next));
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', py: 4 }}>
      <Typography variant="h5" gutterBottom>즐겨찾기한 구절</Typography>
      {favoritePassages.length === 0 && (
        <Typography color="text.secondary">아직 즐겨찾기한 구절이 없습니다.</Typography>
      )}
      {favoritePassages.map((passage) => (
        <PassageCard
          key={passage.id}
          passage={passage}
          isFavorite={true}
          onFavorite={() => handleFavorite(passage.id)}
        />
      ))}
    </Box>
  );
};

export default Favorites; 