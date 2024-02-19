var current_users = ["John", "Jane", "Alice", "Bob", "Eve"];
var new_users = ["Mary", "John", "Alice", "Mark", "Anna"];
var _loop_1 = function (new_user) {
    var username_exists = current_users.some(function (current_user) { return current_user.toLowerCase() === new_user.toLowerCase(); });
    if (username_exists) {
        console.log("Username '".concat(new_user, "' is not available. Please enter a new username."));
    }
    else {
        console.log("Username '".concat(new_user, "' is available."));
    }
};
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    _loop_1(new_user);
}
