import { validate, parse } from '@telegram-apps/init-data-node';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Sets init data in the specified Response object.
 * @param {Response} res - Response object.
 * @param {Object} initData - init data.
 */
function setInitData(res, initData) {
  res.locals.initData = initData;
}

/**
 * Extracts init data from the Response object.
 * @param {Response} res - Response object.
 * @returns {Object|undefined} Init data stored in the Response object. Can return undefined if the client is not authorized.
 */
function getInitData(res) {
  return res.locals.initData;
}

/**
 * Middleware which authorizes the external client.
 * @param {Request} req - Request object.
 * @param {Response} res - Response object.
 * @param {Function} next - Function to call the next middleware.
 */
const authMiddleware = (req, res, next) => {
  const [authType, authData = ''] = (req.header('authorization') || '').split(' ');

  switch (authType) {
    case 'tma':
      try {
        // Validate init data.
        validate(authData, token, {
          // We consider init data sign valid for 1 hour from their creation moment.
          expiresIn: 3600,
        });

        // Parse init data. We will surely need it in the future.
        setInitData(res, parse(authData));
        return next();
      } catch (e) {
        return next(e);
      }
    // ... other authorization methods.
    default:
      return next(new Error('Unauthorized'));
  }
};

/**
 * Middleware which shows the user init data.
 * @param {Request} _req
 * @param {Response} res - Response object.
 * @param {Function} next - Function to call the next middleware.
 */
const showInitDataMiddleware = (_req, res, next) => {
  const initData = getInitData(res);
  if (!initData) {
    return next(new Error('Cannot display init data as long as it was not found'));
  }
  res.json(initData);
};

/**
 * Middleware which displays the user init data.
 * @param {Error} err - Handled error.
 * @param {Request} _req
 * @param {Response} res - Response object.
 * @param {Function} _next
 */
const defaultErrorMiddleware = (err, _req, res, _next) => {
  res.status(500).json({
    error: err.message,
  });
};

// Your secret bot token.
const token = process.env.BOT_TOKEN

// Create an Express app and start listening on port 3000.
const app = express();

app.use(cors()); // Allow all origins
app.use(authMiddleware);
app.post('/api/auth', showInitDataMiddleware);
app.use(defaultErrorMiddleware);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

// After the HTTP server is launched, try sending an HTTP GET request to the URL
// http://localhost:3000/ with an Authorization header containing data in the required format.
