const errorHandle = async (err, req, res, next) => {
  const code = err.statusCode;
  err.statusCode = undefined;

  // ID provided for RESTful service not a valid ObjectID.
  if (err.name === 'CastError') {
    return res.status(400).json({
      success: false,
      message: `ID ${err.value} not valid.`,
    });
  }

  // Unique check in database failed.
  if (err.code === 11000) {
    return res.status(409).json({
      success: false,
      message: Object.keys(err.keyPattern).map(
        (value) => `${value[0].toUpperCase() + value.slice(1)} already taken!`
      ),
    });
  }

  if (err.message.startsWith('Validation failed:')) {
    err.message = '';
    for (error in err.errors) {
      err.message += err.errors[error].message + ' ';
    }
    err.message = err.message.trim();
  }

  return res.status(code || 400).json({ success: false, message: err.message });
};

module.exports = errorHandle;
