import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [usuarioId, setUsuarioId] = useState(localStorage.getItem("id"));
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [profile, setProfile] = useState(localStorage.getItem("profile"));

    const sign = (data) => {
    setUsuarioId(data.id);
    setToken(data.token);
    setProfile(data.profile);
    localStorage.setItem("id", data.id);
    localStorage.setItem("token", data.token);
    localStorage.setItem("profile", data.profile);  

    };

    const logout = () => {
        setUsuarioId(null);
        setToken(null);
        setProfile(null);
        localStorage.removeItem("id");
        localStorage.removeItem("token");
        localStorage.removeItem("profile");

    }

    return (
        <AuthContext.Provider value={{ usuarioId, token, profile, sign, logout }}>
            {children}
        </AuthContext.Provider>
    );
};