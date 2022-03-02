const customExpress = require('./config');
const conexao = require('./infraestrutura/conexao');
const { criarAtendimentos } = require('./infraestrutura/tabelas');
const Tabelas = require("./infraestrutura/tabelas");
conexao.connect((error) => {
    if(error){
        console.log(error);
    }else{
        Tabelas.init(conexao);
        const app = customExpress();
        app.listen('3000', console.log('funcionando'));
    }
})
