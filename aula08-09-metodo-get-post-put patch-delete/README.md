Aula 08 e 09 — API REST com NestJS

📚 Sobre a aula

Nesta atividade foram praticados os principais métodos HTTP usados ​​na construção de uma API REST utilizando NestJS.

Os testes foram realizados com Postman e Insomnia, utilizando uma API local realizada na porta 3000.

🛠️ Tecnologias utilizadas

Node.js

NestJS

TypeScript

Carteiro

Insônia

API REST

JSON

🚀 Execução da aplicação

A aplicação foi realizada em modo de desenvolvimento:

npm run start:dev

A API ficou disponível em:

http://localhost:3000

Durante a inicialização, o terminal confirmou as seguintes rotas:

Rota mapeada {/status, GET} Rota mapeada {/convidados, GET} Rota mapeada {/convidados, POST} Rota mapeada {/convidados/:id, PATCH} Rota mapeada {/convidados/:id, DELETE} Aplicativo Nest iniciado com sucesso

O terminal também registrou operações realizadas na API, como:

[ADMINISTRADOR]: Removendo Convidado ID: 5 [ADMINISTRADOR]: Removendo Convidado ID: 2 [ADMINISTRADOR]: Atualizando o id do Convidado 5

📌 Pontos finais desenvolvidos

Método

Ponto final

‐

PEGAR

/convidados

Listar todos os osLO

PUBLICAR

/convidados

Cadastrar um novodi

CORREÇÃO

/convidados/:id

Atualizar dados de um convidado

EXCLUIR

/convidados/:id

Remover um convidado

🔎 Método GET

O GET foi utilizado para consultar os cadastros solicitados.

Requisição

OBTER http://localhost:3000/convidados

Resultado

A API retornou 200 OK com uma lista em JSON.

Exemplo registrado nos testes:

[ { "id": 1, "nome": "Alice", "idade": 23 }, { "id": 2, "nome": "Enzo", "idade": 19 }, { "id": 3, "nome": "Jamily", "idade": 20 }, { "id": 4, "nome": "Alessandra", "idade": 18 }, { "id": 5, "nome": "Hudson", "idade": 29 } ]

➕ Método POST

O POST foi utilizado para adicionar um novo convidado.

Requisição

POSTAR http://localhost:3000/convidados

Corpo

{ "nome": "Gustavo", "idade": 21 }

Resultado

Retorno:

201 Criado

Resposta respondida no teste:

{ "mensagem": "Convidado Gustavo adicionado com sucesso", "dados": { "nome": "Gustavo", "idade": 21 } }

✏️ Método PATCH

O PATCH foi utilizado para atualizar parcialmente os dados de um convidado.

Requisição

PATCH http://localhost:3000/convidados/5

Corpo

{ "idade": 22 }

Resultado

Retorno:

200 OK

Resposta:

{ "id": 5, "nome": "Hudson", "idade": 22 }

O terminal registrou a atualização do convidado de ID 5.

🗑️ Método DELETE

O DELETE foi utilizado para remover um convidado pelo ID.

Requisição

EXCLUIR http://localhost:3000/convidados/2

Resultado

Retorno:

204 Sem conteúdo

Esse status indica que a exclusão foi realizada sem conteúdo no corpo da resposta.

O terminal registrou:

[ADMINISTRADOR]: Removendo ID do Convidado: 2

Também foi realizado um teste de exclusão para o ID 5:

[ADMINISTRADOR]: Removendo ID do Convidado: 5

🧪 Testes no Postman e Insomnia

Foram testadas as rotas utilizando duas ferramentas.

Carteiro

Foram definidas requisições para:

GET /convidados

POST /convidados

PATCH /convidados/5

APAGAR /convidados/5

Os testes obtiveram respostas de sucesso, incluindo:

200 OK 201 Criado 204 Sem conteúdo

Insônia

Também foram realizados testes com:

GET /convidados

POST /convidados

PATCH /convidados/5

DELETE /convidados/2

boa luas:

Operação

Status

PEGAR

200 OK

PUBLICAR

201 Criado

CORREÇÃO

200 OK

EXCLUIR

204 Sem conteúdo

📦 Estrutura dos dados

Cada convidado possui uma estrutura simples:

{ "id": 1, "nome": "Alice", "idade": 23 }

Campo

Tipo

Descrição

eu ia

número

Identificador do

nome

corda

Nome do

idade

número

Idade do

📊 Status HTTP utilizado

Status

Significado

Utilidade

200 OK

Requisição realizada com sucesso

RECEBA O PATCH

201 Criado

Recurso criado com sucesso

PUBLICAR

204 Sem conteúdo

Operação concluída sem conteúdo de resposta

EXCLUIR

🔄 CRUD praticado

A atividade incluiu as quatro operações básicas de um CRUD:

Criar → PUBLICAR

Leia → OBTENHA

Atualização → Correção

Excluir → EXCLUIR

🎯 Objetivo da atividade

O objetivo foi praticar o desenvolvimento e o consumo de uma API REST com NestJS, compreendendo como os principais métodos HTTP funcionam na prática.

Também foram praticados:

criação de rotas;

envio de dados em JSON;

consulta de dados;

atualização parcial;

exclusão por ID;

interpretação dos códigos de status HTTP;

testes de API com Postman e Insomnia;

envio das operações pelos logs do terminal.

Conclusão

Nas aulas 08 e 09 foi possível colocar em prática os conceitos fundamentais de APIs REST utilizando NestJS.

A aplicação permitiu cadastrar, consultar, atualizar e remover solicitações. Os testes realizados no Postman e no Insomnia obtiveram respostas de sucesso, enquanto os logs do terminal permitiram acompanhar as operações realizadas pela aplicação.

Com isso, foi possível entender na prática o funcionamento das operações GET, POST, PATCH e DELETE em uma API REST.