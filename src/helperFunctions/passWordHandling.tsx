
export function checkPassword(password: string): boolean {
    // Define the regular expression for special characters
    const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    // Check if the password has a minimum length of 12 characters
    const hasMinimumLength = password.length >= 12;

    // Check if the password has at least one special character
    const hasSpecialChar = specialChars.test(password);

    // Check if the password has at least one uppercase letter
    const hasUppercase = /[A-Z]/.test(password);

    // Check if the password has at least one lowercase letter
    const hasLowercase = /[a-z]/.test(password);

    // Check if the password has at least one number
    const hasNumber = /\d/.test(password);

    // Return true only if all conditions are met
    return hasMinimumLength && hasSpecialChar && hasUppercase && hasLowercase && hasNumber;
}

export function checkHackerList(password: string): boolean {

    const reader = new FileReader();
    //console.log(reader.readAsText('src/app/passwordList/rockyou.txt'));

    // Define a list of common hacker passwords
    const hackerList = [
        "password",
        "123456",
        "123456789",
        "12345678",
        "12345",
        "1234567",
        "1234567",
        "1234567890",
        "qwerty",
        "abc123",
        "123123",
        "admin",
        "welcome",
        "monkey",
        "master",
        "sunshine",
        "letmein", 
        "password1",
        "welcome1",
        "test",
    ];

    let isOnHackerList: boolean = false;

    for (let counter = 0; counter < hackerList.length; counter++) {
        if (password === hackerList[counter]) {
            isOnHackerList = true;
            break;
        }
    }

    return isOnHackerList;
}