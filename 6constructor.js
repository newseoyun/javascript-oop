var d1 = new Date('2019-5-18');
console.log(d1.getFullYear());
console.log(d1.getMonth());

console.log("Date:", Date);


/* function Person(){
    this.name = "kim";
    this.first = 30;
    this.second = 10;
    this.third = 20;
    this.sum = function(){
        return this.first + this.second + this.third;
    }
} */

function Person(name, first, second, third){
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
    this.sum = function(){
        return this.first + this.second + this.third;
    }//컨스트럭터 펑션
}

var Lee = new Person("Lee", 10, 20, 30);
var Park = new Person("Park", 30, 20, 30);
console.log(Lee);
console.log(Lee.sum());
console.log(Park.sum()); 