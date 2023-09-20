console.log(`SOBRE ATENDIMENTOS - 19/09/2023`);

console.log(`\n`);

const MEDIA_DE_CHAMADOS = 0;
let chamadosDoDia = 0;

console.log(`- Hoje atendemos ${chamadosDoDia} chamados, sendo que a média diária é de ${MEDIA_DE_CHAMADOS} diários`);

console.log(`\n`);

const IMAGENS_REFEITAS_HALL = 0;
const IMAGENS_REFEITAS_TESOURARIA = 0;

console.log(` - Foram refeitas ${IMAGENS_REFEITAS_HALL} imagens no Hall, e, ${IMAGENS_REFEITAS_TESOURARIA} imagens refeitas na tesouraria`);

console.log(`\n`);

const LISTA_CHAMADOS_ATENDIDOS = new Array(``);
console.log(LISTA_CHAMADOS_ATENDIDOS);
console.log(`\n`);
let chamadosParaFechar = 0;
console.log(`CHAMADOS PARA FECHAR: ${chamadosParaFechar}`);

if (chamadosDoDia >= MEDIA_DE_CHAMADOS) {
    console.log(` - Hoje o dia foi pegado, atendemos ${chamadosDoDia}, sendo que a média é de ${MEDIA_DE_CHAMADOS}`);
} else {
    console.log(` - Dia tranquilo, atendemos pouco, ${chamadosDoDia} chamados só`);
};

chamadosParaFechar = 0; 

if(chamadosParaFechar <=0){
    console.log(` \n - Todos meus chamados foram fechados, muito bom`)
}else{
    console.log(`Feche seus chamados`);
}

