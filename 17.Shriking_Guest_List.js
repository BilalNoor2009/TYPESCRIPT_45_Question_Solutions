var guests = ['Bilal', 'Haris', 'Saad'];
console.log("Soory, the dinner table won't arrive in time,so I can only invit two guest.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    if (removedGuest) {
        console.log("Soory, ".concat(removedGuest, ", I cannot invit you to dinner. "));
    }
}
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Hey, ".concat(guest, ", ypu' re still invited to dinner!"));
}
guests.splice(0, guests.length);
console.log("Final guest list:".concat(guests));
