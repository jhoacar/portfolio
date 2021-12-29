<h1 align="center">Personal Portfolio</h1>
<h2 align="center">
    This project is made considering good practices with last technologies.
</h2>
<h3>I consider things like:</h3>
<ul align="center">
    <li align="center">
        Independency in infraestructure
    </li>
    <li align="center">
        Scalability without hard coding
    </li>
    <li align="center">
        Maintainability using little templates
    </li>
</ul>

<h3>¿How it works? </h3>
<p>
I build a docker image with all files of this project,
using CI/CD with Github Actions, and deploy in Cloud Platform
using docker-compose.
</p>
<p>
First I configured DockerHub for use connection with Github Action,
next I configured my cloud service, enabling ssh connections and using private keys
in this project with other action for make docker-compose with override tag in the host.
</p>
<p>
The deploy uses a nginx proxy enabling only HTTP and HTTPS requests in company with other server for letsencrypt.
    <br>
    [ <a href="https://github.com/nginx-proxy/acme-companion"> DOCUMENTATION </a> ]
</p>
<p>
Then use an apache server for deploy this project based in PHP that replace variables of a JSON in the HTML file.
</p>
<p>This project is public in DockerHub, you can use for own purposes, making: </p>

```shell
$ docker run --detach \
    --name name-that-you-want \
    -p 80:80
    jhoacar/portfolio
```

Visit the project here!  😎  [https://www.jhoacar.me](https://prueba.jhoacar.me)
