var test = /** @class */ (function () {
    function test(price, tax) {
        if (tax === undefined) {
            this.tax = 10;
        }
        if (isFinite(price)) {
            this.price = price;
        }
        else {
            this.price = 0;
        }
    }
    test.prototype.getTax = function () {
        return Math.round(this.price * (this.tax / 100));
    };
    return test;
}());
var apple = new test(300);
console.log(apple.tax);
console.log(apple.getTax());
