const notFound = (_req, res) => {
  res.status(404).json(`Requested resource not found.`);
};

module.exports = notFound;
