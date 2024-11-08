import { IAuthentification } from "../../domain/repository/AuthentificationRepository";
import { AuthorizationData } from "../../domain/entities/AuthorizationDataEntity";
export class AuthorizationService implements IAuthentification{
    async authorization(username: string, password: string):Promise<AuthorizationData>{
        const response = await fetch('https://localhost:7250/dashboard/Authorization?login='+username+'&parol='+password);
    
        if (!response.ok) {
            throw new Error('Login failed');
        }
        return await response.json(); 
    };
    
}