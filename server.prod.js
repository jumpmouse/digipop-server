const express = require('express');
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 80;
const app = express();

app.get('*.*', express.static(__dirname, {
    maxAge: '1m'
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/*', (req, res) => {
  res.send({data: `data recieved: ${req.body.param}`});
});

app.route('*').get((req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
    console.log(`Node Express server listening on  port ${PORT}`);
});