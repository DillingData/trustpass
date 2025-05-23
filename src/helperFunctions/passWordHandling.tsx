
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
    
    // Declare the file part array
    const FILE_PARTS = [
        "/passwordList/rockyou-part-aa",
        "/passwordList/rockyou-part-ab",
        "/passwordList/rockyou-part-ac",
        "/passwordList/rockyou-part-ad",
        "/passwordList/rockyou-part-ae",
        "/passwordList/rockyou-part-af",
        "/passwordList/rockyou-part-ag",
        "/passwordList/rockyou-part-ah",
        "/passwordList/rockyou-part-ai",
        "/passwordList/rockyou-part-aj",
        "/passwordList/rockyou-part-ak",
        "/passwordList/rockyou-part-al",
        "/passwordList/rockyou-part-am",
        "/passwordList/rockyou-part-an",
        "/passwordList/rockyou-part-ao",
        "/passwordList/rockyou-part-ap",
        "/passwordList/rockyou-part-aq",
        "/passwordList/rockyou-part-ar",
        "/passwordList/rockyou-part-as",
        "/passwordList/rockyou-part-at",
        "/passwordList/rockyou-part-au",
        "/passwordList/rockyou-part-av",
        "/passwordList/rockyou-part-aw",
        "/passwordList/rockyou-part-ax",
        "/passwordList/rockyou-part-ay",
        "/passwordList/rockyou-part-az",
        "/passwordList/rockyou-part-ba",
        "/passwordList/rockyou-part-bb",
        "/passwordList/rockyou-part-bc",
        "/passwordList/rockyou-part-bd",
        "/passwordList/rockyou-part-be",
        "/passwordList/rockyou-part-bf",
        "/passwordList/rockyou-part-bg",
        "/passwordList/rockyou-part-bh",
        "/passwordList/rockyou-part-bi",
        "/passwordList/rockyou-part-bj",
        "/passwordList/rockyou-part-bk",
        "/passwordList/rockyou-part-bl",
        "/passwordList/rockyou-part-bm",
        "/passwordList/rockyou-part-bn",
        "/passwordList/rockyou-part-bo",
        "/passwordList/rockyou-part-bp",
        "/passwordList/rockyou-part-bq",
        "/passwordList/rockyou-part-br",
        "/passwordList/rockyou-part-bs",
        "/passwordList/rockyou-part-bt",
        "/passwordList/rockyou-part-bu",
        "/passwordList/rockyou-part-bv",
        "/passwordList/rockyou-part-bw",
        "/passwordList/rockyou-part-bx",
        "/passwordList/rockyou-part-by",
        "/passwordList/rockyou-part-bz",
        "/passwordList/rockyou-part-ca",
        "/passwordList/rockyou-part-cb",
        "/passwordList/rockyou-part-cc",
        "/passwordList/rockyou-part-cd",
        "/passwordList/rockyou-part-ce",
        "/passwordList/rockyou-part-cf"
      ];

    // Fetch the file 
    for (let counter = 0; counter < FILE_PARTS.length; counter++) {
        const response = await fetch(FILE_PARTS[counter]);
        const text = await response.text();
    
        // Split the file content into an array of passwords
        const hackerListArray = text.split('\n').map(pw => pw.toLowerCase());
    
        // Convert the array to a Set for faster lookups
        const hackerListSet = new Set(hackerListArray);

        // Lowercase password
        const passWordtoCheck = password.toLowerCase();
    
        // Check if the password is in the hacker list
        if (hackerListSet.has(passWordtoCheck)) {
            return true;
        }
    }

    return false;
}