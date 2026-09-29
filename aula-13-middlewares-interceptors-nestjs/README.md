# Aula 13 — Middlewares e Interceptors com NestJS

Projeto desenvolvido durante a aula sobre **Middlewares e Interceptors no NestJS**, utilizando TypeScript.

## 📚 Sobre a aula

Nesta aula foram trabalhados conceitos de **Middlewares** no NestJS, com foco em:

* Interceptar requisições HTTP;
* Registrar informações das requisições;
* Verificar permissões de acesso;
* Trabalhar com Headers HTTP;
* Restringir determinadas rotas de acordo com o perfil do usuário;
* Retornar respostas HTTP de erro quando o usuário não possui autorização.

## 🛠️ Tecnologias utilizadas

* Node.js
* NestJS
* TypeScript
* Express
* Insomnia
* Vitest

## 📁 Estrutura principal

```text
aula-13-middlewares-interceptors-nestjs/
│
├── src/
│   ├── logger/
│   │   ├── logger.middleware.ts
│   │   └── logger.middleware.spec.ts
│   │
│   ├── app.controller.ts
│   ├── app.controller.spec.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
│
├── test/
├── package.json
├── tsconfig.json
└── README.md
```

## 🔐 Middleware de autenticação/autorização

Foi criado um middleware chamado `LoggerMiddleware`.

Esse middleware é responsável por:

1. Registrar o método HTTP e a rota acessada;
2. Verificar o Header `x-user-role`;
3. Permitir o acesso à área administrativa somente para usuários com a função `supervisor`;
4. Retornar o status `403 Forbidden` quando o usuário não possui a permissão necessária.

Exemplo de Header autorizado:

```text
x-user-role: supervisor
```

Quando o usuário possui a permissão correta, a requisição continua normalmente.

Caso seja utilizado outro perfil, como:

```text
x-user-role: operador
```

o middleware bloqueia o acesso e retorna:

```json
{
  "message": "Acesso Negado: Privilégio de Supervisor Necessário.",
  "log": "2026-09-29T..."
}
```

## 🌐 Rotas da aplicação

### Rota pública

```http
GET /
```

Retorna uma mensagem indicando que a rota pública foi acessada com sucesso.

### Rota administrativa

```http
GET /admin
```

Essa rota possui controle de acesso através do middleware.

Para acessar corretamente, deve ser enviado o Header:

```text
x-user-role: supervisor
```

Com a permissão correta, a API retorna:

```json
{
  "mensagem": "Bem-Vindo ao painel administrativo!",
  "data": "2026-09-29T..."
}
```

Caso o Header contenha outro perfil, a API retorna:

```http
403 Forbidden
```

## 🧪 Testes realizados no Insomnia

Foram realizados testes utilizando o **Insomnia** para verificar o comportamento do middleware.

### ✅ Acesso autorizado

Header:

```text
x-user-role: supervisor
```

Resultado:

```text
200 OK
```

A rota administrativa é acessada normalmente.

### ❌ Acesso não autorizado

Header:

```text
x-user-role: operador
```

Resultado:

```text
403 Forbidden
```

A requisição é bloqueada pelo middleware.

## 📝 Exemplo do Middleware

O middleware verifica a função enviada no Header:

```typescript
const role = req.headers['x-user-role'];

if (role !== 'supervisor') {
  return res.status(403).json({
    message: 'Acesso Negado: Privilégio de Supervisor Necessário.',
    log: new Date(),
  });
}

next();
```

O método `next()` permite que a requisição continue para o próximo estágio da aplicação quando o usuário possui a permissão necessária.

## 🚀 Execução do projeto

Instale as dependências:

```bash
npm install
```

Execute o projeto em modo de desenvolvimento:

```bash
npm run start:dev
```

A aplicação será executada, por padrão, na porta:

```text
http://localhost:3000
```

## 🎯 Objetivo da prática

O objetivo desta aula foi compreender como os **Middlewares** podem ser utilizados no NestJS para executar lógica antes que uma requisição chegue ao controlador.

A prática também demonstrou uma aplicação simples de **controle de acesso baseado em função**, utilizando Headers HTTP.

## 👨‍💻 Autor

**Gustavo Castilho Machado**

Projeto desenvolvido para fins acadêmicos durante os estudos de desenvolvimento Back-End com NestJS.
