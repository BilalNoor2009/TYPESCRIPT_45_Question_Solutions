let current_users: string[] = ["John", "Jane", "Alice", "Bob", "Eve"];
let new_users: string[] = ["Mary", "John", "Alice", "Mark", "Anna"];

for (let new_user of new_users) {
    let username_exists = current_users.some(
        (current_user) => current_user.toLowerCase() === new_user.toLowerCase()
    );
    if (username_exists) {
        console.log(`Username '${new_user}' is not available. Please enter a new username.`);
    } else {
        console.log(`Username '${new_user}' is available.`);
    }
}
