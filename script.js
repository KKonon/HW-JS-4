//1
console.log("-------------Задание 1-------------");

let arr = [1,2,3,4,5];

for (i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

//2
console.log("-------------Задание 2-------------");

let arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10,  7];

for (i = 0; i <= arr2.length; i++){
    if (arr2[i] > -10 && arr2[i] < -3) {
        console.log(arr2[i]);
    }
}

//3
console.log("-------------Задание 3-------------");

let arr3 = [];
let result = 0;

for (i = 23; i <= 57; i++){
    arr3.push(i);
    result += i;
}
console.log(arr3);


console.log("-------------Задание 3 While-------------");

let whil = [];

let e = 23;

while (e <= 57){
    whil.push(e);
    e++;
}

console.log(whil);

console.log("-------------Задание 3 result-------------");
console.log("Сумма элемнтов" +  result);

//4
console.log("-------------Задание 4-------------");

arr4 = ['10', '20', '30', '50', '235', '3000'];

for (let i = 0; i < arr4.length; i++) {

    if (arr4[i][0] == '1' || arr4[i][0] == '2' || arr4[i][0] == '5') console.log(arr4[i]);
}

//5
console.log("-------------Задание 5 Doc.write-------------");

arr5 = ["ПН, ВТ, СР, ЧТ, ПТ, <b>СБ, ВС</b>"]

for (let i = 0; i < arr5.length; i++){
        document.write(arr5[i]);
}

//8
console.log("-------------Задание 8-------------");

let arr8 = [12, false, "Text", 4, 2, -5, 0];

let reversed = arr8.reverse();
console.log(reversed);
