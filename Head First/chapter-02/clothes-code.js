function whatShallIWear(temp) {
    if (temp < 15) {
        console.log("Ubierz sweter.");
    } else if (temp < 25) {
        console.log("Ubierz kurtkę.");
    } else {
        console.log("Ubierz t-shirt");
    }
}

function doIt(param) {
    param = 2;
}

var test = 1;
doIt(test);
console.log(test);


whatShallIWear(10);
whatShallIWear(15);
whatShallIWear(30);