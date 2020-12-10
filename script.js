const quizData = [
{
	question: 'Что покажет alert()?',
	a: 'false',
	b: '-1',
	c: '1',
	d: '0',
	image: 'img/1.jpg',
	correct: 'c' 
}, {
	question: 'Что выведет код?',
	a: '""',
	b: '"I"',
	c: 'SyntaxError',
	d: 'undefined',
	image: 'img/2.jpg',
	correct: 'b' 
}, {
	question: 'Что выведет в консоль?',
	a: 'true',
	b: 'false',
	c: 'undefined',
	d: 'ничего не выведет, возникнет ошибка',
	image: 'img/3.jpg',
	correct: 'b' 
}, {
	question: 'Каков будет результат выполнения следующего кода?',
	a: '0,1,2,3,4,5,6,7,8,9',
	b: 'SyntaxError',
	c: '10',
	d: '10 раз выведется число 10',
	image: 'img/4.jpg',
	correct: 'd' 
}, {
	question: 'Что выведет в консоль, если запустить код в браузере?',
	a: '[object Object]',
	b: '[object Window]',
	c: 'undefined',
	d: 'ничего не выведет, возникнет ошибка',
	image: 'img/5.jpg',
	correct: 'b' 
}]

const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");

const questionEl = document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const pic= document.getElementById('image');
const subBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
	deselectAnswers();

	const currentQuizData = quizData[currentQuiz];

	questionEl.innerText = currentQuizData.question;

	a_text.innerText = currentQuizData.a;
	b_text.innerText = currentQuizData.b;
	c_text.innerText = currentQuizData.c;
	d_text.innerText = currentQuizData.d;
	pic.setAttribute('src', currentQuizData.image);
}

function getSelected() {

	let answer = undefined;

	answerEls.forEach((answerEl) => {
		if(answerEl.checked) {
			answer = answerEl.id;
		}
	});

	return answer;
}

function deselectAnswers() {
	answerEls.forEach((answerEl) => {
		answerEl.checked = false;
	})
}

subBtn.addEventListener("click", () => {
	//check to see the answer
	const answer = getSelected();


	if(answer) {
			if(answer === quizData[currentQuiz].correct) {
				score++;
			}
		currentQuiz++;
		if(currentQuiz < quizData.length) {
			loadQuiz();
		} else {
			quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2> <button onclick="location.reload()">Reload</button>`
			// alert(`You finished! Your score is: ${score}`)
		}
	}

})