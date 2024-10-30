import { AuthorizationData } from "../entities/AuthorizationDataEntity"

export interface IAuthentification{
    authorization(username: string, password: string): Promise<AuthorizationData>
}


