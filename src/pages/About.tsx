import React from 'react';
import { Box, Typography, Link, List, ListItem, ListItemText, Divider } from '@mui/material';

const About: React.FC = () => (
  <Box sx={{ maxWidth: 700, mx: 'auto', py: 6, px: 2 }}>
    <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
      클럽소개
    </Typography>
    <Divider sx={{ mb: 3 }} />
    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
      ❑ 논어 클럽 활동 안내
    </Typography>
    <List>
      <ListItem>
        <ListItemText primary="1. 매일 논어 구절 읽기 (필사 및 의견 나눔은 자유롭게)" />
      </ListItem>
      <ListItem>
        <ListItemText primary="2. 진도: 상반기 논어 진행(현재까지 총 20편 중 14편 진행중), 하반기 명심보감 시작" />
      </ListItem>
      <ListItem>
        <ListItemText primary="3. 모임: 분기 1회 줌모임(25년 1분기는 3월 예상)" secondary="- 줌모임 진행방식: 논어 구절 중 가장 인상 깊었던 문장 의견 나누기
- 오프라인 모임: 반기 1회, 상반기는 4-5월 예정" />
      </ListItem>
    </List>
    <Divider sx={{ my: 3 }} />
    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
      ❑ 온라인 교재
    </Typography>
    <Link href="https://m.terms.naver.com/list.naver?cid=41893&categoryId=51342&so=st4.asc" target="_blank" rel="noopener" underline="hover">
      논어의 문법적 이해<br />
      https://m.terms.naver.com/list.naver?cid=41893&categoryId=51342&so=st4.asc
    </Link>
    <Divider sx={{ my: 3 }} />
    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
      ❑ 추천도서
    </Typography>
    <Link href="https://smartstore.naver.com/impacterstore/products/10380801372" target="_blank" rel="noopener" underline="hover">
      논어<br />
      https://smartstore.naver.com/impacterstore/products/10380801372
    </Link>
  </Box>
);

export default About; 