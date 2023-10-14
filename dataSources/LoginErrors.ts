export enum LoginErrors {

    // Login ERRORS - Key (given name to error) \ Value (text of error) - no need public static readonly
    ERROR_USER_PASS_NOT_MATCH = 'Epic sadface: Username and password do not match any user in this service',
    ERROR_LOCKED_OUT_USER = 'Epic sadface: Sorry, this user has been locked out',
    ERROR_USER_MISSING = 'Epic sadface: Username is required',
    ERROR_PASS_MISSING = 'Epic sadface: Password is required',
}