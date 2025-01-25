import { useContext } from 'react';
import { AuthContext } from '../context/AuthContentx';
import { useNavigate } from 'react-router-dom';


const LogoutButton = () => {
    const {logout} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        
        logout();
        navigate('/');

        console.log('Usuário deslogado');

    };

    return (
        <button
            onClick={handleLogout}
            className="btn btn-success"
        >
            Logout
        </button>
    );
};

export default LogoutButton;