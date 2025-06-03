const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB 연결
mongoose.connect('mongodb+srv://thugjong:orange55%25%25@cluster0.vawgaze.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('MongoDB 연결 성공!'))
  .catch(err => console.error('MongoDB 연결 실패:', err));

// Verse 스키마 및 모델
const VerseSchema = new mongoose.Schema({
  chapter: String,
  text: String,
  translation: String,
  theme: [String],
});
const Verse = mongoose.model('Verse', VerseSchema);

// GalleryImage 스키마 및 모델
const GalleryImageSchema = new mongoose.Schema({
  url: String,
  password: String,
  createdAt: { type: Date, default: Date.now },
});
const GalleryImage = mongoose.model('GalleryImage', GalleryImageSchema);

// 논어 구절 조회 API
app.get('/api/verses', async (req, res) => {
  try {
    const verses = await Verse.find();
    res.json(verses);
  } catch (err) {
    res.status(500).json({ error: 'DB 조회 실패' });
  }
});

// 갤러리 이미지 목록 (최신순, 최대 50개)
app.get('/api/gallery', async (req, res) => {
  const images = await GalleryImage.find().sort({ createdAt: -1 }).limit(50);
  res.json(images);
});

// 이미지 업로드
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

app.post('/upload', upload.single('image'), (req, res) => {
  res.json({ url: `/uploads/${req.file.filename}` });
});

// 갤러리 이미지 업로드
app.post('/api/gallery', upload.single('image'), async (req, res) => {
  const { password } = req.body;
  if (!req.file || !password) return res.status(400).json({ error: '이미지/비밀번호 필요' });
  const url = `/uploads/${req.file.filename}`;
  const img = new GalleryImage({ url, password });
  await img.save();
  res.json(img);
});

// 갤러리 이미지 삭제 (비밀번호 확인)
app.delete('/api/gallery/:id', async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;
  const img = await GalleryImage.findById(id);
  if (!img) return res.status(404).json({ error: '이미지 없음' });
  if (img.password !== password) return res.status(403).json({ error: '비밀번호 불일치' });
  await img.deleteOne();
  res.json({ success: true });
});

app.listen(4000, () => console.log('Server started on port 4000')); 