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
