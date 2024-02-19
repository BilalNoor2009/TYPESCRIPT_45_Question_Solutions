var guests = ["Bilal", "Saad", "Hunnan"];
var cannotAttend = "Saad";
var newInvitee = "Ayan";
console.log("".concat(cannotAttend, " cann't make it to the dinner."));
guests = guests.map(function (guest) { return (guest === cannotAttend ? newInvitee : guest); });
guests.forEach(function (guest) {
    console.log("Dear".concat(guest, ",you are invite to the dinner."));
});
