const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 3000;

app.use(cors({
    origin: 'https://stamellashroom1.github.io'
}));

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/test', (req, res) => {
    res.json({
        message: "Test functional",
        timestamp: new Date()
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});