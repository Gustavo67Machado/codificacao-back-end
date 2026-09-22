# Aula 06 - Servidor Web HTTP

## 📚 Sobre a Aula

Nesta aula foi desenvolvido um servidor web utilizando o módulo nativo `http` do Node.js.

O objetivo foi compreender como criar um servidor HTTP, receber requisições, identificar métodos e URLs, configurar cabeçalhos de resposta e retornar diferentes códigos de status.

---

## 🎯 Objetivos

- Criar um servidor HTTP com Node.js.
- Utilizar o módulo nativo `http`.
- Trabalhar com requisições e respostas HTTP.
- Identificar o método e a URL recebidos.
- Configurar cabeçalhos HTTP.
- Retornar respostas no formato JSON.
- Utilizar códigos de status HTTP.
- Criar uma rota de sucesso e uma resposta para páginas não encontradas.

---

## 🛠️ Tecnologias Utilizadas

- Node.js
- JavaScript
- Módulo `http`
- Visual Studio Code
- Git e GitHub

---

## 📁 Estrutura do Projeto

```text
Aula06-servidor-web-http/
│
├── package.json
├── servidor.js
└── README.md

🌐 Criando o Servidor HTTP

O servidor foi criado utilizando o módulo nativo http do Node.js:

import http from 'http';

const servidor = http.createServer((req, res) => {
    // código do servidor
});

O método createServer() recebe uma função responsável por processar cada requisição recebida.

📋 Identificação das Requisições

Durante a execução, o servidor registra o método HTTP e a URL acessada:

console.log(`[LOG Método recebido: ${req.method} | ${req.url}]`);

Isso permite acompanhar no terminal quais requisições estão chegando ao servidor.

🔧 Cabeçalhos HTTP

Foram configurados cabeçalhos padrão para as respostas:

const cabecalhoPadrao = {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY'
};

Esses cabeçalhos ajudam a melhorar a segurança das respostas enviadas pelo servidor.

📡 Rota /status

A aplicação possui uma rota /status.

Quando essa rota é acessada, o servidor retorna o código de status 200, indicando que a requisição foi realizada com sucesso.

if (req.url === '/status') {
    res.writeHead(200, {
        ...cabecalhoPadrao,
        'Content-Type': 'application/json'
    });

    res.end(JSON.stringify({
        servidor: 'Online'
    }));
}

A resposta retornada é:

{
    "servidor": "Online"
}
❌ Página Não Encontrada

Caso o usuário acesse uma URL que não esteja configurada, o servidor retorna o código 404.

res.writeHead(404, {
    ...cabecalhoPadrao,
    'Content-Type': 'application/json'
});

res.end(JSON.stringify({
    erro: 'Pagina não encontrada'
}));

O código 404 indica que o recurso solicitado não foi encontrado.

🚀 Inicialização do Servidor

O servidor é iniciado na porta 3000:

servidor.listen(3000, () => {
    console.log('Sentinela ativo na porta 3000');
});

Após iniciar a aplicação, ela fica disponível localmente em:

http://localhost:3000
🧪 Testando a Aplicação
Teste 1 - Status do servidor

Acesse:

http://localhost:3000/status

Resposta esperada:

{
    "servidor": "Online"
}

Status HTTP:

200 OK
Teste 2 - Página inexistente

Acesse, por exemplo:

http://localhost:3000/teste

Resposta esperada:

{
    "erro": "Pagina não encontrada"
}

Status HTTP:

404 Not Found
🧠 Conceitos Aprendidos

Durante a aula foram praticados:

Servidor HTTP;
Módulo http do Node.js;
http.createServer();
Requisições HTTP;
Respostas HTTP;
req.method;
req.url;
Cabeçalhos HTTP;
res.writeHead();
res.end();
JSON;
Status 200;
Status 404;
Rotas;
Execução de servidor local.
▶️ Como Executar

Primeiro, abra o terminal dentro da pasta da aula.

Depois execute:

node servidor.js

O terminal deverá apresentar uma mensagem semelhante a:

Sentinela ativo na porta 3000

Em seguida, abra o navegador e acesse:

http://localhost:3000/status
📌 Resultado da Aula

Ao final da atividade, foi desenvolvido um servidor web HTTP utilizando apenas recursos nativos do Node.js.

O servidor consegue:

Receber requisições;
Identificar método e URL;
Responder à rota /status;
Informar que o servidor está online;
Retornar erro 404 para rotas inexistentes;
Enviar respostas no formato JSON;
Utilizar cabeçalhos HTTP.
👨‍💻 Autor

Gustavo Castilho Machado

Projeto desenvolvido durante as aulas de Programação Back-End com Node.js.