//! Importação do  módulo 'os' do Node.js para obter informações do servidor
const os = require('os');
//! exibindo informações sobre o sistema operacional do hardware
console.log('====DIAGNÓSTICO DO SERVIDOR===\n');

const plataforma = os.platform();
const memoriaTotal = (os.totalmem() / (1024 ** 3)).toFixed(2);//! obtem a memoria total em gigabyte 
const memoriaLivre = (os.freemem() / (1024 ** 3)).toFixed(2);//! obtem a memoria total em gigabyte 
const cpus = os.cpus(); //! obtendo informações sobre os processadores 

console.log(`Arquitetura OS: ${plataforma}`);
console.log(`Memoria RAM total: ${memoriaTotal} GB`);
console.log(`Memoria RAM Livre: ${memoriaLivre} GB`);
console.log(`Cores da CPU: ${cpus.length}`);
console.log(`Processador: ${cpus[0].model}`);


