# Aula 16 - Validação de Schema com Zod no NestJS

## 📚 Sobre a aula

Nesta aula foi implementada uma API utilizando **NestJS** com validação de dados através da biblioteca **Zod**.

O objetivo foi aprender como criar schemas para definir regras de validação e utilizar um **Pipe personalizado** para validar os dados recebidos nas requisições.

---

## 🎯 Objetivos

- Aprender a utilizar o Zod para validação de dados.
- Criar schemas personalizados.
- Implementar um Pipe de validação no NestJS.
- Validar dados enviados no corpo das requisições.
- Retornar mensagens de erro quando os dados forem inválidos.
- Utilizar `BadRequestException` para tratar erros de validação.

---

## 🛠️ Tecnologias utilizadas

- Node.js
- NestJS
- TypeScript
- Zod
- REST API

---

## 📁 Estrutura principal

```text
aula-16-validacao-schema-com-zod-nestjs/
├── src/
│   ├── app.controller.ts
│   ├── app.controller.spec.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── colaborador.schema.ts
│   ├── colaboradores.controller.ts
│   ├── main.ts
│   └── zod-validation.pipe.ts
├── test/
├── package.json
├── tsconfig.json
└── README.md
👤 Schema de Colaborador

Foi criado um schema utilizando o Zod para definir as regras de validação dos colaboradores.

Os campos utilizados foram:

nome: deve possuir no mínimo 3 caracteres.
email: deve possuir um formato de e-mail válido.
idade: deve ser um número entre 18 e 65 anos.
departamento: deve ser TI, RH ou Financeiro.

Exemplo das regras:

export const colaboradorSchema = z.object({
  nome: z.string().min(3),
  email: z.email(),
  idade: z.number()
    .min(18)
    .max(65),
  departamento: z.enum(['TI', 'RH', 'Financeiro'])
});
🔎 Pipe de validação

Foi criado o arquivo:

zod-validation.pipe.ts

Esse Pipe utiliza o método safeParse() do Zod para verificar se os dados recebidos estão de acordo com o schema.

Quando os dados são inválidos, uma resposta com status 400 Bad Request é retornada contendo os campos que apresentaram erro.

🚀 Endpoint

Foi criado um endpoint para cadastro de colaboradores:

POST /colaboradores

O endpoint utiliza o ZodValidationPipe para validar o corpo da requisição antes de processá-lo.

Exemplo de requisição válida:

{
  "nome": "Gustavo",
  "email": "gustavo@email.com",
  "idade": 21,
  "departamento": "TI"
}

Resposta:

{
  "message": "Colaborador criado com sucesso!"
}
❌ Validação de dados inválidos

Caso algum campo não siga as regras definidas no schema, a API retorna:

400 Bad Request

Com informações sobre os campos que possuem problemas.

Exemplo:

{
  "statusCode": 400,
  "errors": [
    {
      "campo": "nome",
      "mensagem": "O nome deve ter no mínimo 3 letras"
    }
  ]
}
🧩 Conceitos praticados

Durante a aula foram praticados:

Criação de schemas com Zod;
Tipagem utilizando z.infer;
Pipes personalizados no NestJS;
PipeTransform;
ArgumentMetadata;
BadRequestException;
Validação do body das requisições;
Tratamento de erros de validação;
Integração entre Zod e NestJS.
▶️ Como executar

Instale as dependências:

npm install

Execute o projeto em modo de desenvolvimento:

npm run start:dev

A aplicação será executada na porta:

http://localhost:3000
👨‍💻 Autor

Gustavo Castilho Machado

Projeto desenvolvido durante as aulas de Programação Full Stack.