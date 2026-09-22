# 💻 Codificação Back-End

Repositório destinado ao armazenamento das atividades, exercícios e projetos desenvolvidos durante meus estudos de desenvolvimento Back-End.

Neste repositório serão adicionados conteúdos relacionados a programação, Node.js, NPM, APIs, banco de dados e outros conceitos importantes para o desenvolvimento de aplicações Back-End.

---

# 📚 Aula 01 - Revisão Node.js e NPM

## 📝 Sobre a aula

Nesta primeira atividade foi realizada uma revisão dos conceitos básicos de **Node.js** e **NPM (Node Package Manager)**.

Durante a aula, foi criado um projeto utilizando Node.js e configurado o arquivo `package.json` através do NPM.

Também foi utilizado o módulo nativo **`os`**, disponibilizado pelo próprio Node.js, para obter informações sobre o sistema operacional e os componentes de hardware do computador.

A atividade consiste em criar um pequeno programa de diagnóstico capaz de apresentar algumas informações do sistema diretamente no terminal.

---

## 🎯 Objetivos da atividade

Os principais objetivos desta atividade foram:

- Revisar o funcionamento do Node.js;
- Entender a utilização do NPM;
- Criar um projeto Node.js;
- Gerar e compreender o arquivo `package.json`;
- Utilizar módulos nativos do Node.js;
- Conhecer o módulo `os`;
- Obter informações do sistema operacional;
- Obter informações sobre a memória RAM;
- Identificar a quantidade de núcleos do processador;
- Identificar o modelo do processador;
- Executar um programa JavaScript através do terminal.

---

## 🛠️ Tecnologias utilizadas

- **Node.js**
- **NPM**
- **JavaScript**
- **Módulo `os`**
- **Visual Studio Code**
- **Git e GitHub**

---

# 📂 Estrutura do projeto

A atividade foi organizada da seguinte maneira:

```text
codificacao-back-end/
│
├── Aula01-revisao-nodejs-npm/
│   │
│   ├── diagnostico.js
│   ├── package.json
│   └── README.md
│
└── README.md

📦 Inicialização do projeto

Para iniciar o projeto Node.js, foi utilizado o comando:

npm init -y

O comando npm init -y cria automaticamente um arquivo package.json com as configurações iniciais do projeto.

O arquivo gerado possui informações como:

Nome do projeto;
Versão;
Arquivo principal;
Autor;
Licença;
Tipo do projeto;
Scripts.

🖥️ Módulo os

Nesta atividade foi utilizado o módulo nativo os do Node.js.

Esse módulo permite acessar informações relacionadas ao sistema operacional e ao hardware do computador.

Para utilizar o módulo, foi feita a seguinte importação:

const os = require('os');

A partir disso, foi possível utilizar diferentes funções disponibilizadas pelo módulo.

🔎 Informações coletadas

O programa desenvolvido coleta algumas informações do computador.

💻 Sistema operacional

Foi utilizada a função:

os.platform()

Ela retorna a plataforma do sistema operacional.

No computador utilizado durante a atividade, o resultado foi:

win32

🧠 Memória RAM total

Para obter a quantidade total de memória RAM disponível no sistema, foi utilizada:

os.totalmem()

O valor retornado pelo Node.js é apresentado em bytes.

Por isso, foi feita uma conversão para gigabytes:

const memoriaTotal = (os.totalmem() / (1024 ** 3)).toFixed(2);

O resultado obtido durante a aula foi:

15.68 GB

💾 Memória RAM livre

Também foi utilizada a função:

os.freemem()

Essa função retorna a quantidade de memória RAM que está livre no momento da execução do programa.

Assim como a memória total, o valor foi convertido para gigabytes:

const memoriaLivre = (os.freemem() / (1024 ** 3)).toFixed(2);

O resultado obtido durante a execução foi:

6.80 GB

⚙️ Núcleos do processador

Para obter informações sobre o processador, foi utilizada:

os.cpus()

Essa função retorna informações sobre os CPUs disponíveis no sistema.

Para descobrir a quantidade de núcleos listados pelo Node.js, foi utilizado:

cpus.length

O resultado obtido foi:

20

🔧 Modelo do processador

Também foi possível obter o modelo do processador através das informações retornadas por os.cpus().

Foi utilizado:

cpus[0].model

O processador identificado durante a execução foi:

12th Gen Intel(R) Core(TM) i7-12700

// Importação do módulo "os" do Node.js para obter informações do servidor
const os = require('os');

// Exibindo informações sobre o sistema operacional e hardware
console.log('===DIAGNÓSTICO DO SERVIDOR===\n');

const plataforma = os.platform();

const memoriaTotal = (os.totalmem() / (1024 ** 3)).toFixed(2);

const memoriaLivre = (os.freemem() / (1024 ** 3)).toFixed(2);

const cpus = os.cpus();

console.log(`Arquitetura OS: ${plataforma}`);
console.log(`Memória RAM total: ${memoriaTotal} GB`);
console.log(`Memória RAM livre: ${memoriaLivre} GB`);
console.log(`Cores da CPU: ${cpus.length}`);
console.log(`Processador: ${cpus[0].model}`);

👨‍💻 Autor

Gustavo Castilho Machado

Estudante de Programação Full Stack.

Este repositório faz parte dos meus estudos e práticas de desenvolvimento de software.