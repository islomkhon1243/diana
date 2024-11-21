// Проверка ответов на уроке 1
document.getElementById('quiz-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const answers = {
        q1: '1', // Правильный ответ для первого вопроса
        q2: '1', // Правильный ответ для второго вопроса
    };

    let correct = 0;
    let total = 2; // Количество вопросов

    // Проверка ответов
    const form = document.getElementById('quiz-form');
    const userAnswerQ1 = form.querySelector('input[name="q1"]:checked');
    const userAnswerQ2 = form.querySelector('input[name="q2"]:checked');

    if (userAnswerQ1 && userAnswerQ1.value === answers.q1) correct++;
    if (userAnswerQ2 && userAnswerQ2.value === answers.q2) correct++;

    // Показ результата
    const result = document.getElementById('result');
    result.textContent = `Вы ответили правильно на ${correct} из ${total} вопросов.`;
});


// Пример события для кнопки
const submitButton = document.querySelector("#submitBtn");
if (submitButton) {
    submitButton.addEventListener("click", (event) => {
        event.preventDefault();
        checkAnswers();
    });
}
