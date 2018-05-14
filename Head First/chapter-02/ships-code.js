var location1 = 3;      // Położenie komórek okrętu
var location2 = 4;
var location3 = 5;
var guess;              // Położenie komórki wskazanej przez użytkownika do sprawdzenia
var hits = 0;           // Liczba trafień
var guesses = 0;        // Liczba prób
var isSunk = false;     // Informacja czy okręt został zatopiony

while (isSunk == false) {
    guess = prompt("Gotów, cel, pal! (podaj liczbę z zakresu od 0 do 6):");

    if (guess < 0 || guess > 6) {
        alert("Proszę podać prawidłowy numer komórki!");
    } else {
        guesses = guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1;
            alert("TRAFIONY!!!")

            if (hits == 3) {
                isSunk = true;
                alert("Zatopiłeś mój okręt!");
            }
        } else {
            alert("PUDŁO!")
        }
    }
}
var stats = "Potrzebowałeś " + guesses + " prób, by zatopić okręt," + "czyli Twoja efektywność wynosi: " + (3/guesses) + ".";
alert(stats);
