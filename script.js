class Question{
	constructor(question, wrong1, wrong2, wrong3, correct, img){
		this.question = question;
		this.alternatives = [wrong3, wrong2, wrong1, correct];
		this.Alternatives = [wrong3, wrong2, wrong1, correct];
		this.img = img;
	}
}

const quiz = [];