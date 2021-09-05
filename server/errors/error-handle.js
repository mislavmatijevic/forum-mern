const errorHandle = async (err, req, res, next) => {
  if (err.name === 'CastError') {
    return res.status(400).json({
      success: false,
      message: `ID ${err.value} not valid.`,
    });
  }

  const code = err.statusCode;
  err.statusCode = undefined;

  return res
    .status(code || 400)
    .json({ success: false, message: err.message, err });
};

module.exports = errorHandle;
