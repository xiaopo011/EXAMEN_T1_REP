const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.post('/estudiante', (req, res) => {
  console.log(req.body);
  res.send('Estudiante registrado correctamente');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

