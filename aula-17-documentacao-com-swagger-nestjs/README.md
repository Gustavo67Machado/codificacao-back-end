# Aula 17 — Documentação com Swagger no NestJS

## 📚 Sobre a aula

Nesta aula foi desenvolvida uma API em **NestJS** com documentação interativa utilizando **Swagger**. O projeto simula uma API de catálogo e estoque, com uma rota para verificar o status do servidor e um endpoint para cadastrar produtos.

A documentação é gerada a partir dos decorators do Swagger, permitindo visualizar os endpoints, os parâmetros esperados, exemplos de dados e respostas diretamente pelo navegador.

## 🎯 Objetivos

- Integrar o Swagger a uma aplicação NestJS;
- Documentar endpoints HTTP;
- Organizar a documentação por tags;
- Descrever operações com `ApiOperation`;
- Documentar respostas com `ApiResponse`;
- Criar DTOs com exemplos e descrições usando `ApiProperty`;
- Disponibilizar a interface interativa do Swagger;
- Implementar uma rota de status e uma rota de cadastro de produtos.

## 🛠️ Tecnologias utilizadas

- Node.js
- NestJS
- TypeScript
- `@nestjs/swagger`
- Swagger UI
- REST API

## 📁 Estrutura principal

```text
aula-17-documentacao-com-swagger-nestjs/
├── src/
│   ├── produtos/
│   │   ├── dto/
│   │   │   └── criar-produtos.dto.ts
│   │   └── produto.controller.ts
│   ├── app.controller.ts
│   ├── app.controller.spec.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
├── test/
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## 📖 Documentação com Swagger

A configuração do Swagger está no arquivo `src/main.ts`. A documentação foi configurada com:

- **Título:** API de Catalogo e Estoque
- **Versão:** 1.0
- **Descrição:** Documentação Técnica interativa e viva para integração
- **Tag:** Produtos
- **Autenticação:** Bearer Auth

A interface da documentação fica disponível em:

```text
http://localhost:3000/docs
```

## 🌐 Endpoints

### `GET /status`

Verifica se o servidor está ativo.

Exemplo de resposta:

```text
Status: Servidor ativo!
```

### `POST /produtos`

Cadastra um novo produto no catálogo.

O endpoint recebe os dados definidos pelo DTO `CriarProdutoDto` e retorna informações do produto cadastrado.

Exemplo de corpo da requisição:

```json
{
  "nome": "Pasta de dente Sorriso",
  "preco": 5.99,
  "categoria": "higiênico"
}
```

Exemplo ilustrativo de resposta:

```json
{
  "id": 150,
  "nome": "Pasta de dente Sorriso",
  "preco": 5.99,
  "categoria": "higiênico",
  "criadoEm": "21/10/2026"
}
```

O código documenta uma resposta de sucesso com status `201` e uma resposta de erro `400` para dados inválidos. O exemplo de resposta acima é ilustrativo; os valores reais dependem da execução da aplicação.

## 🧾 DTO e propriedades documentadas

O arquivo `src/produtos/dto/criar-produtos.dto.ts` define os campos necessários para cadastrar um produto:

| Campo | Tipo | Exemplo | Descrição |
|---|---|---|---|
| `nome` | `string` | `Pasta de dente Sorriso` | Nome comercial do produto cadastrado |
| `preco` | `number` | `5.99` | Preço unitário de venda |
| `categoria` | `string` | `higiênico` | Categoria à qual o produto pertence |

Cada campo utiliza o decorator `@ApiProperty()` para exibir exemplos e descrições na documentação do Swagger.

## 🧪 Como testar

1. Inicie o servidor.
2. Abra `http://localhost:3000/docs` no navegador.
3. Expanda a seção **Produtos**.
4. Selecione `POST /produtos` e clique em **Try it out**.
5. Informe um JSON com `nome`, `preco` e `categoria`.
6. Execute a requisição e confira o status HTTP e a resposta.
7. Teste também `GET /status` para verificar o funcionamento do servidor.

A configuração inclui Bearer Auth no Swagger. Caso uma operação exija autenticação, utilize o botão **Authorize** e informe o token esperado pela aplicação.

## ▶️ Como executar o projeto

Entre na pasta da aula e instale as dependências:

```bash
npm install
```

Inicie o servidor em modo de desenvolvimento:

```bash
npm run start:dev
```

A API utiliza a porta `3000` conforme a configuração mostrada no projeto.

- API: `http://localhost:3000`
- Documentação Swagger: `http://localhost:3000/docs`

## 📌 Conceitos praticados

- Documentação automática de APIs;
- Configuração do Swagger no NestJS;
- `DocumentBuilder` e `SwaggerModule`;
- `ApiTags`, `ApiOperation` e `ApiResponse`;
- `ApiProperty` em DTOs;
- Documentação de corpos de requisição;
- Organização e teste de endpoints REST;
- Configuração de autenticação Bearer na interface Swagger.

## 👨‍💻 Autor

**Gustavo Castilho Machado**

Projeto desenvolvido como atividade prática durante os estudos de Programação Full Stack, com foco em desenvolvimento Back-End usando NestJS.
