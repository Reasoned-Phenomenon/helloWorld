'hello'.slice(0,1);
'hello'.substring(0,3);
'hello'.substr(1,2);


function checkGender (birthInfo) {
    let year = parseInt(birthInfo.slice(0,2));
    let gen;
    if (birthInfo.length==14) {
        gen = birthInfo.slice(7,8)
    } else if (birthInfo.length==13){
        gen = birthInfo.slice(6,7)
    }
    
    if ((year>21)&&(gen==1) || (year<=21)&&(gen ==3)) {
        return '남자';
    } else if ((year>21)&&(gen==2) || (year<=21)&&(gen ==4)) {
        return '여자';
    } else {
        return 'error';
    }

}
console.log(checkGender('970101-2345678'));
console.log(checkGender('970101-1345678'));
console.log(checkGender('000101-3345678'));
console.log(checkGender('0109014567890'));


const cars = {
    a:"Saab", 
    b:"Volvo", 
    c:"BMW"
};

const cars = ["Saab", "Volvo", "BMW"];
