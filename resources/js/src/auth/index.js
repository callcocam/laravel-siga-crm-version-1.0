import EventEmitter from 'events'
// 'loggedIn' is used in other parts of application. So, Don't forget to change there also
const localStorageKey = 'loggedIn';
const tokenExpiryKey = 'tokenExpiry';
class AuthService extends EventEmitter {
    tokenExpiry = null;
    loggedIn = false;
    logOut() {
        localStorage.removeItem(localStorageKey);
        localStorage.removeItem(tokenExpiryKey);
        localStorage.removeItem('userInfo');

        this.tokenExpiry = null;
        this.loggedIn = false;
    }

    isAuthenticated() {
        return (
            new Date(Date.now()) < new Date(localStorage.getItem(tokenExpiryKey)) &&
            localStorage.getItem(localStorageKey) === 'true'
        );
    }
}

export default new AuthService();
