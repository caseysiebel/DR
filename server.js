const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist'));

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => console.log('Running on port', PORT));
