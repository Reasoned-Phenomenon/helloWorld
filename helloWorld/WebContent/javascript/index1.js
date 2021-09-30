
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

const yun = {
    name: '윤희성',
    age: 22,
    score: 88
}


// const persons = [choi, han, yun];
// document.write('<table border="1">');

//     document.write('<thead>');
//         document.write('<tr>');

//             document.write('<th> 이름 </th>');
//             document.write('<th> 나이 </th>');
//             document.write('<th> 성적 </th>');

//         document.write('</tr>');
//     document.write('</thead>');

//     document.write('<tbody>');
//         for(let person of persons) {
//             document.write('<tr>');
//             for(let field in person) {
//                 document.write('<tb>' + person[field] + '</tb>')
//             }
//             document.write('</tr>');
//         }
//     document.write('</tbody>');

// document.write('</table>');


// const persons = [choi, han, yun];
// document.write('<table border="1">');

//     document.write('<thead>');
//         document.write('<tr>');

//             document.write('<th> 이름 </th>');
//             document.write('<th> 나이 </th>');
//             document.write('<th> 성적 </th>');

//         document.write('</tr>');
//     document.write('</thead>');

//     document.write('<tbody>');
//         for(var person of persons) {
//             document.write('<tr>');
//             for(var field in person) {
//                 document.write('<td>' + person[field] + '</td>')
//             }
//             document.write('</tr>');
//         }
//     document.write('</tbody>');

// document.write('</table>');

function createTable() {
    const persons = [choi, han, yun];
    let tag = '<table border="1"><thead><tr><th>이름</th><th>나이</th><th>점수</th><th>합격여부</th></tr></thead><tbody>';
    
    for(let person of persons) {
        tag +='<tr>';
        for(let field in person) { //field 갯수 만큼
            tag += '<td>'+person[field]+'</td>';
        }
        if(person.score >= 90) {
            tag += '<td>Pass</td>'
        } else {
            tag += '<td>Fail</td>'
        }
        tag +='</tr>';
    }
    tag = tag + '</tbody></table>'
    document.write(tag);
}

createTable();
