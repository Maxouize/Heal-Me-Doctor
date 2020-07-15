export interface IUserPrincipal {
    userLogin: string;
    password: string;
    token: string;

}

export class UserPrincipal implements IUserPrincipal {
    userLogin: string;
    password: string;
    token: string;


    constructor(userLogin: string,
                password: string,
                token: string) {
        this.userLogin = userLogin;
        this.password = password;
        this.token = token;
    }
}
