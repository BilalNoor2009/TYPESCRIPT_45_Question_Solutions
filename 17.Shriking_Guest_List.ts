let guests: string[] = ['Bilal', 'Haris', 'Saad'];
console.log("Soory, the dinner table won't arrive in time,so I can only invit two guest.");
while(guests.length > 2){
    let removedGuest = guests.pop();
    if(removedGuest) {
        console.log(`Soory, ${removedGuest}, I cannot invit you to dinner. `);

    }
}
for(let guest of guests) {
    console.log(`Hey, ${guest}, ypu' re still invited to dinner!`);
}
guests.splice(0, guests.length);
console.log(`Final guest list:${guests}`); 
