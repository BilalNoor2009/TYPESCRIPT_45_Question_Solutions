// Function to create a car object
function create_Car(manufacturer, model) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    extras.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        car[key] = value;
    });
    return car;
}
// Call the function with required information and additional properties
var my_Car = create_Car("Toyota", "Camry", ["color", "blue"], ["year", "2022"]);
// Print the created car object
console.log(my_Car);
