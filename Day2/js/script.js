function getResponse() {
    const nome = prompt('Qual o seu nome?').trim();
    const idade = prompt('Quantos anos você tem?').trim();
    const linguagem = prompt('Qual linguagem de programação você está estudando?').trim();

    if (!nome || !idade || !linguagem) {
        alert('Por favor, preencha todas as informações corretamente.');
        return;
    }

    alert(`Olá, ${nome}! Você tem ${idade} anos e já está aprendendo ${linguagem}.`);

    let gostarDeEstudar;
    do {
        gostarDeEstudar = prompt(`Você gosta de estudar ${linguagem}? Responda 1 para Sim e 2 para Não!`).trim();
    } while (gostarDeEstudar !== '1' && gostarDeEstudar !== '2');

    if (gostarDeEstudar === '1') {
        alert('Muito bom! Continue estudando e você terá muito sucesso.');
    } else {
        alert('Ahh que pena... Já tentou aprender outras linguagens?');
    }

    console.log('Projeto Day2 carregado!');
}

getResponse();
