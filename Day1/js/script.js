let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

function exibirTextoNaTela(texto, tag) {
    let resultadoDiv = document.getElementById(tag);
    if (resultadoDiv) {
        resultadoDiv.innerHTML = texto;
    } else {
        alert('Aconteceu algo de errado com as propriedades informadas!!')
        console.error(`Elemento com id '${tag}' não encontrado.`);
    }
}

function comparar(val1, val2, nome1, nome2, tag) {
    const resultado = val1 === parseInt(val2)
        ? typeof val1 === typeof val2
            ? `As variáveis ${nome1} e ${nome2} têm o mesmo valor e tipo.`
            : `As variáveis ${nome1} e ${nome2} têm o mesmo valor, mas tipos diferentes.`
        : `As variáveis ${nome1} e ${nome2} não têm o mesmo valor.`;

    console.log(resultado);

    exibirTextoNaTela(resultado, tag);
}

comparar(numeroUm, stringUm, "numeroUm", "stringUm", "li-1");
comparar(numeroTrinta, stringTrinta, "numeroTrinta", "stringTrinta", "li-2");
comparar(numeroDez, stringDez, "numeroDez", "stringDez", "li-3");
