let guests: string[] = ["Bilal", "Saad", "Hunnan"];
const cannotAttend: string =  "Saad";
const newInvitee: string = "Ayan";
console.log(`${cannotAttend} cann't make it to the dinner.`);
guests = guests.map((guest )=> (guest === cannotAttend ? newInvitee : guest));
guests.forEach((guest) => {
    console.log(`Dear${guest},you are invite to the dinner.`);
});
