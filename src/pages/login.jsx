import  { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../service/apiService';
import { AuthContext } from '../context/AuthContentx.jsx';
import { Container } from 'react-bootstrap';



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { sign } = useContext(AuthContext);
    const  navigate  = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
     
        try{
            const response = await login({email, password});
            console.log(response);
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
        console.log('Usuário logado');
       
        // Redirecionar para a página principal após o login
      
    };

    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100 min-vw-100">
            <div className="d-flex flex-column gap-4 p-4 border rounded shadow-lg bg-white">
                <h2 className='text-center'>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className='form-label' htmlFor="email">Email:</label>
                        <input
                            className='form-control'
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label className='form-label' htmlFor="password">Password:</label>
                        <input
                            className='form-control'
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            aria-describedby="passwordHelpBlock"
                        />
                    </div>
                    <button type="submit" className="btn btn-success mt-3 w-100">Login</button>
                </form>
            </div>
        </Container>
    );
};

export default Login;