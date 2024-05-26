export class User {
    id: number | undefined;
    email: string | undefined;
    role: string | undefined;
    password: string | undefined;
    constructor(user: any){
        this.id = user.id;
        this.email = user.email;
        this.role = user.role;
        this.password = user.password;
    }
}
