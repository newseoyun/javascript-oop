var a = {
    name: 'abc',
    first: 10,
    second: 20,
    sum: function(){
        return this.first+this.second;
    }
}

console.log(a.name, a.sum());