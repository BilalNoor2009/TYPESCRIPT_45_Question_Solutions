var guests = ["Bilal", "Hussan", "Wali"];
console.log("Orignal guest list:");
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("-" + guest);
}
console.log("\nWe found a bigger dinner table!");
guests.unshift("Daviad");
guests.splice(Math.floor(guests.length / 2), 0, "Eve");
guests.push("Frank");
console.log("\nUpdated guest list:");
for (var _a = 0, guests_2 = guests; _a < guests_2.length; _a++) {
    var guest = guests_2[_a];
    console.log("-" + guest);
}
