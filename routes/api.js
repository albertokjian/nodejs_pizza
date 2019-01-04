const express = require('express');
const router = express.Router();
const pizzas = require('../pizza.js');

/* GET Pizza Cooking Stage */
router.get('/', function(req, res, next) {
  let contact = req.query.contact;
  console.log(contact);
  res.send(pizzas.checkPizza(contact));
});

/** POST Customer Order 
 *  @param {string} type: kind of pizza
 *  @param {string} contact: local filename
 */
router.post('/', function(req,res,next){
  let type = req.body.type;
  let contact = req.body.contact;
  console.log(contact);
  pizzas.addPizza(type, contact);
  res.send();
});



module.exports = router;
