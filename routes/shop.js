const path = require('path');
const express = require('express');
const router = express.Router(); //created a new router object

const productsController = require('../controllers/products'); //product controller bundles all the export functions

router.get('/', productsController.getProducts); //no parenthesis as we are just adding the reference we don't need to call the function

module.exports = router;
