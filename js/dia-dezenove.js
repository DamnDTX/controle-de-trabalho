console.log(`SOBRE ATENDIMENTOS - 19/09/2023`);

console.log(`\n`);

const MEDIA_DE_CHAMADOS = 25;
let chamadosDoDia = 26;

console.log(`- Hoje atendemos ${chamadosDoDia} chamados, sendo que a média diária é de ${MEDIA_DE_CHAMADOS} diários`);

console.log(`\n`);

const IMAGENS_REFEITAS_HALL = 4;
const IMAGENS_REFEITAS_TESOURARIA = 4;

console.log(` - Foram refeitas ${IMAGENS_REFEITAS_HALL} imagens no Hall, e, ${IMAGENS_REFEITAS_TESOURARIA} imagens refeitas na tesouraria`);

console.log(`\n`);

const LISTA_CHAMADOS_ATENDIDOS = new Array(`Uniorg dos chamados atendidos hoje: 001-3291,001-4355,001-0525,001-0636-001-1208,001-0087, 001-4091, 001-0061,001-0800,001-0023,001-1253,001-0304,001-0297,001-3677 `);
console.log(LISTA_CHAMADOS_ATENDIDOS);
console.log(`\n`);
let chamadosParaFechar = 0;
console.log(`CHAMADOS PARA FECHAR: ${chamadosParaFechar}`)
console.log(`\n`);

if (chamadosDoDia >= MEDIA_DE_CHAMADOS) {
    console.log(` - Hoje o dia foi pegado, atendemos ${chamadosDoDia}, sendo que a média é de ${MEDIA_DE_CHAMADOS}`);
} else {
    console.log(` - Dia tranquilo, atendemos pouco, ${chamadosDoDia} chamados só`);
};

chamadosParaFechar = 0; 

if(chamadosParaFechar<1){
    console.log(`Todos meus chamados foram fechados, muito bom`);
}else{
    console.log(`Feche seus chamados`);
}