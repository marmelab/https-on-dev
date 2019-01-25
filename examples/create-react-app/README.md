# HTTPS from a Create React App

**Requirement**

- [Node.js](https://nodejs.org/)

Run `make start` and go to `https://localhost:3000/`.

The implementation is really simple, just set the environment variable `HTTPS=true` before launching the CRA.

```bash
HTTPS=true react-scripts start
```

Sadly, create-react-app doesn't allow to pass custom certificates without ejecting the app.

### Workaround

[Zwerge](https://github.com/Zwerge) found a workaround: replace webpack-dev-server's default TLS certificate on the fly.

To do so, you can add a `prestart` instruction in the `package.json`:

```json
  "scripts": {
    "prestart": "(cat ../../certs/server.crt ../../certs/server.key > ./node_modules/webpack-dev-server/ssl/server.pem) || :",
    "start": "react-scripts start",
zsh:1: command not found: q
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

## Links

- [Documentation](https://facebook.github.io/create-react-app/docs/using-https-in-development#docsNav)
