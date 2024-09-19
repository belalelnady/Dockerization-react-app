## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Building the Docker Image](#building-the-docker-image)


## Prerequisites

- [Docker](https://www.docker.com/get-started) installed on your machine.
- Basic knowledge of Docker and React.

## Getting Started

Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/belalelnady/Dockerization-react-app.git
cd Dockerization-react-app
```

## Building the Docker Image

#### First, build the React app using:

```bash
npm install
npm run build
```

This command generates static files in the `build` directory.

Next, create a Docker image using the provided `Dockerfile`:

```bash
docker build -t react-nginx-app .
```

## Running the Container

Run the Docker container with the following command:

```bash
docker run -d -p 80:80 react-nginx-app
```

This command maps port 80 of the host machine to port 80 of the container, where Nginx is serving the React app.

## Accessing the Application

Open your web browser and go to:

```
http://localhost
```

The React application should now be running and accessible.
