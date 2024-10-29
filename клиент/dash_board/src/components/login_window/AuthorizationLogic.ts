export const authorization = async (username: string, password: string):Promise<Data> => {
    const response = await fetch
    ('https://localhost:7250/authorization?login='+username+'&parol='+password);

    if (!response.ok) {
        throw new Error('Login failed');
    }

    //const data: Data = await response.json();
    return await response.json(); 
};



interface Data{
    id:number
}