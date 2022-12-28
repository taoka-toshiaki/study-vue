const addMark = <T>(msg:T):string =>{
    return msg + "<T>";
}
console.log(addMark<string>("A"));
console.log(addMark<number>(1));


