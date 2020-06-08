const router = require('express').Router();
const User = require('../model/User');

// VALIDATION
const Joi = require('@hapi/joi');
// validation schema
const schema = {
  username: Joi.string()
    .min(6)
    .required(),
  password: Joi.string()
    .min(6)
    .required()
};

// router.post('/register', async (req, res) => {
//   // validate data before making user
//   //   const validation = Joi.ValidationError(req.body, schema);
//   //   res.send(validation);
//   const user = new User({
//     // check out video on REST Apis
//     username: req.body.username,
//     email: req.body.email,
//     password: req.body.password
//   });
//   try {
//     const savedUser = await user.save();
//     res.send(savedUser);
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

module.exports = router;
