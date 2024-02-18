import { useContext , createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children})=> {
    // token variable that takes token from local storage
    const [token, setToken] = useState(localStorage.getItem("token"));

    // set token in local storage
    const storeTokenInLS = (serverToken) => {
        return localStorage.setItem("token", serverToken);
    };

    let isLoggedIn = !! token;

    // tackling logout funtionality
    const LogoutUser = () =>{
        setToken("");
        return localStorage.removeItem('token');
    }
    return (
        <AuthContext.Provider value={{isLoggedIn,storeTokenInLS , LogoutUser}}>
            {children}
        </AuthContext.Provider>
    );
};

// consumer

export const useAuth = () =>{
    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth use outside of the Provider");
    }
    return authContextValue;
};