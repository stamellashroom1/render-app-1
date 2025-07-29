const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    const safeIP = (req.ip || 'unknown').replace(/[:.]/g, "-");
    const ext = path.extname(file.originalname);
    cb(null, `${timestamp}-${safeIP}${ext}`);
  }
});

const upload = multer({ storage: storage });

app.use(cors({
    origin: 'https://stamellashroom1.github.io'
}));

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/test', (req, res) => {
    res.json({
        message: "Test functional",
        timestamp: new Date().toISOString()
    });
});

app.post('/uploads', upload.single('file'), (req, res) => {
  res.send("File uploaded successfully.");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});