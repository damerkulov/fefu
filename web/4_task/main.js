// #1

let side = prompt("square's side: ", '');

if( side <= 0 ){
    alert("error");
} else {
    let S = side*side;
    alert("S = " + S);
}

// #2

function eratosthenes(n){
    var array = [];
    var tmpArray = [];
    var maxPrimeFactor = 0;
    var upperLimit = Math.sqrt(n);
    var output = [];


    for(var i = 2; i < n; i++){
        array.push(i);
    }

    for(var i = array[0]; i < upperLimit; i = array[0]){
        removeMultiples:
            for(var j = i, k = i; j < n; j += i){
                var index = array.indexOf(j);
                if(index === -1)
                    continue removeMultiples;
                else
                    array.splice(index,1);
            }
        tmpArray.push(k);
    }
    array.unshift(tmpArray);
    alert(array + ' ');
    return array;
}

let n = prompt("Простые числа до: ", '');
eratosthenes(n)

// #3

let str = prompt('Количество строк матрицы: ','');
let col = prompt('Количество столбцов: ', '');
let M = [];
let sum = 0;

for (let i = 0; i < col; i++){
    M[i] = [];
    for (let j = 0; j < str; j++){
        M[i][j] = Math.ceil(Math.random()*100.);
        sum += M[i][j];
    }
}
console.log(M);

let center = Math.ceil(sum/(col*str));
let M1 = [];

for (let i = 0; i < col; i++){
    M1[i] = [];
    for (let j = 0; j < str; j++){
        M1[i][j] = M[i][j]-center;
    }
}

for (let i = 0; i < col; i++){
    document.writeln(M1[i] + '<br>');
}

// #4
/*

function getRandomInt(min, max){
    let rand = min + Math.random() * (max - min);
    return Math.floor(rand);
}
function getArray(n) {

    for (let i = 0; i < n; i++) {
        M[i] = [];
        for (let j = 0; j < n; j++) {
            M[i][j] = getRandomInt(1, 50);
        }
    }

    for (let i = 0; i < M.length; i++) {
        for (let j = 0; j < M.length; j++) {
            if (j == M.length - 1)
                document.write(M[i][j]);
            else
                document.write(M[i][j] + " ");
        }
        document.write("<br>");
    }
}

function getResultArray(a){

    let tempArr = [];

    for(let low = 0, high = a.length-1; low < high; low++, high--){
        tempArr[0] = a[low];
        a[low] = a[high];
        a[high] = tempArr[0];
    }

    for(let i = a.length-2; i >= 0; i--){
        a[i] = a[i].reverse();
        i--;
    }

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length; j++) {
            document.writeln(a[i][j] + " ");
        }
        document.writeln("<br>");
    }
}

let M = [];
let n = prompt('разряд матрицы: ','');
getArray(n);
document.write("<br>");

getResultArray(M);


*/