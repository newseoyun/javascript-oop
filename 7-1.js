function Person(a, b, c, d){
    this.name = a;
    this.first = b;
    this.second = c;
    this.third = d;
}

var Kim = new Person("김씨", 10, 20, 30, 50);
Person.prototype.sum = function() {
    return this.first + this.second + this.third;
}
console.log(Kim.sum());