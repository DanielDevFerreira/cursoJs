"use strict";
function somarRenda(...meses) {
    return meses.reduce((rendaTotal, rendaAtual) => {
        return rendaTotal + rendaAtual;
    }, 0);
}
console.log(somarRenda(2, 2, 3, 4, 5));
//# sourceMappingURL=rest_parameters.js.map