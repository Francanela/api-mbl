<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# API-MBL

API para obtenção de dados para cadastro unico do MBL. 

### Swagger: http://localhost:3000/api/

### Redoc: http://localhost:3000/

### Coleção do Postman: docs/postman_collection.json

## Configuração de Ambiente

### Rodando projeto local

1. INSTALANDO O POSTGRES:
  - Install Postgres
2. INSTALANDO O NODE:
  - Install Node.js v 20.11.0 ou superior
  - Install npm   v 10.4.0
	-  Caso tenha problemas verificar as vaiaveis de ambiente.

3. INSTALANDO O NEST:
  OBS: Acesse a pasta pelo cmd(Administrador) rode o comando a seguir:
	- npm i -g @nestjs/cli
	- npm install
 Caso tenha duvidas consulte a documentação: `https://docs.nestjs.com/first-steps`
4. ENV:
  - Dentro da pasta do projeto renomeio o arquivo `.env.sample` para `.env`
6. CONFIGURAR o .env na pasta da aplicação.
	- npx prisma migrate dev --name
	- npm run start:dev

## Teste utilizando (Postman)

1. Ao importa arquivo, será necessario configurar a URL para que os Endpoints seja acessados corretamente.
  - Abre postman
  - Importar arquivo da colletion `MBL users data.postman_collection`
  - Acessar (...) View more actions da collections `MBL users data`.
  - Acessar Edit ir na aba Variables e remover as `/` de ambos os campos `Initial Value` e `Current Valeu`.
  - Inserir em Current Valeu `http://localhost:3000`.
 
## Logging

O logging foi configurado usando para salvar no banco de dados facilitando na extração e informações e sustentação. Em ambos os ambientes `HML` e `PRD`. Certifique-se de configurar corretamente suas variáveis de ambiente para permitir a integração do banco com a API.

## Dependências

A aplicação utiliza várias bibliotecas e ferramentas, incluindo:

- **Nestjs**: Framework web utilizado para criar a API.
- **Prisma**: ORM (Object-Relational Mapping) para interação com o banco de dados.

---

Se você tiver dúvidas ou precisar de ajuda com a configuração, entre em contato com a equipe de desenvolvimento.


## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
