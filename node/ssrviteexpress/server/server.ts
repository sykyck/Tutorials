import express from 'express';
import path from 'path';
import { render } from '../client/src/entry-server';

const app = express();

// Serve client build folder
app.use(express.static(path.resolve('../client/dist')));

// SSR route
app.get(/.*/, (req, res) => {
  const appHtml = render(req.url); // pass URL here
  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>SSR React + Vite</title>
      </head>
      <body>
        <div id="app">${appHtml}</div>
        <script type="module" src="/src/main.tsx"></script>
      </body>
    </html>
  `;
  res.send(html);
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
