/*
*
*     _____                     _  __                               _ 
*    / ____|                   | |/ /                              (_)
*   | |     _______  ___  ___  | ' /_   _ _ __ ___  __ _ _ __   ___ _ 
*   | |    |_  / _ \/ __|/ __| |  <| | | | '__/ __|/ _` | '_ \ / __| |
*   | |____ / /  __/\__ \ (__  | . \ |_| | |  \__ \ (_| | | | | (__| |
*    \_____/___\___||___/\___| |_|\_\__,_|_|  |___/\__,_|_| |_|\___|_|
*                                                                     
*   Po tych zadaniach będizecie już mistrzami pętli w JS !
*
*/

// 1.
// Stwórz tablicę złożoną z 10 elementów i wyświetl je w konsoli po kolei
// 

var show = function(){
    var array=[1,2,3,4,5,6,7,8,9,10]
    for (var i=0; i<array.length; i++){
      console.log(array[i])
    };
}

// 2.
// Wyświetl w konsoli liczby parzyste od 0 do 100
// 

var even = function () {
    for (var i=0; i<=100; i+=2){
      console.log(i)
    }
}

// 3.
// Wyświetl w konsoli liczby od 100 do 1
// 

var hundred = function(){
    for (var i=100; i>0; i--){
        console.log(i)
    }
}


// 4.
// Stwórz tablicę, a następnie 
// przy pomocą pętli stwórz tablicę zawierającą 
// te same elementy w odwrotnej kolejności. 
// Wyświetl je w alercie. 
// 

var reverseArray = function(){
    var array=[1,2,3,4,5,6,7,8,9,10]
    var reverseArray=[]
    for (var i=array.length-1; i>=0; i--){
        console.log(i);
        reverseArray.push(array[i])
    }
    alert(reverseArray)
}


// 5.
// ** Za pomocą pętli policz silnię z dowolnej, 
// podanej liczby 
//

var factorial = function(number){
    var result = 1;
    for (var i=1; i<=number; i++){
        result = result*i
    }
    console.log(result)
}

// 6.
// Stwórz obiekt i wyświetl na stronie wszystkie jego elementy 
// w formacie: "(klucz) wynosi (wartość)". 
// Funkcji nie wywołuj w konsoli
//

var showObject = function(){
  var ja = {wzrost: 174, wiek: 27}
  for (var key in ja){
    console.log("wartość: "+ key+ " to "+ja[key])
  }
}

// 7.
// stwórz tablicę zawierającą 3 obiekty. 
// Wyświetl na stronie wszystkie elementy 
// wszystkich obiektów, zaznaczając którego obiektu 
// elementy są wyświetlone. 
// Funkcji nie wywołuj w konsoli
//

var showObjectArray = function(){
  var ja = {wzrost: 174, wiek: 27};
  var michal = {wzrost: 178, wiek: 28};
  var ania = {wzrost: 164, wiek: 24};
  var arr = [ja, ania, michal];
  for (var i = 0; i<arr.length; i++){
    console.log('element '+i+" zawiera wartości ");

    for (var key in arr[i]){
      console.log("wartość: "+ key+ " to "+arr[i][key]);
    }
  }
}

// 8.
// Stwórz tablicę złożoną z 10 kolejnych wielokrotności 
// liczby 5 za pomocą pętli while
// 

var multipleOf5 = function(){
    var i=1;
    var array = [];
    while (i<=10){
        array.push(i*5);
        i++;
    }
    return array;
}

// 9.
// Wyświetl w konsoli liczby parzyste od 0 do 100 
// za pomocą pętli while
// 

var evenNumbers = function(){
    var i=0;
    while (i<=100) {
        console.log(i);
        i+=2;
    }

}

// 10.
// Pobieraj od użytkownika liczby tak długo, 
// aż wpiszę liczbę większą niż 50. 
// Wtedy wyświetl tablicę złożoną z wpisanych 
// dotychczas liczb na stronie
//

var arrayLessThen50 = function(){    
    var array=[];
    var number=prompt('podaj liczbę');
   
    while (number<50){
        array.push(number);
        number=prompt("podaj liczbę");
    }
    return array;
}

// 11.
// Wypisz na stronie elementy poniższej tablicy 
// do elementu "stop" włącznie.
// var myArray = ['uczę', 'się', 'programować', 'stop', 'lubię', 'to']
//

var stopArray = function(){
    var myArray = ['uczę', 'się', 'programować', 'stop', 'lubię', 'to'];
    var i=-1;
    do {
        i++;
        document.write(myArray[i]);
        console.log(myArray[i]);
        }    
    while (myArray[i]!='stop')


}

// 12.
// Pobieraj od użytkownika liczby tak długo, 
// ż wpiszę liczbę większą niż 50. 
// Wtedy wyświetl tablicę złożoną z wpisanych 
// dotychczas liczb na stronie z ostatnią włącznie
// 

var including50 = function(){
    var array=[];
    do {
        var number=prompt('podaj liczbę');
        array.push(number)
    }
    while (array[array.length-1]<50);
    return array;
}

// 13.
// Poproś użytkownika o wpisanie imienia i godziny. 
// W alercie wyświetl użytkownikowi powitanie wraz z 
// imieniem. Jeśli godzina wpisana przez użytkownika 
// jest od 6 do 12, powitanie powinno brzmieć 
// "dzień dobry", od 12 do 18 "Jak mija dzień?", 
// od 18 do północy "Dobry wieczór", 
// a od północy do 6 "idź spać!!!"
//

var nameAndHour = function(){
  var name = prompt('Imię poproszę');
  var hour = prompt('I godzinę');
  switch (true){
    case (hour>=0 && hour <6):
      alert("Idź spać " + name);
      break;
    case (hour>=6 && hour <12):
      alert("Dzień dobry " + name);
      break;
    case (hour>=12 && hour < 18):
      alert("Jak mija dzień, " + name);
      break;
    case (hour>=18 && hour < 24):
      alert("Dobry wieczór " + name);
      break;
  }  
}