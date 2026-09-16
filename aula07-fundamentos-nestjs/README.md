# Aula 07 - Fundamentos do NestJS

## 📚 Sobre a aula

Nesta aula foram estudados os fundamentos do **NestJS**, um framework para desenvolvimento de aplicações backend utilizando **Node.js** e **TypeScript**.

Foi criada uma aplicação básica utilizando a estrutura padrão do NestJS, trabalhando com módulos, controllers, services e rotas HTTP.

---

## 🎯 Objetivos

- Conhecer a estrutura básica de um projeto NestJS;
- Entender o funcionamento de Controllers;
- Criar e utilizar Services;
- Trabalhar com injeção de dependências;
- Criar uma rota HTTP utilizando `@Get()`;
- Executar uma aplicação NestJS localmente;
- Testar a aplicação através do navegador.

---

## 🛠️ Tecnologias utilizadas

- Node.js
- NestJS
- TypeScript
- npm
- Visual Studio Code

---

## 📁 Estrutura do projeto

A estrutura principal utilizada na aula foi:

```text
aula07-fundamentos-nestjs/
│
├── dist/
├── node_modules/
│
├── src/
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
│
├── test/
│
├── .gitignore
├── .prettierrc
├── nest-cli.json
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.build.json
├── tsconfig.json
├── tsconfig.build.tsbuildinfo
├── vitest.config.e2e.ts
└── vitest.config.ts
🧩 Principais arquivos
main.ts

É o arquivo responsável por iniciar a aplicação NestJS.

Ele utiliza o NestFactory para criar a aplicação a partir do módulo principal.

Exemplo:

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
app.module.ts

O AppModule é o módulo principal da aplicação.

Ele organiza os componentes utilizados pelo projeto, como Controllers e Services.

app.controller.ts

O Controller é responsável por receber as requisições HTTP.

Na aula foi criada uma rota utilizando:

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

Nesse caso:

@Controller('api') define o caminho base /api;
@Get() define uma rota para requisições GET;
getHello() chama o método existente no Service.
app.service.ts

O Service contém a lógica utilizada pelo Controller.

Foi utilizado o decorator @Injectable() para permitir que o serviço seja utilizado através da injeção de dependências.

Exemplo utilizado na aula:

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Servidor Nest.js - Aula 07 Ativo!';
  }
}
🔗 Rota criada

A aplicação possui uma rota GET:

GET /api

Ao acessar essa rota, o Controller chama o Service e retorna:

Servidor Nest.js - Aula 07 Ativo!
▶️ Como executar o projeto

Primeiro, instale as dependências:

npm install

Depois, execute o projeto em modo de desenvolvimento:

npm run start:dev

A aplicação será iniciada na porta:

3000
🌐 Testando no navegador

Com o servidor em execução, acesse:

http://localhost:3000/api

O resultado esperado será:

Servidor Nest.js - Aula 07 Ativo!
🧠 Conceitos aprendidos

Durante a aula foram trabalhados os seguintes conceitos:

Controller

Responsável por receber e responder às requisições HTTP.

@Controller('api')
Service

Responsável por concentrar a lógica da aplicação.

@Injectable()
Rota GET

Utilizada para receber requisições HTTP do tipo GET.

@Get()
Injeção de dependências

O Controller recebe o AppService através do construtor:

constructor(private readonly appService: AppService) {}
Módulos

O NestJS utiliza módulos para organizar e estruturar a aplicação.

📌 Resultado da aula

Ao final da aula foi criada uma aplicação NestJS funcional contendo:

Estrutura básica do NestJS;
AppModule;
AppController;
AppService;
Rota GET /api;
Resposta HTTP;
Aplicação executando na porta 3000.
👨‍💻 Autor

Gustavo Castilho Machado

Projeto desenvolvido como atividade prática das aulas de desenvolvimento Back-End.