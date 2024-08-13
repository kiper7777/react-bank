const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./src/route');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
