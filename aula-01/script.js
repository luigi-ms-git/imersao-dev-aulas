var nome = "Luigi";
var notaPrimeiroSemestre = 9;
var notaSegundoSemestre = 7;
var notaTerceiroSemestre = 4;
var notaQuartoSemestre = 2;

var notaFinal = (notaPrimeiroSemestre + notaSegundoSemestre + notaTerceiroSemestre + notaQuartoSemestre) / 4;

var notaFixada = notaFinal.toFixed(1);

console.log("Bem vindo " + nome);
console.log(notaFixada);
