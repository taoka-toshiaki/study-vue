const addMark = <T>(msg:T):string =>{
    return msg + "<T>";
}
console.log(addMark<string>("A"));
console.log(addMark<number>(1));
// 型いろいろ
// boolean
// number
// string
// any
// unknown
// void
// null 
// undefined
// never
// object

