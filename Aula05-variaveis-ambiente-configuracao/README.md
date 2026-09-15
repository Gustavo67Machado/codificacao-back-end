Aula 05 - Variáveis de Ambiente e Configuração

📚 Sobre a aula

Nesta aula foi desenvolvido um exemplo em Node.js para trabalhar com variáveis de ambiente, utilizando o pacote dotenv.

A prática demonstra como separar configurações do código-fonte, como porta do servidor, chave de API e URL de banco de dados. Essa abordagem ajuda a manter informações de configuração mais organizadas e evita colocar dados sensíveis diretamente no código.

🎯 Objetivos

Aprender a utilizar variáveis de ambiente no Node.js.

Configurar o pacote dotenv.

Utilizar o arquivo .env para armazenar configurações.

Criar um arquivo .env.example como modelo.

Impedir que o .env seja enviado para o GitHub.

Acessar variáveis de ambiente usando process.env.

Validar uma variável obrigatória antes de iniciar a aplicação.

🛠️ Tecnologias utilizadas

Node.js

JavaScript

dotenv

npm

Git / GitHub

Visual Studio Code

📁 Estrutura do projeto

Aula05-variaveis-ambiente-configuracao/ ├── node_modules/ ├── .env ├── .env.example ├── .gitignore ├── app.js ├── package.json ├── package-lock.json └── README.md

Principais arquivos

Arquivo Função

.env Armazena as configurações reais utilizadas localmente

.env.example Modelo das variáveis necessárias para executar o projeto

.gitignore Impede o envio do .env, node_modules e arquivos de log

app.js Código principal da aplicação

package.json Configura o projeto e suas dependências

⚙️ Configuração do projeto

Primeiro, foi instalado o pacote dotenv:

npm install dotenv

Depois, o dotenv foi carregado no início do arquivo app.js:

import dotenv from 'dotenv';

dotenv.config();

Com isso, as informações do arquivo .env podem ser acessadas através de process.env.

🔐 Variáveis de ambiente

O arquivo .env.example foi criado como modelo:

PORT= API_KEY_PAGAMENTO= DATABASE_URL=

No arquivo .env, são colocados os valores utilizados localmente.

⚠️ O arquivo .env não deve ser compartilhado ou enviado para o GitHub quando possuir chaves, senhas, tokens ou outras informações privadas.

💻 Funcionamento do app.js

A aplicação utiliza as seguintes variáveis:

const porta = process.env.PORT || 8080; const apikey = process.env.API_KEY_PAGAMENTO; const dbUrl = process.env.DATABASE_URL;

A aplicação também verifica se a chave da API foi configurada:

if (!apikey) { console.error('ERRO CRÍTICO: a chave API_KEY_PAGAMENTO não está definida nas variáveis de ambiente!'); process.exit(1); }

Caso a variável obrigatória não exista, o programa encerra a execução para evitar que a aplicação funcione com uma configuração incompleta.

Quando a configuração está correta, são exibidas mensagens no console informando a porta utilizada, a conexão configurada e o status da chave da API.

🚫 Proteção com .gitignore

O projeto possui um .gitignore configurado para ignorar:

.env node_modules/ *.log

Dessa forma, o arquivo .env permanece apenas no ambiente local e não é incluído no controle de versão.

▶️ Como executar

Instalar as dependências
Dentro da pasta da aula:

npm install

Criar o arquivo .env
Crie um arquivo chamado:

.env

Utilize o .env.example como referência e preencha os valores necessários.

Executar a aplicação
node app.js

Se a configuração estiver correta, a aplicação exibirá mensagens no terminal indicando que o serviço foi carregado.

📌 Conceitos praticados

Nesta atividade foram praticados conceitos importantes de desenvolvimento backend:

Variáveis de ambiente.

Configuração externa da aplicação.

Uso do process.env.

Utilização do pacote dotenv.

Arquivos .env e .env.example.

Proteção de informações sensíveis.

Validação de configurações obrigatórias.

Encerramento controlado da aplicação com process.exit().

🔒 Boas práticas

O uso de variáveis de ambiente é importante principalmente quando o projeto possui informações que não devem ficar diretamente no código-fonte.

Exemplos:

Chaves de APIs.

Senhas.

URLs de bancos de dados.

Tokens de autenticação.

Configurações diferentes para desenvolvimento e produção.

O .env.example pode ser compartilhado no repositório porque serve apenas como referência das variáveis necessárias, enquanto o .env deve permanecer protegido.

📖 Resultado da atividade

Ao final da aula, foi criado um pequeno serviço em Node.js capaz de carregar configurações externas através do dotenv, validar uma variável obrigatória e iniciar a aplicação utilizando os valores definidos no ambiente.

👨‍💻 Autor

Gustavo Castilho Machado

Projeto desenvolvido para fins de estudo e prática de desenvolvimento