// Define a type for the car object
type Car = {
    manufacturer: string;
    model: string;
    [key: string]: string; // Allow any other string key with string value
};

// Function to create a car object
function create_Car(manufacturer: string, model: string, ...extras: [string, string][]): Car {
    let car: Car = { manufacturer, model };

    extras.forEach(([key, value]) => {
        car[key] = value;
    });

    return car;
}

// Call the function with required information and additional properties
const my_Car = create_Car("Toyota", "Camry", ["color", "blue"], ["year", "2022"]);

// Print the created car object
console.log(my_Car);
