import React, { useState } from 'react';
import { Box, Typography, TextField } from '@mui/material';
import { chapters } from '../data/chapters';
import PassageCard from '../components/PassageCard';

const Search: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const allPassages = chapters.flatMap(ch => ch.passages);
  const results = keyword
    ? allPassages.filter(p => p.chinese.includes(keyword) || p.korean.includes(keyword))
    : [];

  const handleFavorite = (pid: string) => {
    let next;
    if (favorites.includes(pid)) {
      next = favorites.filter(f => f !== pid);
    } else {
      next = [...favorites, pid];
    }
    setFavorites(next);
    localStorage.setItem('favorites', JSON.stringify(next));
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', py: 4 }}>
      <Typography variant="h5" gutterBottom>구절 검색</Typography>
      <TextField
        fullWidth
        label="검색어(한문/한글)"
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        sx={{ mb: 3 }}
      />
      {results.map((passage) => (
        <PassageCard
          key={passage.id}
          passage={passage}
          isFavorite={favorites.includes(passage.id)}
          onFavorite={() => handleFavorite(passage.id)}
        />
      ))}
      {keyword && results.length === 0 && (
        <Typography color="text.secondary">검색 결과가 없습니다.</Typography>
      )}
    </Box>
  );
};

export default Search; 