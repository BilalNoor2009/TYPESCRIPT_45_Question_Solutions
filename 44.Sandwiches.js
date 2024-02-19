function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Summary:");
    console.log("Bread");
    items.forEach(function (item) { return console.log(item); });
    console.log("Bread");
    console.log("Enjoy your sandwich!");
}
// Call the function three times with different numbers of arguments
makeSandwich("Cheese", "Ham", "Lettuce");
makeSandwich("Turkey", "Tomato");
makeSandwich("Peanut Butter", "Jelly", "Banana");
