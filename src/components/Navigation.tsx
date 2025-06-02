import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            textDecoration: 'none',
            color: 'inherit',
            flexGrow: 1,
            fontWeight: 700
          }}
        >
          論語
        </Typography>
        <Box>
          <Button
            color="inherit"
            component={RouterLink}
            to="/chapters"
            sx={{ mx: 1 }}
          >
            장별보기
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/themes"
          >
            주제별보기
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation; 