var personName = ["Bilal", "Wali", "Ahmed", "Sami", "Qasim"];
var greeting = "Hello. ";
for (var i = 0; i < personName.length; i++) {
    console.log("".concat(greeting).concat(personName[i], "! "));
}
