# rocket-bank-backend

### Back-end

- [TypeScript](https://github.com/microsoft/TypeScript) - Linguagem no qual o projeto foi desenvolvido
- [NestJS](https://github.com/nestjs/nest) - Framework back-end utilizado
- [NodeJS](https://github.com/nodejs/node) - JavaScript Runtime
- [Swagger](https://swagger.io/) - Utilizado para construir a documentação da API

## Início rápido

Antes de iniciar definir o Database url 

Caso queira rodar o banco de dados em um Docker:

```sh
docker run --name postgres_db -e POSTGRES_PASSWORD=postgres -e POSTGRES_USER=postgres -p 5432:5432 --restart always  -d postgres:latest
```

> _Se você não tem o yarn instalado faça:_<br>`npm i -g yarn`

```sh
yarn
yarn db:migrate
yarn dev
```

Iniciará o servidor por padrão no [http://localhost:4000](http://localhost:4000)
