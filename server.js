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
  // get all the reviews from the reviews server
  httpReq.get(`http://localhost:3004/restaurants/${req.params.id}/reviews`)
  .then(function (req) {
    res.status(200).send(req.data);
  })
  .catch(function (error) {
    res.status(501).send(error);
  });

});

app.get('/restaurants/:id/Suggestions', (req, res) => {
  // get all the Suggestions from the suggestions server
  httpReq.get(`http://localhost:3003/restaurants/${req.params.id}/Suggestions`)
  .then(function (req) {
    res.status(200).send(req.data);
  })
  .catch(function (error) {
    res.status(501).send(error);
  });

});

app.get('/restaurants/:id/menu-items', (req, res) => {
  // get all the menu items from the menu server
  httpReq.get(`http://localhost:3002/restaurants/${req.params.id}/menu-items`)
  .then(function (req) {
    res.status(200).send(req.data);
  })
  .catch(function (error) {
    res.status(501).send(error);
  });

});

app.get('/restaurants/:id/menu-items/:itemId', (req, res) => {
  // get all the menu item Id from the menu server
  httpReq.get(`http://localhost:3002/restaurants/${req.params.id}/itemId`)
  .then(function (req) {
    res.status(200).send(req.data);
  })
  .catch(function (error) {
    res.status(501).send(error);
  });

});

app.get('/restaurants/:id/order', (req, res) => {
  // get all the menu order from the menu server
  httpReq.get(`http://localhost:3002/restaurants/${req.params.id}/order`)
  .then(function (req) {
    res.status(200).send(req.data);
  })
  .catch(function (error) {
    res.status(501).send(error);
  });

});

app.get('/restaurants/:id/profile', (req, res) => {
  // get all the profile from profile server
  httpReq.get(`http://localhost:3001/restaurants/${req.params.id}/profile`)
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
