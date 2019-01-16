# Serve HTTPS from webpack-dev-server

**Requirement**

- [Node.js](https://nodejs.org/)

Run `make start` and go to `https://localhost:3000/`.

webpack-dev-server allows to serve HTTPS directly from its dev server, via a bit of configuration:

```js
module.exports = {
    mode: 'production',
    // ...
    devServer: {
        https: {
            key: fs.readFileSync(path.resolve(__dirname, '../../certs/server.key')),
            cert: fs.readFileSync(path.resolve(__dirname, '../../certs/server.crt')),
        },
        port: 3000,
    },
};
```

## Links

- [Related webpack config documentation](https://webpack.js.org/configuration/dev-server/#devserver-https)
