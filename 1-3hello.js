var memberarr = ['1arr', '2arr', '3arr', '4arr']


var members = {
    manager : 'egoing',
    developer : 'hahaha',
    designer : 'kakaka'
}


console.log("값에 접근하는 방법");
console.log("방법1 ", members.manager);
console.log("방법2 ", members['manager']);


console.group('console.group---배열---');
var i = 0;
while (i < memberarr.length) {
    console.log(i, memberarr[i]);
    i = i + 1;
}
console.groupEnd();


console.group('console.group---오브젝트---');
for(var 키 in members){
    console.log(키, members[키]);  //여기 들어가는 키값은 왜 따옴표를 안붙여도 될까?
}
console.groupEnd();


