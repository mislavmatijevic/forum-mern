const express = require('express');
const errorHandle = require('./errors/error-handle');
require('express-async-errors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;

const notFound = require('./errors/not-found');
const authRoutes = require('./routes/auth');
const postsPublicMiddleware = require('./routes/postsPublic');
const authenticationMiddleware = require('./middleware/authentication');
const postsPrivateMiddleware = require('./routes/postsProtected');

app.use(require('cors')());
app.use(express.json());

app.get('/', (req, res) => {
  return res.send('Server running!');
});

app.use('/api/v1/', authRoutes);
app.use('/api/v1/posts', postsPublicMiddleware);
app.use(authenticationMiddleware);
app.use('/api/v1/posts', postsPrivateMiddleware);

app.use(notFound);
app.use(errorHandle);

app.listen(port, async () => {
  try {
    require('./db/connect');
    console.log(`MERN Forum API Server listening on port ${process.env.PORT}!`);
  } catch (error) {
    console.log('Problem!');
  }
});
