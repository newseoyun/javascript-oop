//나만의 객체 만들기

var myMath = {
    PI: Math.PI,
    random: function(){
        return Math.random();
    },
    floor:function(val){ //내림
        return Math.floor(val);
    }
}

console.log(myMath.floor(4.9));
console.log(myMath.PI);
var pi = myMath.PI;
console.log(myMath.floor(pi));
