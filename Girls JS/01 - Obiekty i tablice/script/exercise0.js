let names = ["Michał", "Jaromir", "Gracjan", "Hipolit", "Maksym"];

names.push("Jan");
names.unshift("Warcisław");

for (let i=0; i < names.length; i++) {
    console.log(names[i]);
}