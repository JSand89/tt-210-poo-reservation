export class Customer {
    private name:string
    private phoneNumber:string
    private email?:string
    constructor(name:string,phoneNumber:string,email?:string){
        this.name = name,
        this.phoneNumber = phoneNumber,
        this.email = email
    }
    public getName():string{
        return this.name
    }
    public getPhoneNumber():string{
        return this.phoneNumber
    }
    public getEmail():string | undefined{
        return this.email
    }
    public setEmail(newEmail: string):void{
        this.email = newEmail
    }
}