Aula 08-09 — Métodos GET, POST, PATCH e DELETE
📚 Sobre a aula
Nesta aula foi desenvolvido um exemplo de API utilizando NestJS e os principais métodos HTTP utilizados em aplicações backend.

O projeto simula um sistema simples de gerenciamento de pedidos, permitindo consultar, cadastrar, atualizar e remover pedidos.

🎯 Objetivos
Compreender os principais métodos HTTP.
Criar rotas utilizando NestJS.
Utilização de Controladores e Serviços.
Trabalhar com parâmetros de rotação.
obterr dados através do @Body().
Crie um DTO para organização de dados.
Trabalhar com respostas HTTP.
Implementar operações básicas de CRUD.
🛠️ Tecnologias utilizadas
Node.js
NestJS
TypeScript
npm
Visual Studio Code
📁 Estrutura do projeto
aula08-09-metodo-get-post-put-patch-delete/
├── src/
│   ├── dto/
│   │   └── criar-convidados.dto.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── convidados.controller.ts
│   ├── convidados.service.ts
│   └── main.ts
├── test/
├── package.json
├── tsconfig.json
└── README.md

## API Reference

#### Get all items

```http
  GET /api/items

  🌐 Métodos HTTP utilizados
GET

Utilizado para consultar os convidados cadastrados.

GET /convidados

Retorna a lista de convidados armazenada no serviço.

POST

Utilizado para cadastrar um novo convidado.

POST /convidados

Exemplo de dados enviados:

{
  "nome": "Gustavo",
  "idade": 20
}

O projeto utiliza um DTO para organizar os dados recebidos:

export class CriarConvidadoDto {
  nome: string;
  idade: number;
}
PATCH

Utilizado para atualizar a idade de um convidado específico.

PATCH /convidados/:id

Exemplo:

PATCH /convidados/1

Com os dados:

{
  "idade": 24
}
DELETE

Utilizado para remover um convidado pelo seu ID.

DELETE /convidados/:id

Exemplo:

DELETE /convidados/1

A rota também utiliza o código de status HTTP 204 para indicar que a operação foi concluída sem conteúdo na resposta.

👥 Dados utilizados

Durante a aula foi criada uma lista de convidados para simular os dados de uma aplicação:

[
  { id: 1, nome: 'Alice', idade: 23 },
  { id: 2, nome: 'Enzo', idade: 19 },
  { id: 3, nome: 'Jamily', idade: 20 },
  { id: 4, nome: 'Alessandra', idade: 18 },
  { id: 5, nome: 'Hudson', idade: 21 }
]

Os dados são armazenados temporariamente em memória através do ConvidadosService.

⚙️ Controller

O ConvidadosController é responsável por definir as rotas da aplicação.

Exemplo:

@Controller('convidados')
export class ConvidadosController {

Dentro do controller foram implementados os métodos:

@Get() — listar convidados
@Post() — cadastrar convidado
@Patch() — atualizar idade
@Delete() — remover convidado
🔧 Service

O ConvidadosService concentra as operações realizadas sobre os convidados.

Entre as operações desenvolvidas estão:

findAll()

Responsável por retornar todos os convidados.

findOne(id)

Responsável por localizar um convidado pelo ID.

atualizarIdade(id, idade)

Responsável por alterar a idade de um convidado.

removerConvidado(id)

Responsável por remover um convidado da lista.

❗ Tratamento de erros

Foi utilizado o NotFoundException do NestJS para tratar situações em que um convidado não é encontrado.

Exemplo:

throw new NotFoundException(
  `Convidado com ID ${id} não encontrado`
);

Dessa forma, a aplicação consegue informar ao cliente quando o ID informado não existe.

🚀 Como executar o projeto

Primeiro, instale as dependências:

npm install

Depois, execute o projeto em modo de desenvolvimento:

npm run start:dev

A API estará disponível em:

http://localhost:3000

As rotas de convidados podem ser acessadas através de:

http://localhost:3000/convidados
🧪 Testando a API

As requisições podem ser realizadas utilizando ferramentas como:

Insomnia
Postman
Thunder Client
REST Client
Navegador, para requisições GET
Exemplos

Listar convidados

GET http://localhost:3000/convidados

Cadastrar convidado

POST http://localhost:3000/convidados
{
  "nome": "Gustavo",
  "idade": 20
}

Atualizar convidado

PATCH http://localhost:3000/convidados/1
{
  "idade": 25
}

Remover convidado

DELETE http://localhost:3000/convidados/1
📖 Conceitos aprendidos

Nesta aula foram praticados conceitos importantes de desenvolvimento backend:

APIs REST
Métodos HTTP
Controllers
Services
DTOs
Parâmetros de rota
@Body()
@Param()
Status HTTP
Tratamento de exceções
Organização de projetos NestJS
👨‍💻 Autor

Gustavo Castilho Machado

Projeto desenvolvido para as aulas de desenvolvimento backend.