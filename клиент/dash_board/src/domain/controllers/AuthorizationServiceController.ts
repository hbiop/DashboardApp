import { IAuthentification } from "../repository/AuthentificationRepository";
import { AuthorizationService } from "../../data/api/AuthorizationService";
import { AuthorizationData } from "../entities/AuthorizationDataEntity";
export class AuthorizationController {
    private auth: IAuthentification;

    constructor() {
        this.auth = new AuthorizationService();
    }

    public async authorization(username: string, password: string): Promise<AuthorizationData> {
        return this.auth.authorization(username, password);
    }
}