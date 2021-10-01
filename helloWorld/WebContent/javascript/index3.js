//index3.js
let messages = ['Hello', 'Good Morning', 'Hi'];

let ulTag = document.createElement('Ul'); //ul
// ulTag.innerHTML = '<li>Hello</li>';

for(let i = 0 ; i<messages.length;i++) {
    let liTag = document.createElement('li'); //<li></li>
    liTag.innerHTML = messages[i];
    ulTag.appendChild(liTag);
}
// console.log(ulTag);

//div에 자손으로 ulTag붙여주기
let divShow = document.getElementById('show');
// console.log(divShow);
divShow.appendChild(ulTag);

// const apple ={
//     name: '사과',
//     price: 1000
// };

// const banana = {
//     name: '바나나',
//     price: 2000
// }

let fruits = [{
    name: '사과',
    price: 1000
}, {
    name: '바나나',
    price: 2000
}, {
    name: '체리',
    price: 3000
}];


//div 찾기.
let ulTagF = document.createElement('ul');

for(let i = 0 ; i<fruits.length ; i++) {
    let liTagF = document.createElement('li');
    liTagF.innerHTML = fruits[i].name + ', '+ fruits[i].price;
    ulTagF.appendChild(liTagF);
}

let divFruit = document.getElementById('fruit');
divFruit.appendChild(ulTagF);


//div 찾기.
let multi = document.getElementById('multi');
let t = document.createElement('table');
t.setAttribute('border', '1');

let tr = document.createElement('tr');
let td= document.createElement('th');

let num = 6; //단
td.innerHTML = num + '단';
tr.appendChild(td);
t.appendChild(tr);
multi.appendChild(t);

for(let i = 1; i <= 9 ; i++) {
    tr = document.createElement('tr');
    td= document.createElement('td');
    td.innerHTML = num+'*'+i+'='+(num*i);
    tr.appendChild(td);
    t.appendChild(tr);
}
multi.appendChild(t);


