//상속

class Person{
    constructor(name, first, second){  //필수로 수행될 기본값
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum(){
        return this.first + this.second;
    }
}

class Persontwo extends Person{
    constructor(name, first, second, third){
        super(name, first, second);  // 부모 파라미터(매개변수)를 사용함
        this.third = third;
    }
    sum(){
        return super.sum() + this.third;   // super로 부모의 함수 또한 사용할 수 있음
    }
    avg(){
        return (this.first + this.second + this.third)/3;
    }
}


var kim = new Persontwo('kim', 10, 20, 60);
console.log("kim sum :", kim.sum());
console.log("kim avg :", kim.avg());
