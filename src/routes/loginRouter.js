// Require modules
const express = require('express');
const loginFormatValidation = require('../middlewares/loginFormatValidation');
const loginValidation = require('../middlewares/loginValidantion');

const router = express.Router();

// Constants
const HTTP_OK_STATUS = 200;

// POST /login
router.post('/', loginValidation, loginFormatValidation, async (_request, response) => {
  const tokenLength = 16;
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let count = 0; count < tokenLength; count += 1) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  response.status(HTTP_OK_STATUS).json({ token: result });
});  

module.exports = router;