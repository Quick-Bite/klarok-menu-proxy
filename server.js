require('newrelic');
const express = require('express');
const httpReq = require('axios');
// const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// app.use(morgan('dev'));
// app.use(express.static(path.join(__dirname, 'public')));

app.get('/restaurants/:id', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/restaurants/:id/reviews', (req, res) => {
  // get all the reviews from the reviews server
  httpReq.get(`http://ec2-13-56-233-213.us-west-1.compute.amazonaws.com/restaurants/${req.params.id}/reviews`)
  .then(function (req) {
    res.status(200).send(req.data);
  })
  .catch(function (error) {
    res.status(501).send(error);
  });

});

app.get('/restaurants/:id/Suggestions', (req, res) => {
  // get all the Suggestions from the suggestions server
  httpReq.get(`http://ec2-54-183-207-43.us-west-1.compute.amazonaws.com/restaurants/${req.params.id}/Suggestions`)
  .then(function (req) {
    res.status(200).send(req.data);
  })
  .catch(function (error) {
    res.status(501).send(error);
  });

});

app.get('/restaurants/:id/menu-items', (req, res) => {
  // get all the menu items from the menu server
  // httpReq.get(`http://ec2-13-57-210-63.us-west-1.compute.amazonaws.com/restaurants/${req.params.id}/menu-items`)
  httpReq.get(`http://ec2-13-52-81-151.us-west-1.compute.amazonaws.com:3002/restaurants/${req.params.id}/menu-items`)
  .then(function (req) {
    res.status(200).send(req.data);
  })
  .catch(function (error) {
    res.status(501).send(error);
  });

});

app.get('/restaurants/:id/menu-items/:itemId', (req, res) => {
  // get all the menu item Id from the menu server
  // httpReq.get(`http://ec2-13-57-210-63.us-west-1.compute.amazonaws.com/restaurants/${req.params.id}/menu-items/${req.params.itemId}`)
  httpReq.get(`http://ec2-13-52-81-151.us-west-1.compute.amazonaws.com:3002/restaurants/${req.params.id}/menu-items/${req.params.itemId}`)
  .then(function (req) {
    res.status(200).send(req.data);
  })
  .catch(function (error) {
    res.status(501).send(error);
  });

});

app.get('/restaurants/:id/order', (req, res) => {
  // get all the menu order from the menu server
  httpReq.get(`http://ec2-13-52-81-151.us-west-1.compute.amazonaws.com:3002/restaurants/${req.params.id}/order`)
  .then(function (req) {
    res.status(200).send(req.data);
  })
  .catch(function (error) {
    res.status(501).send(error);
  });

});

app.get('/restaurants/:id/profile', (req, res) => {
  // get all the profile from profile server
  httpReq.get(`http://ec2-18-225-9-230.us-east-2.compute.amazonaws.com/restaurants/${req.params.id}/profile`)
  .then(function (req) {
    res.status(200).send(req.data);
  })
  .catch(function (error) {
    res.status(501).send(error);
  });

});


app.listen(port, () => {
  console.log(`server running on port:${port}`);
});
