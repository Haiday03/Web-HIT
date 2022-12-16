var courses = ['c++', 'Java', 'Javascript'];

//Ham them 1 phan tu vao mang bat ky

const addCourse = (Array,b) => {
   // let n = 0;
   // for(var i = 0;i < Array.length;i++) n++;

    Array[Array.length] = b;
}
addCourse(courses,'go');
console.log(courses);
//Ham lay ra pha tu dau tien cua mang

const getFirstElement = (oj) => {
    return oj[0];
}

var firstElement = getFirstElement(courses);
console.log(firstElement);

//Ham noi cac phan tu thanh 1 chuoi

const joinArray = (ar,KT) => {
    var str;
    for(var i = 0;i < ar.length;i++){
        str += ar[i];
        if(i != ar.length - 1) str += KT;
    }
    return str;
}

var result1 = joinArray(courses, ",");
var result2 = joinArray(courses, " * ");
console.log(result1);
console.log(result2);





