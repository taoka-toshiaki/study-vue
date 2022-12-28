class test{
    public tax : number;
    private price :number;
    constructor(price:number,tax?:number)
    {
        if(tax === undefined){
            this.tax = 10;
        }
        if(isFinite(price)){
            this.price = price;
        }else{
            this.price = 0;
        }
    }
    public getTax():number{
        return Math.round(this.price * (this.tax /100));
    }
}

let apple:test = new test(300);
console.log(apple.tax);
console.log(apple.getTax());
