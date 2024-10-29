export class LocalStorageService{
    saveUser(id: number): void {
        localStorage.setItem('id', id.toString());
    }
    getUser(): number | null {
        let item = localStorage.getItem('id');
        if(item != null){
            return parseInt(item);
        }else{
            return item;
        }
    }
    deleteUser(): void{
        localStorage.removeItem('id')
    }
}






