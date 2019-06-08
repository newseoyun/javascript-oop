function Person(name, first, second, third){
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
}

Person.prototype.sum = function(){
    return this.first + this.second + this.third;
}  //sum함수를 별도로 빼서 생성자들이 이걸 같이 사용하며 메모리 절약

var Lee = new Person("Lee", 10, 20, 30);
var Park = new Person("Park", 30, 20, 30);
var Kim = new Person("Kim", 50, 120, 200);
Kim.sum = function(){
    return this.first + this.second;
}

console.log(Lee.sum());
console.log(Park.sum()); 
console.log(Kim.sum()); 