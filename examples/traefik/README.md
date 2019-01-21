# Proxy HTTPS with traefik

**Requirement**

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

Run `make start` and go to `https://localhost:3000/`.

The Traefik dashboard will be available at `http://localhost:8000`.

Traefik is a reverse proxy and a load balancer and can be used directly from docker compose:

```yml
version: '3.4'

services:
    reverse-proxy:
        image: traefik # The official Traefik docker image
        command: --docker # Enables the web UI and tells Træfik to listen to docker
        ports:
            - '3000:443'
        volumes:
            - /var/run/docker.sock:/var/run/docker.sock # So that Traefik can listen to the Docker events
            - ../../certs/server.crt:/sslcerts/server.crt
            - ../../certs/server.key:/sslcerts/server.key
            - ./traefik.toml:/traefik.toml
        labels:
            - 'traefik.enable=false'
        depends_on:
            - static-files
    static-files:
        image: halverneus/static-file-server
        volumes:
            - ./static:/web
        labels:
            - 'traefik.enable=true'
            - 'traefik.frontend.rule=Host:localhost'
            - 'traefik.port=8080'
            - 'traefik.protocol=http'
        ports:
            - 8080:8080
```

## Links

- [Traefik website](https://traefik.io/)
