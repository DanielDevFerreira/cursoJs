// ideal para usar quando a quantidade dos parametros for dinâmica
function somarRenda(...meses: number[]){
    return meses.reduce((rendaTotal: number, rendaAtual: number) => {
        return rendaTotal + rendaAtual;
    }, 0);
}

console.log(somarRenda(2,2,3,4,5))