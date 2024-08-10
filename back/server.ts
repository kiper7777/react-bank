const express = require('express');
const bodyParser = require('body-parser');
const settingsRouter = require('./path/to/settings-router'); // Укажите правильный путь

const app = express();
app.use(bodyParser.json());

// Настройка CORS (если нужно)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/', settingsRouter);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});