let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10; 
let stringDez = '10';

function comparar(val1, val2, nome1, nome2) {
    console.log(
        val1 === parseInt(val2)
            ? typeof val1 === typeof val2
                ? `As variáveis ${nome1} e ${nome2} têm o mesmo valor e tipo.`
                : `As variáveis ${nome1} e ${nome2} têm o mesmo valor, mas tipos diferentes.`
            : `As variáveis ${nome1} e ${nome2} não têm o mesmo valor.`
    );
}

comparar(numeroUm, stringUm, "numeroUm", "stringUm");
comparar(numeroTrinta, stringTrinta, "numeroTrinta", "stringTrinta");
comparar(numeroDez, stringDez, "numeroDez", "stringDez");
