var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ["Bilal", "Haris", "Wali", "Qasim", "Sami"];
console.log("Original Order:");
console.log(placesToVisit);
console.log("\nAlphabetical Order:");
console.log(__spreadArray([], placesToVisit, true).sort());
console.log("\nOrignal order (unchanged):");
console.log(placesToVisit);
console.log("\nRevers Alphabetical Oerder:");
console.log(__spreadArray([], placesToVisit, true).sort().reverse());
console.log("\nOrignal Order (unchanged):");
console.log(placesToVisit);
console.log("\nReversed Order:");
placesToVisit.reverse();
console.log(placesToVisit);
console.log("\nReversed Again (back to original order)");
placesToVisit.reverse();
console.log(placesToVisit);
console.log("\nSorted Alphabetically:");
console.log(placesToVisit.sort());
console.log("\nSorted in Reverse Alphabetical order:");
console.log(placesToVisit.sort().reverse());
