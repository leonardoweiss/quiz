class Question{
	constructor(question, wrong1, wrong2, wrong3, correct, img){
		this.question = question;
		this.alternatives = [wrong3, wrong2, wrong1, correct];
		this.Alternatives = [wrong3, wrong2, wrong1, correct];
		this.img = img;
	}
}

const quiz = [];

var question1 = new Question('Organela de uma célula vegetal, responsável pela fotossíntese:', 'Mitocôndria', 'Complexo de Golgi', 'Ribossomos', 'Cloroplastos', 'img/planta.jpg');
var question2 = new Question('De quem é a famosa frase “Penso, logo existo”?', 'Platão', 'Aristóteles', 'Francis Bacon', 'Descartes', 'img/filosofia.png');
var question3 = new Question('Qual o nome do presidente do Brasil que ficou conhecido como Jango?', ' Jânio Quadros', 'João Figueiredo', 'Getúlio Vargas', 'João Goulart', 'img/presidente.webp');
var question4 = new Question('Qual o livro mais vendido no mundo a seguir à Bíblia?', 'Harry Potter', 'O Pequeno Príncipe', ' O Senhor dos Anéis', 'Dom Quixote', 'img/livro.jpg');
var question5 = new Question('Qual a nacionalidade de Che Guevara?', 'Cubana', 'Panamenha', 'Peruana', 'Argentina', 'img/che.jpg');
var question6 = new Question('Quem é o autor de “O Príncipe”?', 'Montesquieu', 'Rousseau', 'Thomas Hobbes', 'Maquiavél', 'img/principe.jpg');
var question7 = new Question('Em qual das orações abaixo a palavra foi empregada incorretamente?', 'Está mal cozido.', ' É um mau vendedor.', 'Esse é o mal de todos.', 'É um homem mal.', 'img/portugues.webp');
var question8 = new Question('Júpiter e Plutão são os correlatos romanos de quais deuses gregos?', 'Zeus e Poseidon', 'Ares e Hermes', 'Cronos e Zeus', 'Zeus e Hades', 'img/mitologia.jpg');
var question9 = new Question('Qual o nome do cientista que descobriu o processo de pasteurização?', 'Antoine Lavoisier', 'Blaise Pascal', 'Marie Curie', 'Louis Pasteur', 'img/cientista.jpg');
var question10 = new Question('As pessoas de qual tipo sanguíneo são consideradas recebedores universais?', 'O', 'A', 'B', 'AB', 'img/sangue.webp');

var container = document.querySelector('#container');

var q = 0;
var c = -1;
var right = 0;

quiz.push(question1, question2, question3, question4, question5, question6, question7, question8, question9, question10);

var gameOver = -1;
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

var count = 1;
function toCheck(check) {
	c++;

	if (check == quiz[c].Alternatives[3]) {
		document.querySelector('#span' + count++).style.backgroundColor = '#2AFF00';
		++right;
	} else {
		document.querySelector('#span' + count++).style.backgroundColor = '#FF0000';
	}
}

function createSpans() {
    let count = 1;

	for (var i = 0; i < quiz.length; i++) {
		let span = document.createElement('div');
		span.id = 'span'+ count;
		span.textContent = count++;
		container.appendChild(span);
	}
}