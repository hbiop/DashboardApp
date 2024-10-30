import {useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import "./LoginComponent.css"
import { AuthorizationController} from '../../../domain/controllers/AuthorizationServiceController';
import {ErrorService} from "../../../domain/ErrorService"
import { GetIdUseCase } from '../../../domain/use_cases/getIdUseCase';
import { SaveIdUseCase } from '../../../domain/use_cases/saveIdUseCase';
const AuthForm = () => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();
  const errorService = new ErrorService();
  const authorizationController = new AuthorizationController();
  const getIdUseCase = new GetIdUseCase();
  const saveIdUseCase = new SaveIdUseCase();
  async function handleSubmit(e:React.FormEvent){
    e.preventDefault();
    try{
    let id = await authorizationController.authorization(login, password);
    saveIdUseCase.saveUser(id.id);
    navigate('/dashboards', { replace: true })
    }
    catch(er:unknown){
        alert(errorService.handle(er));
    }
  }
  useEffect(() => {
    const id = getIdUseCase.getUser();
    if(id != null){
      navigate('/dashboards', { replace: true })
    }
  });
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
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default AuthForm;

