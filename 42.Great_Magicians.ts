function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    for (let magician of magicians) {
        greatMagicians.push(`the Great ${magician}`);
    }
    return greatMagicians;
}

let magicians: string[] = ["Merlin", "Harry Houdini", "David Copperfield"];

let greatMagicians: string[] = make_great(magicians);
show_magicians(greatMagicians);
