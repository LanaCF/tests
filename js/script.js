let tests = [
    {
        task: '1 + 1 = 2',
        result: true,
        points: 1,
    },

    {
        task: '1 + 2 = 2',
        result: false,
        points: 1,
    },

    {
        task: '1 * 1 = 0',
        result: false,
        points: 1,
    },

    {
        task: '5 + 7 = 12',
        result: true,
        points: 1,
    },

    {
        task: '15 - 5 = 10',
        result: true,
        points: 1,
    }
];

let q;
let mEnd = tests.length;
let p;
let sum = 0;
let b = 0;
let total = 0;
let rating;

alert('Чи правильно пораховані приклади?');

for(let i = 0; i < mEnd; i++) {
    let num = i + 1;
    let t = tests[i];
    let r = t.result;
    p = t.points;
    total += p;

    q = confirm('Приклад ' + num + '/' + mEnd + ': ' + t.task);

    if (q === r) {
        alert('Вітаємо! Ваша відповідь правильна. Ви отримуєте ' + p + ' бал(-ів)');
        sum += p;
    } else {
        alert('Ви неправильно відповіли. Бали за відповідь вам не нараховано.');
    }
}

rating = Math.round((sum * 12) / total);

alert('Тест завершено. Ви отримали: ' + sum + ' бал(-ів). Ваша оцінка: ' + rating);


