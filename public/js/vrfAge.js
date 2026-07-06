function verifyAge() {
    let userAge = prompt("Enter your age");

    if (userAge >= 18) {
        alert(`You are allowed to drive!`);
    } else {
        alert(`You are prohibited to drive!`);
    }
}