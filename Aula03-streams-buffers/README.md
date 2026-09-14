💻 Aula 03 - Streams e Buffers
📚 Sobre a atividade
Nesta aula foram treinados os conceitos de Streams e Buffers no Node.js , utilizando esses recursos para trabalhar com arquivos e grandes quantidades de dados de maneira mais eficiente.

Durante a atividade foi desenvolvido um sistema de processamento de toras. Primeiro, foi criado um arquivo de log simulado contendo uma grande quantidade de registros. Em seguida, esse arquivo foi lido utilizando Streams , permitindo que os dados fossem processados ​​gradualmente.

O programa também identifica os registros que possuem a palavra ERRORe salva essas informações separadamente em um novo arquivo chamado apenas_erros.log.

Além disso, foi utilizado o recurso de monitoramento de memória do Node.js para observar o consumo de memória durante o processamento dos dados.

🎯 Objetivos da atividade
Os principais objetivos desta aula foram:

Compreender o conceito de Streams no Node.js;
Conhecer o funcionamento de Buffers;
Trabalhar com leitura de arquivos através de Streams;
Trabalhar com escrita de arquivos através de Streams;
Processar grandes quantidades de dados;
Evitar o carregamento de todo o arquivo na memória;
Criar arquivos de log;
Filtrar informações de um arquivo;
identificar mensagens de erro;
Utilização readlinepara processar arquivos linha por linha;
Monitore o consumo de memória da aplicação.
🛠️ Tecnologias utilizadas
Node.js
JavaScript
NPM
Correntes
Buffers
Sistema de Arquivos ( fs)
Readline
Visual Studio Code
Git e GitHub
📂 Estrutura do projeto
A atividade foi organizada da seguinte forma:

Aula03-streams-buffers/
│
├── logs/
│
├── apenas_erros.log
├── gerarLogGigante.js
├── processarLogs.js
├── servidor.log
├── server.js
├── package.json
└── README.md

📄 gerarLogGigante.js

Arquivo responsável por gerar um arquivo de log simulado com uma grande quantidade de registros.

Foi utilizado um WriteStream para escrever os dados no arquivo:

const streamEscrita = fs.createWriteStream('servidor.log');

O programa gera aproximadamente 200.000 linhas de registros para simular um arquivo de log grande.

📄 processarLogs.js

Arquivo responsável por realizar o processamento do arquivo servidor.log.

Ele utiliza um ReadStream para realizar a leitura do arquivo e o módulo readline para processar o conteúdo linha por linha.

Durante o processamento, o programa verifica se cada linha contém:

ERROR

Quando encontra um erro, a linha é adicionada ao arquivo:

apenas_erros.log
📄 servidor.log

Arquivo que contém os registros simulados do servidor.

Os registros possuem informações como:

Data;
Número da linha;
Status HTTP;
Mensagem;
Tipo do registro.

Exemplo:

[2026-09-11] Line 0: Status 200 - Mensagem de teste ERROR
[2026-09-11] Line 1: Status 200 - Mensagem de teste INFO
[2026-09-11] Line 2: Status 200 - Mensagem de teste INFO

O arquivo contém uma grande quantidade de registros para simular uma situação próxima à encontrada em sistemas reais.

📄 apenas_erros.log

Arquivo criado para armazenar somente os registros que possuem a informação:

ERROR

Dessa forma, é possível separar os erros dos demais registros do servidor.

🌊 O que são Streams?

Streams são recursos utilizados para trabalhar com dados de maneira contínua, permitindo que eles sejam processados aos poucos.

Em vez de carregar um arquivo inteiro para a memória, podemos utilizar uma Stream para ler os dados em partes.

Isso é especialmente importante quando estamos trabalhando com arquivos grandes.

Nesta atividade foram utilizados dois tipos principais:

📖 ReadStream

Utilizado para realizar a leitura do arquivo:

const streamLeitura = fs.createReadStream('servidor.log');
✍️ WriteStream

Utilizado para escrever dados em arquivos:

const streamEscrita = fs.createWriteStream('servidor.log');

Também foi utilizado outro WriteStream para salvar somente os erros:

const streamEscrita = fs.createWriteStream('apenas_erros.log');
🧠 Processamento linha por linha

Para facilitar o processamento do arquivo de log, foi utilizado o módulo readline:

import readline from 'readline';

Depois foi criada uma interface utilizando o Stream de leitura:

const leitorLinhaLinha = readline.createInterface({
    input: streamLeitura,
    crlfDelay: Infinity
});

Isso permite percorrer o arquivo linha por linha:

