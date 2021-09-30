let v1 = 10;
console.log(v1);

let v2 = 20;
console.log(v2);

const choi = {
    name: '최선영',
    age: 20,
    score: 90
}

const han = {
    name: '한동일',
    age: 21,
    score: 89
}

for(let field in han) {
    console.log(field + '-'+han[field]);
}

const yun = {
    name: '윤희성',
    age: 22,
    score: 88
}

console.log(choi.name); // . 연산자
console.log(choi['age']); // [ ' 필드명 ' ]

let field = 'score';
console.log(choi[field]); //choi['score']

const persons = [ choi , han , yun ];
console.log(persons);
console.log(persons[0]);
console.log(persons[0].name);
console.log(persons[0]['age']);
field = 'score' ;
console.log(persons[0][field]);

//출력 방법1
for (let i = 0 ; i < persons.length ; i ++) {
    console.log(persons[i].name);
    console.log(persons[i]['age']);
    field = 'score' ;
    console.log(persons[i][field]);
    console.log('=====');
}
//출력 방법2
for(let person of persons) {
    console.log(person.name);
    console.log(person['age']);
    field = 'score' ;
    console.log(person[field]);
    console.log('=====');
}
//출력 방법3
for(let person of persons) {
    for(let field in person) {
        console.log(person[field]);  
    }
    console.log('=====');
}

//doc에 출력
for(let person of persons) {
    document.write('<ul>');
    for(let field in person) {
        document.write('<li class="'+ field +'">' + person[field] + '</li>')
    }
    document.write('</ul>');
}

// document.write('<thead> 
//                     <tr>
//                         <th>이름</th>
//                         <th>나이</th>
//                         <th>점수</th>
//                     </tr>   
//                 </thead>');
// for(let person of persons) {
//     document.write('<ul>');
//     for(let field in person) {
//         document.write('<li>' + field +' : ' + person[field] + '</li>')
//     }
//     document.write('</ul>');
// }
