const express = require('express');
const app = express();

app.use(express.static('assets/css'));
app.use(express.static('assets/images'));
app.use(express.static('assets/js'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); 
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});