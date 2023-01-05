import LoginAuthority from "./LoginAuthority";

class LoginObject {
    constructor(userName, token, loginAuth) {
        this.userName = userName;
        this.token = token;
        this.loginAuth = loginAuth;

    }

    getUname() {
        return this.userName;
    }

    getToken() {
        return this.token;
    }

    getLoginAuth() {
        return this.loginAuth;
    }

    getAuthPath() {
        return LoginAuthority.getAuthPathFromLoginAuth(this.loginAuth);
    }

    isAdmin() {
        return LoginAuthority.isAdmin(this.loginAuth);
    }

    isSuperAdmin() {
        return LoginAuthority.isSuperAdmin(this.loginAuth);
    }

    isLoggedIn() {
        if (this.userName && this.token && this.loginAuth) {
            return true;
        }
        return false;
    }
}

export default LoginObject