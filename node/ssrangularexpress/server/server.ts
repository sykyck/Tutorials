import express from 'express';
import path from 'path';

// Import server bundle from Angular dist (client built output)
const { render } = require('../client/dist/server/main.js');

const app = express();

const browserPath = path.join(__dirname, '../client/dist/browser');
app.use(express.static(browserPath));

// SSR route
app.get(/.*/, async (req, res) => {
  try {
    const html = await render(req.url);
    res.send(html);
  } catch (err) {
    console.error(err);
    res.status(500).send('SSR Error');
  }
});

app.listen(4000, () => {
  console.log('SSR server running at http://localhost:4000');
});
