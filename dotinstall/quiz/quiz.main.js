'use strict'


{
    const question = document.getElementById('question');
    const choices = document.getElementById('choices');
    const btn = document.getElementById('btn');
    const result = document.getElementById('result');
    const scoreLabel = document.querySelector('#result > p');

    const quizSet = shuffl([
        {q: 'たぁたが一番好なAPEXのキャラは？', c: ['オクタン', 'ライフライン', 'ジブラルタル']},
        {q: '鶴岡隆慶の総画数は？', c: ['55画', '62画', '58画']},
        {q: '平成7年の流行語として正しいものは？', c: ['がんばろうKOBE', '同情するなら金をくれ', '自分で自分を褒めたい']},
    ]);
    let currentNum = 0;
    let isAnswered;
    let score = 0;

    function shuffl (arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
        return arr;
    }

    const checkAnswer = (li) => {
        if (isAnswered) {
            return;
        }
        isAnswered = true;

        if (li.textContent === quizSet[currentNum].c[0]) {
            li.classList.add('correct');
            score++;
        } else {
            li.classList.add('wrong');
            const correctChoice = document.querySelectorAll('#choices li');
            correctChoice.forEach(cc => {
                if (cc.textContent === quizSet[currentNum].c[0]) {
                    cc.classList.add('correctIs');
                }
            });
        }

        btn.classList.remove('disabled');
    }

    const setQuiz = () => {
        isAnswered = false;

        question.textContent = quizSet[currentNum].q;

        while (choices.firstChild) {
            choices.removeChild(choices.firstChild);
        }

        const shuffledChoices = shuffl([...quizSet[currentNum].c]);
        shuffledChoices.forEach(choice => {
            const li = document.createElement('li');
            li.textContent = choice;
            li.addEventListener('click', () => {
                checkAnswer(li);
            });
            choices.appendChild(li);
        });

        if (currentNum === quizSet.length - 1) {
            btn.textContent = 'show score';
        } 
    }

    setQuiz();

    btn.addEventListener('click', () => {
        if (btn.classList.contains('disabled')) {
            return;
        }
        btn.classList.add('disabled');

        if (currentNum === quizSet.length - 1) {
            scoreLabel.textContent = `Score: ${score} / ${quizSet.length}`;
            result.classList.remove('hidden');
        } else {
            currentNum++;
            setQuiz();
        }
    });
}