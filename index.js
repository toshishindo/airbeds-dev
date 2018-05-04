const express = require('express');
const app = express();

app.get('/test', (req, res) => {
  res.send({test: "test"});
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});
