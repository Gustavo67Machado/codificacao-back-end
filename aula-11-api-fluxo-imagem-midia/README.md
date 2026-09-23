# Aula 11 - API de Fluxo de Imagem e Mídia

## 📚 Sobre a aula

Nesta aula foi desenvolvido um fluxo de upload de arquivos utilizando **NestJS**, permitindo o envio de imagens através de uma API.

O projeto utiliza o **Multer** para receber e armazenar os arquivos enviados, além do **UUID** para gerar nomes únicos para cada arquivo.

---

## 🎯 Objetivo

Criar uma API capaz de:

- Receber arquivos através de requisições HTTP;
- Realizar upload de imagens;
- Validar os tipos de arquivos permitidos;
- Limitar o tamanho dos arquivos;
- Gerar nomes únicos para os arquivos;
- Armazenar os arquivos localmente;
- Retornar informações sobre o arquivo enviado.

---

## 🛠️ Tecnologias utilizadas

- Node.js
- NestJS
- TypeScript
- Multer
- UUID
- Express
- Postman / Insomnia

---

## 📁 Estrutura principal

```text
aula-11-api-fluxo-imagem-midia/
│
├── src/
│   ├── app.controller.ts
│   ├── app.controller.spec.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── main.ts
│   ├── media.controller.ts
│   └── media.module.ts
│
├── uploads/
│   └── arquivos enviados
│
├── test/
│
├── package.json
├── package-lock.json
├── nest-cli.json
├── tsconfig.json
└── README.md

📤 Endpoint de Upload

O endpoint responsável pelo envio de arquivos é:

POST /media/upload

A requisição utiliza multipart/form-data.

O campo utilizado para enviar o arquivo é:

arquivo
Exemplo
POST http://localhost:3000/media/upload

Body:

multipart/form-data

arquivo = imagem.jpg
📸 Validação dos arquivos

A API permite os seguintes formatos de imagem:

.jpg
.jpeg
.png
.gif
.webp

Arquivos com outros formatos são rejeitados.

Também foi configurado um limite de tamanho de:

2 MB
🔐 Nome único dos arquivos

Para evitar conflitos entre arquivos com o mesmo nome, a aplicação utiliza o pacote uuid.

O arquivo recebe um identificador único antes de ser armazenado.

Exemplo:

adc08c9f-b8e0-4b2e-83ca-5e4ed5bb0f95.jpg
📂 Armazenamento

Os arquivos enviados são armazenados na pasta:

uploads/

A aplicação também disponibiliza essa pasta através da rota:

/api/uploads

Assim, após o upload, o arquivo pode ser acessado através de uma URL semelhante a:

http://localhost:3000/api/uploads/nome-do-arquivo.jpg
✅ Teste realizado

Durante os testes foi enviado uma imagem através do Postman/Insomnia utilizando:

POST http://localhost:3000/media/upload

A API retornou:

201 Created

E uma resposta semelhante a:

{
  "filename": "arquivo",
  "size": 688511,
  "url": "http://localhost:3000/api/uploads/arquivo.jpg"
}

O arquivo também foi armazenado corretamente dentro da pasta uploads.

🚀 Execução do projeto

Para instalar as dependências:

npm install

Para iniciar o projeto em modo de desenvolvimento:

npm run start:dev

A aplicação será executada em:

http://localhost:3000
📌 Conceitos aprendidos

Nesta aula foram trabalhados os seguintes conceitos:

Upload de arquivos com NestJS;
FileInterceptor;
UploadedFile;
multipart/form-data;
Integração com Multer;
Armazenamento local de arquivos;
Validação de extensão/MIME type;
Limitação de tamanho de arquivo;
Geração de identificadores com UUID;
Criação de módulos e controllers no NestJS;
Disponibilização de arquivos estáticos;
Testes de API utilizando Postman/Insomnia.

👨‍💻 Autor

Gustavo Castilho Machado

Estudante de desenvolvimento Back-End.

Este projeto foi desenvolvido como parte dos estudos de programação e desenvolvimento de APIs utilizando Node.js e NestJS.
## FAQ

#### Question 1

Answer 1

#### Question 2

Answer 2

