import dotenv from  'dotenv';

dotenv.config();

function iniciarAplicacao(){

    const porta = process.env.PORT || 8080; 
    const apikey = process.env.API_KEY_PAGAMENTO;
    const dbUrl = process.env.DATABASE_URL;

if(!apikey){
    console.error('ERRO CRÍTICO: a chave API_KEY_PAGAMENTO não está definida nas variáveis de ambiente!');
    process.exit(1);
    }   
    console.log('=== SERVIÇO DE CONFIGURAÇÃO CARREGADO')
    console.log(`Servidor Rodando na porta: ${porta}`);
    console.log(`Conexão Banco de dados: ${dbUrl}`);
    console.log(`Status da API de Pagamento: chave de tamanho ${apikey.length} autenticado.`);
}
iniciarAplicacao();