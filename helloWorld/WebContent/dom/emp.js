//데이터베이스 정보 -> EmpDAO - > json(서블릿) - > ajax 호출
let xhtp = new XMLHttpRequest();
xhtp.onload = function () {
    
    let data = JSON.parse(xhtp.responseText);
    //console.log(data);
    showEmpList(data);
    
}
xhtp.open('get', '../empJsonServlet.json');
xhtp.send();

function showEmpList(data) {

	//EmpDAO dao = new EmpDAO();
	
    let table, tr, td, txt;
    table = document.createElement('table');
    table.setAttribute('border','1');
    tr = document.createElement('tr');
    //title
    for ( let field in data[0]) {
        //console.log(field);
        td = document.createElement('th');
        txt = document.createTextNode(field);
        td.appendChild(txt);
        tr.appendChild(td);
    }

    td = document.createElement('th');
    td.innerHTML='삭제';
    tr.appendChild(td);

    table.appendChild(tr);
    //데이터
    for (let i=0 ; i < data.length ; i ++) {

        tr = document.createElement('tr');
        tr.onclick = function (e) {
            //console.log(this,e);
            
            document.getElementById('empId').value = this.childNodes[0].innerHTML; //id값
            document.getElementById('lname').value = this.childNodes[1].innerHTML; //id값
            document.getElementById('email').value = this.childNodes[2].innerHTML; //id값
            document.getElementById('hireDate').value = this.childNodes[3].innerHTML; //id값
            document.getElementById('job').value = this.childNodes[4].innerHTML; //id값
             
        }

        td = document.createElement('td');
        txt = document.createTextNode(data[i].empId);
        td.appendChild(txt);
        tr.appendChild(td);

        td = document.createElement('td');
        txt = document.createTextNode(data[i].lname);
        td.appendChild(txt);
        tr.appendChild(td);
        
        td = document.createElement('td');
        txt = document.createTextNode(data[i].email);
        // console.log(txt);
        td.appendChild(txt);
        tr.appendChild(td);
        
        td = document.createElement('td');
        txt = document.createTextNode(data[i].hireDate);
        // let txt2 = txt.substringData(0,11);
        // console.log(txt2);
        td.appendChild(txt);
        tr.appendChild(td);
        
        td = document.createElement('td');
        txt = document.createTextNode(data[i].job);
        td.appendChild(txt);
        tr.appendChild(td);

        td = document.createElement('td');
        let btnTag = document.createElement('button')
        btnTag.innerHTML = '삭제';
        btnTag.onclick = function (e) {
            e.stopPropagation(); // button < td < tr < table < body 이벤트로 상위로 전파됨. 상위로 전파되지 않게 하는 것.
        let id = this.parentNode.parentNode.firstChild.innerHTML;
        let tr = this.parentNode.parentNode;
        //삭제 서블릿. call
        let xhtp = new XMLHttpRequest();
        xhtp.onload = function () {
        console.log(xhtp.responseText);
        let result = JSON.parse(xhtp.responseText); // json -> obj
        if (result.retCode == 'success' ) {
            tr.remove();
        } else {
            window.alert('처리중 에러발생');
        }
        }
        xhtp.open('get','../delEmpServlet?delId='+id); //삭제 서블릿 넣어주기
        xhtp.send();
        
        }       
        td.appendChild(btnTag);	
        tr.appendChild(td);
        
        table.appendChild(tr);
    }
    document.getElementById('show').appendChild(table);
}

function reNew (data) {
    let target = document.querySelector('#show');
    target.innerHTML="";

    showEmpList(data);
}
		
		
	

