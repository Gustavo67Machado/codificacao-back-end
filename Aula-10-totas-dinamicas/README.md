# Aula 10 - Rotas Dinâmicas com NestJS

Nesta aula foi desenvolvido um exemplo de API utilizando **NestJS**, com foco na criação de **rotas dinâmicas**, utilização de parâmetros de rota e validação dos valores recebidos.

## 📚 Conteúdos estudados

- Rotas dinâmicas no NestJS
- Utilização de `@Param()`
- Utilização de `ParseIntPipe`
- Injeção de dependências
- Criação e utilização de Services
- Tratamento de erros com `NotFoundException`
- Retorno de códigos HTTP
- Testes de rotas utilizando Insomnia

## 🛠️ Tecnologias utilizadas

- Node.js
- NestJS
- TypeScript
- Insomnia

## 📁 Estrutura principal

```text
Aula-10-totais-dinamicas/
├── src/
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── livros.controller.ts
│   ├── livros.service.ts
│   └── main.ts
├── package.json
├── tsconfig.json
└── README.md

📖 Service de livros

Foi criado um LivrosService contendo uma lista de livros armazenada em memória.

Exemplo dos livros utilizados:

private livros = [
  { id: 1, titulo: 'O senhor dos Aneis', autor: 'J.R.R Tolkien' },
  { id: 2, titulo: '1984', autor: 'George Orwell' },
  { id: 3, titulo: 'Dom Casmurro', autor: 'Machado de Assis' },
  { id: 4, titulo: 'Memórias Póstumas de Brás Cubas', autor: 'Machado de Assis' },
  { id: 5, titulo: 'Capitão da Areia', autor: 'Jorge Amado' },
];

O service possui um método para localizar um livro pelo seu ID:

encontrarPorId(id: number) {
  const livro = this.livros.find((livro) => livro.id === id);

  if (!livro) {
    throw new NotFoundException(
      `Livro com ID ${id} não localizado em nosso acervo`,
    );
  }

  return livro;
}
🔗 Rota dinâmica

A rota criada para consultar um livro pelo ID foi:

GET /livro/:id

No controller, o parâmetro id é recebido através do @Param() e convertido para número utilizando o ParseIntPipe.

@Get(':id')
buscarPorId(
  @Param('id', ParseIntPipe) id: string
) {
  const numeroId = id;
  return this.livroService.encontrarPorId(numeroId);
}

O objetivo da rota é permitir que o ID seja informado diretamente na URL.

Exemplo
http://localhost:3000/livro/5
🧪 Testes realizados

Os testes foram realizados utilizando o Insomnia.

✅ Livro encontrado

Requisição:

GET http://localhost:3000/livro/5

Resultado:

{
  "id": 5,
  "titulo": "Capitão da Areia",
  "autor": "Jorge Amado"
}

Status:

200 OK
❌ Livro não encontrado

Requisição:

GET http://localhost:3000/livro/10

Como não existe um livro com o ID 10, a aplicação retorna:

{
  "message": "Livro com ID 10 não localizado em nosso acervo",
  "error": "Not Found",
  "statusCode": 404
}

Status:

404 Not Found
❌ ID inválido

Também foi realizado um teste utilizando um valor que não é numérico:

GET http://localhost:3000/livro/abc

Como a rota utiliza o ParseIntPipe, o NestJS identifica que o parâmetro não é um número e retorna:

{
  "message": "Validation failed (numeric string is expected)",
  "error": "Bad Request",
  "statusCode": 400
}

Status:

400 Bad Request
🚀 Executando o projeto

Instale as dependências:

npm install

Execute o projeto em modo de desenvolvimento:

npm run start:dev

A aplicação será executada em:

http://localhost:3000
🎯 Objetivo da aula

O objetivo desta aula foi aprender a trabalhar com rotas dinâmicas no NestJS, permitindo que valores sejam recebidos diretamente pela URL.

Também foi praticado o tratamento de diferentes situações:

ID existente → 200 OK
ID inexistente → 404 Not Found
ID inválido → 400 Bad Request


👨‍💻 Autor

Gustavo Castilho Machado

Projeto desenvolvido durante as aulas de Programação Full Stack.
## FAQ

#### Question 1

Answer 1

#### Question 2

Answer 2

