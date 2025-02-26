
//Checks if the password meets certain conditions like length, special characters and such
export async function checkPassword(password: string) {
    // Define the regular expression for special characters
    const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    // Check if the password has a minimum length of 12 characters
    const hasMinimumLength = password.length >= 12;

    // Check if the password has at least one special character
    const hasSpecialChar = specialChars.test(password);

    // Check if the password has at least one uppercase letter
    const hasUpper = /[\p{Lu}]/u.test(password);
    //const hasUppercase = /[A-Z]/.test(password);

    // Check if the password has at least one lowercase letter
    const hasLower = /[\p{Ll}]/u.test(password);
    //const hasLowercase = /[a-z]/.test(password);

    // Check if the password has at least one number
    const hasNumber = /\d/.test(password);

    // Return true only if all conditions are met
    return hasMinimumLength && hasSpecialChar && hasUpper && hasLower && hasNumber;
}

//Checks if the user entered password is part of the hackerlist
export async function checkHackerList(password: string): Promise<boolean> {
    console.log('Started checking list');
    
    // Fetch the file content
    const response = await fetch('/passwordList/rockyou.txt');
    const text = await response.text();

    // Split the file content into an array of passwords
    const hackerListArray = text.split('\n');

    // Convert the array to a Set for faster lookups
    const hackerListSet = new Set(hackerListArray);

    // Check if the password is in the hacker list
    return hackerListSet.has(password);
}