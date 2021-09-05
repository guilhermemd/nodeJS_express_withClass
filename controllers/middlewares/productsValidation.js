const { StatusCodes } = require('http-status-codes');
const isValidLength = (str, min, max) => {
  return typeof str === 'string' && str.length >= min && str.length <= max;
};

const isValidName = (req, res, next) => {
  const { name, quantity } = req.body;
  const FIVE = 5;
  const SIX = 6;
  const hundredTwentyEight = 128;
  if (!isValidLength(name, SIX, hundredTwentyEight)) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({
        err: {
          code: 'invalid_data',
          message: '"name" length must be at least 5 characters long'
        },
      });
  }

  // todo name unico

  return next();
};
-
