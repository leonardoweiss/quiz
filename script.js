class Question{
	constructor(question, wrong1, wrong2, wrong3, correct, img){
		this.question = question;
		this.alternatives = [wrong3, wrong2, wrong1, correct];
		this.Alternatives = [wrong3, wrong2, wrong1, correct];
		this.img = img;
	}
}

const quiz = [];

var question1 = new Question('Paracetamol é uma palavra:', 'Proparoxítona', 'inexistente', 'paroxítona', 'oxítona', 'img/paracetamol.jpg');
var question2 = new Question('A capital da Paraíba é:', 'Recife', 'Natal', 'Teresina', 'João Pessoa', 'img/paraiba.jpeg');
var question3 = new Question('Qual é o nome dado para quando a água passa de seu estado gasoso para o estado líquido?', 'Vaporização', 'Fusão', 'Sublimação', 'Condesação', 'img/agua.jpg');
var question4 = new Question('Quantas sílabas possui a palavra "Substantivo"?', '5 sílabas', '6 sílabas', '3 sílabas', '4 sílabas', 'img/substantivo.jpg');
var question5 = new Question('No sistema de numeração romano, qual o significado do símbolo "DC"?', '1100', '400', '40', '600', 'img/romanos.jpg');

var container = document.querySelector('#container');

var q = 0;

quiz.push(question1, question2, question3, question4, question5);

var gameOver = 0;
function createBox(condition) {
    ++gameOver;
	if (gameOver < quiz.length) {
		let Box = document.querySelector('#box');
		container.removeChild(Box);

		let box = document.createElement('div');
		box.id = 'box';
		let image = document.createElement('img');
		image.src = quiz[q].img;
		let header = document.createElement('h4');
		header.textContent = quiz[q].question;
		box.appendChild(image);
		box.appendChild(header);

		const itens = quiz[q].alternatives;
		var Length = itens.length;
		
		for (var i = 0; i < Length; i++) {
			let onlyOne = itens[Math.floor(Math.random() * itens.length)];
			let excluir = itens.indexOf(onlyOne);
			itens.splice(excluir, 1);

			let bttn = document.createElement('button');
			bttn.setAttribute('onclick','toCheck("' + onlyOne + '"), createBox()');
			bttn.textContent = onlyOne;
			box.appendChild(bttn);
		}

		container.appendChild(box);
		++q;
		
	} else {
		let Box = document.querySelector('#box');
		container.removeChild(Box);
		let h1 = document.createElement('h1');
		h1.id = 'end';
		h1.textContent = 'Parabéns!!! Você acertou: ' + right + ' perguntas!';
		container.appendChild(h1);
	}
}

function toCheck(check) {

}