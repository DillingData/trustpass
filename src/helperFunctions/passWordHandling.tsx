
export function checkPassword(password: string): boolean {
    // Define the regular expression for special characters
    const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    // Check if the password meets all the criteria
    const hasMinimumLength = password.length >= 12;
    const hasSpecialChar = specialChars.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);

    // Return true only if all conditions are met
    return hasMinimumLength && hasSpecialChar && hasUppercase && hasLowercase && hasNumber;
}