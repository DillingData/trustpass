
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