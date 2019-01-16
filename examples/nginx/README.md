# Proxy HTTPS with Nginx

**Requirement**

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

Run `make start` and go to `https://localhost:3000/`.

Nginx allows to serve trough HTTPS via a simple configuration and is pretty straightforward:

```
server {
    listen 443 ssl;

    server_name ~.;

    ssl_certificate /etc/nginx/conf.d/server.crt;
    ssl_certificate_key /etc/nginx/conf.d/server.key;
}
```

## Links

- [Nginx Documentation: Configuring HTTPS servers](https://nginx.org/en/docs/http/configuring_https_servers.html)
