interface check{
    name:string;
    age:number;
}
class man implements check{
    public name:string;
    public age:number;
    public view(name:string,age:number):void{
        
        this.name = name;
        this.age = age;
        console.log(this.name + 'は' + this.age + '歳です');
    }
}
(new man()).view('taoka',39);