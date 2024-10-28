
export function checkPassword (password: string) {

    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if (password.length < 12) {
        return false;
    } else {
        if (format.test(password)) {
            if (/\d/.test(password)) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}