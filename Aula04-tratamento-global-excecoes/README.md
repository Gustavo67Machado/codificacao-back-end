Aula04-tratamento-global-excecoes

📚 Sobre a aula

Nesta aula foi desenvolvido um exemplo de tratamento global de
exceções em Node.js com Express. O objetivo é aprender como
identificar, encaminhar e tratar erros que podem acontecer durante a
execução de uma aplicação.

O projeto demonstra tanto erros síncronos quanto assíncronos,
além do tratamento de situações que podem causar problemas no processo
do Node.js.

🎯 Objetivos

Entender o tratamento global de exceções.

Trabalhar com try/catch.

Tratar erros síncronos e assíncronos.

Utilizar middleware global de erros do Express.

Identificar uncaughtException.

Identificar unhandledRejection.

Retornar mensagens de erro de forma organizada para o cliente.

🛠️ Tecnologias utilizadas

Node.js

Express

JavaScript

npm

📁 Estrutura do projeto

Aula04-tratamento-global-excecoes/
├── node_modules/
├── package.json
├── package-lock.json
├── server.js
└── README.md

⚙️ Dependência

O projeto utiliza o framework Express para criação do servidor:

npm install express

💻 Funcionamento

O servidor é criado utilizando o Express:

import express from 'express';

const app = express();

app.use(express.json());

Também foram configurados tratamentos globais para erros que podem
ocorrer no processo:

process.on('uncaughtException', (err) => {
    console.error('[ERRO DE PROCESSO - uncaughtException]: ', err.message);
});

process.on('unhandledRejection', (reason) => {
    console.error('[PREMISSA REJEITADA - unhandledRejection]: ', reason);
});

🔹 Rota de sucesso

Foi criada uma rota simples para testar uma resposta normal da
aplicação:

GET /sucesso

Resposta:

{
  "sucess": true,
  "message": "Operação Realizada com Sucesso"
}

🔹 Erro síncrono

A rota /erro-sincrono demonstra o tratamento de um erro que acontece
durante a execução normal do código.

GET /erro-sincrono

O erro é capturado com try/catch e encaminhado para o middleware
global através de:

next(error);

🔹 Erro assíncrono

A rota /erro-assincrono demonstra o tratamento de uma falha em uma
operação assíncrona.

GET /erro-assincrono

O exemplo utiliza async/await e encaminha o erro para o middleware:

try {
    await Promise.reject(
        new Error('Erro ao consultar banco de dados externo!')
    );
} catch (error) {
    next(error);
}

🧩 Middleware global de erros

O Express possui um middleware específico para tratamento de erros:

app.use((err, req, res, next) => {
    console.error(`[LOG DE ERRO INTERNO]: ${err.stack}`);

    const status = err.status || 500;

    res.status(status).json({
        sucess: false,
        message: err.message || 'ERRO INTERNO DO SERVIDOR'
    });
});

Esse middleware centraliza o tratamento dos erros e evita que cada rota
precise criar uma resposta diferente para cada falha.

🚀 Executando o projeto

No terminal, entre na pasta da aula:

cd Aula04-tratamento-global-excecoes

Instale as dependências:

npm install

Execute o servidor:

node server.js

O servidor será iniciado na porta:

http://localhost:3000

🧪 Testando as rotas

Sucesso

http://localhost:3000/sucesso

Erro síncrono

http://localhost:3000/erro-sincrono

Erro assíncrono

http://localhost:3000/erro-assincrono

As rotas podem ser testadas pelo navegador, Postman, Insomnia ou outra
ferramenta para requisições HTTP.

📌 O que foi aprendido

Nesta aula foi possível compreender que o tratamento de exceções é
importante para:

Evitar que erros inesperados prejudiquem a aplicação.

Centralizar o tratamento de falhas.

Facilitar a identificação de problemas através dos logs.

Retornar respostas padronizadas para o cliente.

Diferenciar erros síncronos de assíncronos.

Trabalhar com mecanismos globais de tratamento de erros do Node.js e
do Express.

👨‍💻 Autor

Gustavo Castilho Machado

Projeto desenvolvido como atividade prática de programação back-end.