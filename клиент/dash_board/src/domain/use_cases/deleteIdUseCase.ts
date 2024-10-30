export class DeleteIdUseCase {
    deleteUser(): void{
        localStorage.removeItem('id')
    }
}