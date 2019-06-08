//ECMA6 부터 class를 지원한다.

class Person{
    constructor(a, b, c){  //필수로 수행될 기본값
        this.name = a;
        this.first = b;
        this.second = c;
    }
    sum(){
        return this.first + this.second;
    }
}


var kim = new Person('kim', 10, 20);
console.log(kim.sum());
