import express from 'express';

const app = express();
const port = 3000;
const hostname = '127.0.0.1';

app.get('/', (req, res) => {
  res.send('Moi Matti');
});

app.get('/moro', (req, res) => {
  res.send('No moro!');
});

app.post('/moro', (req, res) => {
  res.send('No moro post version!');
});

app.listen(port, hostname, () => {
  console.log(`Palvelin pyörii osoitteessa http://${hostname}:${port}`);
});

