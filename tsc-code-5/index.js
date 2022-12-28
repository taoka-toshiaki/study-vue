var man = /** @class */ (function () {
    function man() {
    }
    man.prototype.view = function (name, age) {
        this.name = name;
        this.age = age;
        console.log(this.name + 'は' + this.age + '歳です');
    };
    return man;
}());
(new man()).view('taoka', 39);
