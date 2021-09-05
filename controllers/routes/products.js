const express = require('express');
const rescue = require('express-rescue');
const UserModel = require('../../models/products');

const route = express.Router();

route.post('/', async (req, res) => {
  const item = await new UserModel().findByName('Lucas');
  return res.status(200).json(item);
});

route.get('/', async (req, res) => {
  const item = await new UserModel('products').findByName('Lucas');
  return res.status(200).json(item);
});


module.exports = route;
