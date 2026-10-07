Aula 15 --- Tratamento de Erros e Status Codes

📚 Sobre a aula

Nesta aula foi desenvolvido um exemplo de API utilizando NestJS, com
foco no tratamento de erros, utilização de status codes HTTP e
organização da aplicação com Controllers e Services.

Também foi utilizado o Logger do NestJS para registrar situações de
erro durante as requisições.

🎯 Objetivos

Trabalhar com tratamento de erros no NestJS.

Utilizar BadRequestException e NotFoundException.

Trabalhar com códigos de status HTTP.

Validar parâmetros recebidos pela API.

Utilizar Logger para registrar ocorrências.

Separar responsabilidades entre Controller e Service.

Criar uma rota para consulta de produtos.

🛠️ Tecnologias utilizadas

Node.js

NestJS

TypeScript

HTTP / REST

Logger do NestJS

Thunder Client

📁 Estrutura principal

aula-15-tratamento-de-erros-status-code/
├── src/
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── main.ts
│   ├── produtos.controller.ts
│   └── produtos.service.ts
├── package.json
├── package-lock.json
└── README.md

🔹 AppService

Foi mantido um serviço simples para verificar se o servidor está ativo:

@Injectable()
export class AppService {
  getHello(): string {
    return 'Status: servidor ativo!';
  }
}

🔹 ProdutosService

Foi criado um serviço responsável por armazenar e listar produtos.

Produtos utilizados nos testes:

produtos = [
  { id: 1, nome: 'Teclado Mecânico', preco: 199.99 },
  { id: 2, nome: 'Mouse Gamer', preco: 99.99 },
  { id: 3, nome: 'Monitor 144Hz', preco: 899.99 },
  { id: 4, nome: 'Headset RGB', preco: 149.99 },
  { id: 5, nome: 'Cadeira Gamer', preco: 499.99 },
];

O método listaProduto() retorna a lista de produtos.

🔹 ProdutosController

Foram criadas as rotas:

GET /produtos
GET /produtos/:id

A rota com ID consulta um produto específico.

O ID recebido pela URL é convertido para número:

const id = Number(idProd);

Quando o ID não é numérico:

throw new BadRequestException(
  'ID inválido. Deve ser um número inteiro!'
);

Quando o produto não é encontrado:

throw new NotFoundException(
  `Produto com ID ${id} não encontrado.`
);

🚨 Tratamento de erros

Produto existente

Requisição:

GET /produtos/1

Resposta:

{
  "id": 1,
  "nome": "Teclado Mecânico",
  "preco": 199.99
}

Status: 200 OK

Produto inexistente

Requisição:

GET /produtos/99

Resposta:

{
  "message": "Produto com ID 99 não encontrado.",
  "error": "Not Found",
  "statusCode": 404
}

Status: 404 Not Found

ID inválido

Quando é informado um ID que não pode ser convertido para número, a
aplicação utiliza:

Status: 400 Bad Request

📝 Logger

O Logger do NestJS foi utilizado para registrar situações importantes:

private readonly logger = new Logger(ProdutosController.name);

Exemplo de aviso:

this.logger.warn(
  `Tentativa de busca com ID não numérico: ${idProd}`
);

E também:

this.logger.warn(
  `Produto com ID ${id} não localizado.`
);

Esses registros ajudam a identificar problemas durante a execução da
API.

⚙️ Configuração do módulo

O AppModule foi configurado com os Controllers e Services da
aplicação:

@Module({
  imports: [],
  controllers: [AppController, ProdutosController],
  providers: [AppService, ProdutoService],
})
export class AppModule {}

Também foi utilizado o ObserveModule para instrumentação da aplicação.

🌐 Inicialização do servidor

A aplicação utiliza a porta definida pela variável de ambiente PORT
ou, caso ela não exista, a porta 3000:

await app.listen(process.env.PORT ?? 3000);

Para instalar as dependências:

npm install

Para executar em modo de desenvolvimento:

npm run start:dev

🧪 Testes realizados

Os endpoints foram testados utilizando o Thunder Client.

Rota principal

GET http://localhost:3000/

Listagem de produtos

GET http://localhost:3000/produtos

Produto existente

GET http://localhost:3000/produtos/1

Resultado:

200 OK

Produto inexistente

GET http://localhost:3000/produtos/99

Resultado:

404 Not Found

📌 Conceitos aprendidos

BadRequestException

NotFoundException

Logger

Status Codes HTTP

Controllers no NestJS

Services no NestJS

Injeção de dependências

Validação de parâmetros

Tratamento de erros

Organização de uma API REST

Testes de endpoints com Thunder Client

👨‍💻 Autor

Gustavo Castilho Machado

Projeto desenvolvido como atividade prática do curso de Programador
Full Stack.