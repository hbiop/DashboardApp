import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

type Resp = {
  status: boolean
}

const AuthForm = () => {
  const authorization = async (login: string, parol:string) => {
    try {
      const response = await fetch("https://localhost:7250/m?login="+login+"&parol="+parol);
      
      // Проверяем, был ли запрос успешным
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data: Resp = await response.json();
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
      throw error; // перекидываем ошибку выше
    }
};
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();
  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    if (login == ""|| password == "") {
      alert("Пожалуйста, заполните все поля!");
      setError('Пожалуйста, заполните все поля!');
      return;
    }else{
      authorization("a", "a").then(data => {
        if(data.status){
          alert("sdavs");
          navigate('/dashboard', { replace: true });
        }
        else{
          alert("Логин или пароль были введены не верно");
        }
      })

    }

    console.log('Email:', login);
    console.log('Password:', password);
    setError('');
  };

  return (
    <div>
      <h2>Форма авторизации</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Email:
            <input
              type="text"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Пароль:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default AuthForm;

