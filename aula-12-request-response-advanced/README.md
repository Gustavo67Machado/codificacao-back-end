Aula 12 --- Request e Response Avançado

📚 Sobre a aula

Nesta aula foi desenvolvido um exemplo de API utilizando NestJS, com
foco no controle avançado de Request e Response.

O projeto demonstra como receber informações enviadas pelo cliente
através dos headers HTTP, validar uma chave de API e retornar respostas
diferentes de acordo com a autenticação recebida.

🎯 Objetivos

Trabalhar com Request e Response no NestJS.

Ler informações dos headers HTTP.

Validar uma chave de API.

Retornar diferentes códigos de status HTTP.

Criar respostas JSON personalizadas.

Adicionar headers na resposta.

Testar endpoints utilizando o Insomnia.

🛠️ Tecnologias utilizadas

Node.js

NestJS

TypeScript

Express

RxJS

Insomnia

📁 Estrutura principal

aula-12-request-response-advanced/
├── src/
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── main.ts
│   └── segurança.controller.ts
├── test/
├── package.json
├── package-lock.json
└── README.md

🔐 Endpoint protegido

Endpoint:

GET /secreto

A chave de API é enviada pelo header:

x-api-key

Chave válida

SENAI-2025

Com a chave correta, a API retorna 200 OK e:

{
  "mensagem": "Acesso concedido ao conteúdo secreto!",
  "timestamp": "data e hora da requisição"
}

Também é enviado o header:

x-auth-status: verificado

Chave inválida ou ausente

Com uma chave incorreta, como SENAI-2027, a API retorna 403
Forbidden:

{
  "erro": "Forbidden",
  "mensagem": "Chave de API inválida ou ausente"
}

💻 Conceitos praticados

O controller utiliza @Headers() para acessar o header enviado pelo
cliente e @Res() para controlar manualmente a resposta HTTP.

Principais conceitos:

@Controller()

@Get()

@Headers()

@Res()

Response do Express

Headers HTTP

Status 200 OK

Status 403 Forbidden

Respostas JSON

Validação de API Key

Timestamp

Testes com Insomnia

🚀 Execução

Instale as dependências:

npm install

Execute o projeto:

npm run start:dev

Servidor:

http://localhost:3000

Endpoint:

http://localhost:3000/secreto

🧪 Testes realizados no Insomnia

Teste com chave válida

GET http://localhost:3000/secreto

Header:

x-api-key: SENAI-2025

Resultado:

200 OK

Teste com chave inválida

GET http://localhost:3000/secreto

Header:

x-api-key: SENAI-2027

Resultado:

403 Forbidden

👨‍💻 Autor

Gustavo Castilho Machado

Projeto desenvolvido durante os estudos de desenvolvimento Back-End,
utilizando NestJS e TypeScript.