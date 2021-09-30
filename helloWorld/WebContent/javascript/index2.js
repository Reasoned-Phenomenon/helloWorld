function sum(a, b) {
    let n1 = a;
    let n2 = b;
    return n1+n2;
}

console.log(sum(11,22));

function createObject(name, age, score) {
    let obj = { //new Object();
    name: name,
    age: age
    };
    obj.score = score;
    obj.pass = (score >= 60 ) ? 'Pass' : 'Fail';

    return obj;
}

let newObj = createObject('유상우', 23, 85);
console.log('이름: ' + newObj.name + ' 나이: ' + newObj.age + ' 점수 :'+newObj.score+' 합격여부 :'+newObj.pass);

//TR 태그 생성 연습.
function creatTr() {

}