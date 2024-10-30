export class SaveIdUseCase {
    saveUser(id: number): void {
        localStorage.setItem('id', id.toString());
    }
}