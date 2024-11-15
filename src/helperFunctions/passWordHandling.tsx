
export async function checkPassword(password: string) {
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

export async function checkHackerList(password: string) {

    console.log('Started cheking list');
    // Fetch the file content
    const response = await fetch('/passwordList/rockyou.txt');
    const text = await response.text();

    // Split the file content into an array of passwords
    const hackerList2 = text.split('\n');

    //Boolean to return
    let isOnHackerList: boolean = false;

    // Check if the password is in the hacker list
    for (let counter = 0; counter < hackerList2.length; counter++) {
        console.log(hackerList2[counter]);
        if (password === hackerList2[counter]) {
            isOnHackerList = true;
            break;
        }
    }

    return isOnHackerList;
}