import  { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../service/apiService';
import { AuthContext } from '../context/AuthContentx.jsx';



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { sign } = useContext(AuthContext);
    const  navigate  = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Adicione a lógica de autenticação aqui
        try{
            const response = await login({email, password});
            if(response.status === 200){
                sign(response.data);
                navigate('/main');
            }
            if(response.status !== 200){
                alert("Usuário ou senha inválidos");
            }
        }catch(error){
            console.error(error);
            alert("Erro ao logar. Verifique os dados e tente novamente.");
        }
        console.log('Email:', email);
        console.log('Password:', password);
        // Redirecionar para a página principal após o login
      
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;