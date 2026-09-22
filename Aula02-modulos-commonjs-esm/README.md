# 💻 Aula 02 - Módulos CommonJS e ESM

## 📚 Sobre a atividade

Nesta aula foram estudados conceitos relacionados à utilização de **módulos no Node.js**, com foco na organização do código e na utilização do sistema de módulos **ESM (ECMAScript Modules)**.

Durante a atividade foi desenvolvido um pequeno sistema de registro de logs. O programa recebe mensagens, adiciona a data e o horário atual e salva essas informações automaticamente em um arquivo chamado `system.log`.

Também foram utilizados recursos nativos do Node.js para manipulação de arquivos e diretórios.

---

## 🎯 Objetivos da atividade

Os principais objetivos desta atividade foram:

- Compreender o funcionamento de módulos no Node.js;
- Revisar conceitos de **CommonJS e ESM**;
- Utilizar `import` e `export`;
- Configurar um projeto Node.js para trabalhar com módulos ESM;
- Utilizar módulos nativos do Node.js;
- Trabalhar com arquivos e diretórios;
- Criar funções reutilizáveis;
- Utilizar funções assíncronas;
- Registrar informações em arquivos de log;
- Trabalhar com data e hora;
- Utilizar `try/catch` para tratamento de erros.

---

# 🛠️ Tecnologias utilizadas

- **Node.js**
- **JavaScript**
- **NPM**
- **ESM (ECMAScript Modules)**
- **Visual Studio Code**
- **Git e GitHub**

---

# 📂 Estrutura do projeto

A atividade foi organizada da seguinte maneira:

