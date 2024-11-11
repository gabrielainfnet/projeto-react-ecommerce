import { useState } from 'react';
import axios from 'axios';
import useForm from '../hooks/useForm';
import '../assets/registerPage.css';

const RegisterPage = () => {
    const [formData, handleChange, resetForm] = useForm({
        nome: '',
        email: '',
        senha: ''
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { nome, email, senha } = formData;
        try {
            const response = await axios.post('http://localhost:8080/vendas-api/usuarios', { nome, email, senha });
            console.log('Usuário cadastrado com sucesso:', { nome, email, senha }, response.data);
            setSuccessMessage('Usuário cadastrado com sucesso!');
            setErrorMessage('');
            resetForm();
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
            setErrorMessage('Erro ao cadastrar usuário. Tente novamente.');
            setSuccessMessage('');
        }
    };

    return (
        <div className="register-page">
            <h1>Crie sua conta:</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Senha:</label>
                    <input
                        type="password"
                        name="senha"
                        value={formData.senha}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="save-button">Salvar</button>
            </form>
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
};

export default RegisterPage;