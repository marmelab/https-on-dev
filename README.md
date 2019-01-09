# HTTPS on DEV

A small set of examples on how to use a HTTPS on a development environment.

## How It Works

```
.
├── certs # Generated TLS certificates
│   ├── server.crt
│   └── server.key
├── examples/** # Simple examples of how to use it with various projects
```

Each folder under `examples/` is a small project that serves static files trough HTTPS on a development environment.

Of all them contains at least a `Makefile` and you can run them thanks to the command `make start`, the app will be available at https://localhost:3000.

If needed, there is some explanations in the related README.

## Available Examples

### Through Third-Party Proxies

- [nginx](./examples/nginx)
- [traefik](./examples/traefik)

### HTTPS Directly From The App

- [Create React App](./examples/create-react-app)
- [HTTP/2 with express and spdy](./examples/express-spdy)
- [webpack-dev-server](./examples/webpack-dev/server)

## Contributing

New examples are welcome! The only requirement are the command `make start` and that the app should serve on localhost:3000.

## Licence

https-on-dev is licensed under the [MIT License](./LICENSE.md), courtesy of [marmelab](http://marmelab.com).
