const express = require('express');
const httpReq = require('axios');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/restaurants/:id', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/restaurants/:id/reviews', (req, res) => {
  // get all the reviews from the review server
  httpReq.get(`http://localhost:3004/restaurants/${req.params.id}/reviews`)
  .then(function (req) {
    res.status(200).send(req.data);
  })
  .catch(function (error) {
    res.status(501).send(error);
  });

});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
