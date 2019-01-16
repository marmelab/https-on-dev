# HTTP/2 with express and spdy

**Requirement**

- [Node.js](https://nodejs.org/)

Run `make start` and go to `https://localhost:3000/`.

Instead of listening directly from the express app, pass through spdy. The code speaks for itself:

```js
const fs = require('fs');
const path = require('path');
const express = require('express');
const spdy = require('spdy');

const CERTS_ROOT = '../../certs/';

const app = express();

app.use(express.static('static'));

const config = {
    cert: fs.readFileSync(path.resolve(CERTS_ROOT, 'server.crt')),
    key: fs.readFileSync(path.resolve(CERTS_ROOT, 'server.key')),
};

spdy.createServer(config, app).listen(3000, (err) => {
    if (err) {
        console.error('An error occured', error);
        return;
    }

    console.log('Server listening on https://localhost:3000.')
});
```

## Links

- [Express Documentation](http://expressjs.com/)
- [`spdy` Repository](https://github.com/spdy-http2/node-spdy)
