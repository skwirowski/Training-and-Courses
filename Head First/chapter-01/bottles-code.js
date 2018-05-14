var word;
wordAboveFour = "butelek";
wordTwoToFour = "butelki";
wordOne = "butelka";
count = 99;

while (count > 4) {
    word = wordAboveFour;
    console.log(count + " " + word + " piwa na ścianie");
    console.log(count + " " + word + " piwa,");
    console.log("Jedną weź i podaj w koło,");

    count = count - 1;
}

if (count <= 4) {

    while (count > 1) {
        word = wordTwoToFour;
        console.log(count + " " + word + " piwa na ścianie");
        console.log(count + " " + word + " piwa,");
        console.log("Jedną weź i podaj w koło,");

        count = count - 1;
    }
}

if (count == 1) {
    word = wordOne;
    console.log(count + " " + word + " piwa na ścianie");
    console.log(count + " " + word + " piwa,");
    console.log("Jedną weź i podaj w koło,");

    count = count - 1;
}
word = wordAboveFour;
console.log("nie ma już " + word + " piwa na ścianie.");