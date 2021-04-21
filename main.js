let order = [] //array sequencia cores
let clickOrder = [] //array ordem clicks

let score = 0;

// 0 (verde), 1 (vermelho), 2 (amarelo), 3 (azul)

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');


//Math.floor() = arrendonda e Math.randow() = escolhe aleatoriamente as cores (4 elementos no array)

//funcao = embaralhar cores
let shuffleOrder = () => { 
    let colorOrder = Math.floor(Math.random() * 4); //por rodada
    order[order.length] = colorOrder; //indice + cor
    clickOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        ligthColor(elementColor, Number(i) + 1);
    }
}

//funcao = acende a proxima cor
let ligthColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    
    setTimeout(() => {
        element.classList.remove('selected');
    }, number);   

}

//funcao = validacao da cor clicada e cor apresentada por comparacao
let checkOrder = () => {
    for (let i in clickOrder) {
        if (clickOrder[i] != order[i]) {
            gameOver();
            break
        }
    }
    if (clickOrder.length == order.length) {
        alert("Pontos: " + score + "\n Acertou! <\b>Iniciando outro nivel! ");
        nextLevel();
    }
}

//funcao = click usuario 
let click = (color) => {
    clickOrder[clickOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        
        checkOrder();
    }, 250);

}

//funcao = retorna a cor

let createColorElement = (color) => {
    if (color == 0) {
        return green;
    }else if (color == 1){
        return red;
    }else if (color == 2){
        return yellow;
    }else if (color == 3){
        return blue;
    }
}

//funcao = proximo nivel jogo

let nextLevel = () => {
    score ++;
    shuffleOrder();
}

//funcao = usuario perde

let gameOver = () => {
    alert("Pontos = " + score + "\n Voce perdeu o jogo \n Clique em OK para iniciar um novo jogo");
    order = [];
    clickOrder = [];

    playGame();
}

// funcao = iniciar jogo

let playGame = () => {
    alert ("Bem vindo ao Genius Game! \n Iniciando novo jogo!")
    score = 0;

    nextLevel();
}

green.addEventListener('click', click(0));
red.addEventListener('click', click(1));
yellow.addEventListener('click', click(2));
blue.addEventListener('click', click(3));

//evento click = cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


playGame();