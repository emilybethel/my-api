const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/assets', express.static(__dirname + '/assets'));

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from your public API!' });
});

app.get('/api/data', (req, res) => {
  const sampleData = {
    name: 'My First API',
    version: '1.0',
    purpose: 'Public API to serve data and files'
  };
  res.json(sampleData);
});

app.get('/api/file', (req, res) => {
  res.download(__dirname + '/sample.txt');
});

app.listen(PORT, () => {
  console.log(`API is running on http://localhost:${PORT}`);
});
