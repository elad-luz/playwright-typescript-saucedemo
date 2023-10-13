export default class LoginCredentials {

    // username variables - options
    public static readonly USER_IS_OK = 'standard_user';
    public static readonly USER_LOCKED = 'locked_out_user';
    public static readonly USER_PROBLRM = 'problem_user';
    public static readonly USER_GLITCH = 'performance_glitch_user';
    public static readonly USER_ERROR = 'error_user';
    public static readonly USER_EMPTY = '';
    
    // password variable - options
    public static readonly PASS_IS_OK = 'secret_sauce';
    public static readonly PASS_ERROR = 'error';
    public static readonly PASS_EMPTY = '';

}