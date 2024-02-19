function makeSandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    console.log("Bread");
    items.forEach(item => console.log(item));
    console.log("Bread");
    console.log("Enjoy your sandwich!");
}

// Call the function three times with different numbers of arguments
makeSandwich("Cheese", "Ham", "Lettuce");
makeSandwich("Turkey", "Tomato");
makeSandwich("Peanut Butter", "Jelly", "Banana");
