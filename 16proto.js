function Person(name, first, second){
    this.name = name;
    this.first = first;
    this.second = second;
}

Person.prototype.sum = function(){
    return this.first + this.second;
}

function Persontwo(name, first, second, third){
    Person.call(this, name, first, second); 
    this.third = third;
}

Persontwo.prototype.__proto__ = Person.prototype;  // 퍼슨투가 sum을 못찾아서 지정해준것임
// = Persontwo.prototype = Object.create(Person.prototype);   이게 표준

Persontwo.prototype.avg = function(){
    return (this.first + this.second + this.third)/3;
}

var Lee = new Persontwo('Lee', 20, 30, 100);

console.log("Lee sum :", Lee.sum());
console.log("Lee avg :", Lee.avg());


