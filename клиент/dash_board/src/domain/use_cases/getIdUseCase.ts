export class GetIdUseCase {
    getUser(): number | null {
        let item = localStorage.getItem('id');
        if(item != null){
            return parseInt(item);
        }else{
            return item;
        }
    }
}