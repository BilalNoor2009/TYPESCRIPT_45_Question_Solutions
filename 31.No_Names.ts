let users: string[] = [];
let age: number = 25; // Sample age for testing

// Check if the list of users is empty
if (users.length === 0) {
    console.log("We need to find some users!");
} else {
    // Write an if-else chain to determine the stage of life based on age
    if (age < 2) {
        console.log("The person is a baby.");
    } else if (age < 4) {
        console.log("The person is a toddler.");
    } else if (age < 13) {
        console.log("The person is a kid.");
    } else if (age < 20) {
        console.log("The person is a teenager.");
    } else if (age < 65) {
        console.log("The person is an adult.");
    } else {
        console.log("The person is an elder.");
    }

    // Clear the array of users
    users = [];
    console.log("All usernames have been removed.");
}