```text
Aula02-modulos-commonjs-esm/
│
├── logs/
│   └── system.log
│
├── index.js
├── package.json
├── utils.js
└── README.md

---

📄 index.js

É o arquivo principal da aplicação.

Ele é responsável por:

Importar os módulos necessários;
Criar o diretório de logs;
Criar ou acessar o arquivo system.log;
Formatar as mensagens;
Salvar os registros;
Exibir uma mensagem de sucesso no terminal.
📄 utils.js

Contém uma função responsável por formatar as mensagens de log, adicionando a data e o horário em que o registro foi realizado.

📄 package.json

Contém as configurações do projeto Node.js.

Nesta atividade foi utilizado:

"type": "module"

Essa configuração permite utilizar a sintaxe import e export do padrão ESM.

📁 logs/

Diretório criado pelo programa para armazenar os arquivos de registro.

📄 system.log

Arquivo utilizado para armazenar as mensagens registradas pelo sistema.

📦 Configuração do projeto

O projeto foi inicializado utilizando o NPM.

O arquivo package.json foi configurado para utilizar o sistema de módulos ESM:

{
  "name": "aula02-modulos-commonjs-esm",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module"
}

A propriedade:

"type": "module"

faz com que os arquivos JavaScript do projeto sejam interpretados como módulos ESM.

🧩 Módulos utilizados

Durante a atividade foram utilizados alguns módulos e recursos importantes do Node.js.

fs/promises

Foi utilizado para trabalhar com arquivos e diretórios de forma assíncrona.

import fs from 'fs/promises';

Entre as funções utilizadas estão:

fs.mkdir()

e:

fs.appendFile()
fs.mkdir()

Utilizado para criar o diretório onde os arquivos de log serão armazenados.

Foi utilizada a opção:

{ recursive: true }

Isso permite criar o diretório mesmo que alguma parte do caminho ainda não exista.

fs.appendFile()

Utilizado para adicionar uma nova mensagem ao arquivo system.log.

Dessa forma, os registros anteriores são mantidos e as novas mensagens são adicionadas ao final do arquivo.

📁 Módulo path

Também foi utilizado o módulo path:

import path from 'path';

Ele permite trabalhar com caminhos de arquivos e diretórios de forma mais segura.

Na atividade foi utilizada a função:

path.join()

Exemplo:

const pastaLog = path.join(__dirname, 'logs');

Essa função é utilizada para montar o caminho da pasta de logs.

🌐 Módulo url

Foi utilizado:

import { fileURLToPath } from 'url';

Como o projeto utiliza ESM, algumas informações que normalmente estão disponíveis diretamente no CommonJS precisam ser obtidas de outra forma.

Foi utilizado:

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

Essas linhas permitem obter o caminho do arquivo atual e o diretório onde ele está localizado.

📝 Função de registro de logs

No arquivo index.js foi criada a função:

async function salvarLogSystem(mensagemLog) {
    try {
        const pastaLog = path.join(__dirname, 'logs');
        const arquivoLog = path.join(pastaLog, 'system.log');

        await fs.mkdir(pastaLog, { recursive: true });

        const registroLog = formatLog(mensagemLog);

        await fs.appendFile(arquivoLog, registroLog, 'utf-8');

        console.log('Log Registrado com sucesso!');
    } catch (erro) {
        console.error('Erro ao Registrar Log: ', erro);
    }
}

A função recebe uma mensagem como parâmetro e realiza todo o processo necessário para registrá-la.

⏰ Formatação de data e hora

No arquivo utils.js foi criada uma função chamada formatLog().

export function formatLog(mensagem) {
    const dataAtual = new Date().toISOString().split('T')[0];
    const horaAtual = new Date().toLocaleTimeString();

    return `[${dataAtual} ${horaAtual}] - ${mensagem}`;
}

Essa função recebe uma mensagem e adiciona:

Data atual;
Horário atual;
Mensagem enviada.

O resultado segue o seguinte formato:

[DATA HORA] - MENSAGEM
📋 Mensagens registradas

No arquivo index.js, a função foi executada com duas mensagens:

salvarLogSystem('Inicialização do servidor concluída!\n');
salvarLogSystem('Conexão com banco de dados estabelecida!');

Dessa forma, o sistema registra informações relacionadas à inicialização do servidor e à conexão com o banco de dados.

📄 Arquivo de log

Após a execução do programa, foi criado o arquivo:

logs/system.log

Durante a atividade, o arquivo apresentou registros semelhantes a:

[2026-09-11 16:31:12] - Inicialização do servidor concluída!

[2026-09-11 16:31:12] - Conexão com banco de dados estabelecida!

O arquivo pode continuar recebendo novos registros sempre que a função salvarLogSystem() for executada.

▶️ Como executar o projeto

Para executar a atividade, primeiro é necessário ter o Node.js instalado.

No terminal, entre na pasta do projeto:

cd Aula02-modulos-commonjs-esm

Depois execute:

node index.js

Se a execução ocorrer corretamente, será exibida uma mensagem semelhante a:

Log Registrado com sucesso!
Log Registrado com sucesso!

Depois disso, o arquivo:

logs/system.log

será criado ou atualizado com os novos registros.

🔄 Funcionamento da aplicação

O funcionamento do programa pode ser resumido nas seguintes etapas:

1. Executar index.js
        ↓
2. Importar os módulos
        ↓
3. Receber a mensagem
        ↓
4. Criar a pasta "logs"
        ↓
5. Formatar data e hora
        ↓
6. Abrir/Criar "system.log"
        ↓
7. Adicionar o registro
        ↓
8. Exibir mensagem de sucesso
📖 Principais aprendizados

Nesta atividade foi possível praticar diversos conceitos importantes de Node.js.

🔹 Módulos ESM

Foi praticada a utilização de:

import

e:

export

para organizar e reutilizar código entre diferentes arquivos.

🔹 package.json

Foi aprendido como configurar um projeto Node.js para utilizar ESM através de:

"type": "module"
🔹 Manipulação de arquivos

Foi utilizada a API fs/promises para criar diretórios e escrever informações em arquivos.

🔹 Caminhos de arquivos

O módulo path foi utilizado para montar os caminhos dos diretórios e arquivos.

🔹 Funções assíncronas

A função:

async function

foi utilizada junto com:

await

para trabalhar com operações de arquivos de forma assíncrona.

🔹 Tratamento de erros

Foi utilizado:

try {
    // código
} catch (erro) {
    // tratamento do erro
}

para evitar que erros durante o registro dos logs interrompessem o programa sem uma mensagem explicativa.

🔹 Data e hora

Foi utilizado o objeto:

new Date()

para obter a data e o horário no momento em que o log é criado.

🚀 Conclusão

A atividade permitiu colocar em prática conceitos fundamentais do desenvolvimento Back-End com Node.js.

A criação do sistema de logs mostrou como diferentes módulos podem ser utilizados em conjunto para construir uma aplicação simples e organizada.

Além disso, a separação das funções entre index.js e utils.js ajuda a manter o código mais organizado e facilita sua reutilização em projetos maiores.

👨‍💻 Autor

Gustavo Castilho Machado

Estudante de Programação Full Stack.

Este projeto faz parte das atividades e estudos de desenvolvimento Back-End.
