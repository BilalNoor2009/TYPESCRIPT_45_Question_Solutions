function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`You ordered a ${size} shirt with the message: "${message}".`);
}

make_shirt(); 
make_shirt("Medium"); 
make_shirt("Small", "Hello, World!");