for await (const linha of leitorLinhaLinha) {

Assim, cada linha pode ser analisada individualmente.

🔎 Filtrando os erros

Durante o processamento, o programa verifica se a linha possui a palavra:

if (linha.includes('ERROR')) {

Quando a condição é verdadeira, a linha é gravada no arquivo de erros:

streamEscrita.write(linha + '\n');

Ao mesmo tempo, é incrementado um contador:

totalErros++;

Dessa maneira, ao final do processamento, o programa consegue informar a quantidade de erros encontrados.

💾 Monitoramento de memória

Outro ponto trabalhado na atividade foi o acompanhamento do consumo de memória da aplicação.

Foi utilizada a função:

process.memoryUsage();

Ela permite obter informações sobre o uso de memória do processo Node.js.

No código, foram utilizadas informações como:

const memoria = process.memoryUsage();

e:

const rssMB = (memoria.rss / 1024 / 1024).toFixed(2);

Também foi obtido o valor de memória utilizado pelo Heap:

const heapMB = (memoria.heapUsed / 1024 / 1024).toFixed(2);

Essas informações são exibidas no terminal durante o processamento.

📊 Informações de memória

O programa apresenta informações semelhantes a:

[Início] RSS: XX MB | Heap Utilizado: XX MB

e ao final:

[Fim] RSS: XX MB | Heap Utilizado: XX MB

Isso permite observar o comportamento do consumo de memória antes e depois do processamento do arquivo.

🏗️ Geração do arquivo de log

Para simular um servidor produzindo muitos registros, foi utilizado:

const streamEscrita = fs.createWriteStream('servidor.log');

Em seguida, foi utilizado um loop:

for (let i = 0; i < 200000; i++) {

O objetivo foi gerar uma grande quantidade de informações.

O tipo do registro é definido através de uma condição:

const tipo = i % 7 === 0 ? 'ERROR' : 'INFO';

Com isso, algumas linhas recebem o tipo:

ERROR

e as demais recebem:

INFO
🔄 Funcionamento da atividade

O funcionamento pode ser resumido da seguinte maneira:

1. Gerar logs simulados
          ↓
2. Criar o arquivo servidor.log
          ↓
3. Gerar milhares de registros
          ↓
4. Abrir servidor.log com ReadStream
          ↓
5. Ler o arquivo linha por linha
          ↓
6. Verificar cada registro
          ↓
7. Identificar os registros ERROR
          ↓
8. Salvar os erros em apenas_erros.log
          ↓
9. Contabilizar os erros encontrados
          ↓
10. Exibir o consumo de memória
▶️ Como executar

Primeiramente, é necessário possuir o Node.js instalado.

Entre na pasta da atividade:

cd Aula03-streams-buffers
1. Gerar o arquivo de logs

Execute:

node gerarLogGigante.js

Esse comando gera o arquivo:

servidor.log

com uma grande quantidade de registros.

2. Processar os logs

Depois execute:

node processarLogs.js

O programa irá:

Ler o arquivo servidor.log;
Processar as linhas;
Procurar registros com ERROR;
Criar o arquivo apenas_erros.log;
Contabilizar os erros;
Exibir informações sobre o consumo de memória.
📄 Exemplo de registro

Um registro do arquivo servidor.log segue um formato semelhante a:

[2026-09-11] Line 0: Status 200 - Mensagem de teste ERROR

Enquanto os registros comuns aparecem como:

[2026-09-11] Line 1: Status 200 - Mensagem de teste INFO

Os registros contendo ERROR são separados no arquivo:

apenas_erros.log
📖 Principais aprendizados

Nesta aula foram praticados conceitos importantes para o desenvolvimento Back-End.

🔹 Streams

Foi possível compreender como trabalhar com dados de forma contínua, evitando a necessidade de carregar todo o conteúdo de um arquivo grande de uma única vez.

🔹 ReadStream

Utilizado para realizar a leitura do arquivo de logs.

fs.createReadStream()
🔹 WriteStream

Utilizado para criar e escrever arquivos de forma eficiente.

fs.createWriteStream()
🔹 Readline

Utilizado para processar o arquivo linha por linha:

readline.createInterface()
🔹 Processamento assíncrono

Foi utilizada a estrutura:

for await (const linha of leitorLinhaLinha)

permitindo processar os dados de forma assíncrona.

🔹 Buffers

Os Buffers são utilizados pelo Node.js para trabalhar com dados binários e são importantes para o funcionamento de operações de entrada e saída, como leitura e escrita de arquivos e Streams.

🔹 Monitoramento de memória

Foi utilizado:

process.memoryUsage()

para observar o consumo de memória durante a execução.

🚀 Aplicação prática

Os conceitos utilizados nesta atividade podem ser aplicados em diversas situações reais de desenvolvimento Back-End, como:

Processamento de arquivos grandes;
Sistemas de logs;
Monitoramento de servidores;
Processamento de dados;
Upload e download de arquivos;
Leitura de arquivos CSV;
Processamento de informações em grande escala;
Sistemas que trabalham com grandes volumes de dados.

O uso de Streams é especialmente importante quando a aplicação precisa trabalhar com grandes quantidades de dados sem consumir memória excessivamente.

📌 Conclusão

A Aula 03 permitiu aprofundar os conhecimentos sobre o funcionamento do Node.js no processamento de arquivos e grandes volumes de dados.

Através da criação e processamento de um arquivo com aproximadamente 200.000 registros, foi possível observar na prática como utilizar Streams para leitura e escrita de arquivos.

Também foi implementado um sistema simples de filtragem de logs, capaz de identificar registros ERROR e armazená-los separadamente.

Por fim, o monitoramento de memória ajudou a compreender a importância de utilizar técnicas eficientes para o processamento de grandes arquivos.

👨‍💻 Autor

Gustavo Castilho Machado

Estudante de Programação Full Stack.

Este projeto faz parte das atividades e estudos de desenvolvimento Back-End.
