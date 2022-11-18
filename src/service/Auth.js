
const login = (values) => {
    const { email } = values;
    localStorage.setItem("EMAIL", email);
};

const logout = () => {
    localStorage.removeItem("EMAIL");
};

const getEmail = () => {
    return localStorage.getItem("EMAIL");
};

const isAuthenticated = () => {
    if (localStorage.getItem("EMAIL") !== null) {
        return true;
    } else {
        return false;
    }
};

export {login, logout, getEmail, isAuthenticated };
