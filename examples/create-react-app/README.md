# HTTPS from a Create React App

**Requirement**

- [Node.js](https://nodejs.org/)

Run `make start` and go to `https://localhost:3000/`.

The implementation is really simple, just set the environment variable `HTTPS=true` before launching the CRA.

```bash
HTTPS=true react-scripts start
```

Sadly, create-react-app doesn't allow to pass custom certificates without ejecting the app.

## Links

- [Documentation](https://facebook.github.io/create-react-app/docs/using-https-in-development#docsNav)
