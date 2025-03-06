// Позиция коробля
const location1 = 3;
const location2 = 4;
const location3 = 5;

// Потопление коробля
let isSunk = false;

// предпологаемая позиция выстрела
let guess;

// Добавляем счетчик попаданий
let hits = 0;

while (isSunk === false) {
    // не забываем превратить строку в число
    guess = +prompt("Fire! Enter a number 0-6")
    if( guess < 0 || guess > 6) {
        alert("Please enter a valid cell number")
    } else {
            // Логическое или
    if (guess === location1 ||  guess === location2 ||  guess ===location3) {
        alert ("Hit")
        hits = hits + 1   // считаем попадания
        if (hits === 3){
            isSunk = true
            alert("You sunk my battleship")
        }   // если корабль потоплен

    } else {
        alert ("Miss")
    }
    }
} 