// Позиция коробля
const randomLoc = Math.floor(Math.random() * 5)           // random pozition
const location1 = randomLoc;
const location2 = location1 + 1;
const location3 = location2 + 1;

// Потопление коробля
let isSunk = false;

// предпологаемая позиция выстрела
let guess;

// Добавляем счетчик попаданий
let hits = 0;

// Добавляем счетчик выстрелов
let = guesses = 0;

while (isSunk === false) {
    // не забываем превратить строку в число
    guess = +prompt("Fire! Enter a number 0-6")
    if( guess < 0 || guess > 6) {
        alert("Please enter a valid cell number")
    } else {
        guesses = guesses + 1   // счетчик выстрелов
            
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

const stats = "You have" + hits + "hits out of " + guesses + "shots."
alert(stats)