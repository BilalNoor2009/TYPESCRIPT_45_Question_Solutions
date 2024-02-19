let guests: string[] = ["Bilal", "Hussan", "Wali"];
console.log("Orignal guest list:");
for (let guest of guests) {
    console.log("-" + guest);
}
console.log("\nWe found a bigger dinner table!");
guests.unshift("Daviad");
guests.splice(Math.floor(guests.length / 2),0, "Eve");
guests.push("Frank");
console.log("\nUpdated guest list:");
for(let guest of guests) {
    console.log("-" + guest);
}