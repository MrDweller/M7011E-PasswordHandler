const userAuth = "user";
const adminAuth = "admin";
const superAdminAuth = "super-admin";

const userPath = "/user";
const adminPath = "/admin";
const superAdminPath = "/admin";

class LoginAuthority {
    static getAuthPathFromLoginAuth(loginAuth) {
        if (loginAuth === userAuth) {
            return userPath;
        }
        if (loginAuth === adminAuth) {
            return adminPath;
        }
        if (loginAuth === superAdminAuth) {
            return superAdminPath;
        }
        return "";
    }
    
    static isAdmin(loginAuth) {
        if (loginAuth === adminAuth || loginAuth === superAdminAuth) {
            return true;
        }
        return false;
    }

    static isSuperAdmin(loginAuth) {
        if (loginAuth === superAdminAuth) {
            return true;
        }
        return false;
    }
    
    static getUserAuth() {
        return userAuth;
    }
    
    static getAdminAuth() {
        return adminAuth;
    }
    
    static getSuperAdminAuth() {
        return superAdminAuth;
    }

}

export default LoginAuthority
