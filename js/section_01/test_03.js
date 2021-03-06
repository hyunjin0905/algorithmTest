// 세 수 중 최솟값
function minNumber(num1, num2, num3) {

    let data, data2;


    if (num1 > num2) data = num2;
    else data = num1;

    if (data > num3) data2 = num3;
    else data2 = data;

    return data2;
}

const minData = minNumber(6,5, 11)

function minNumber2(num1, num2, num3) {
    let answer;
    if (num1 < num2) answer = num1;
    else answer = num2 ;
    if (num3 < answer) answer = num3;

    return answer;
}

const minData2 = minNumber2(3,2, -1)

console.log(minData2);


// 삼각형 판별하기
/*
삼각형의 결정조건
세 변의 길이를 알 때 (가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야)
두 변의 길이와 그 사이 끼인각의 크기를 알 때
한 변의 길이와 양쪽 끝각의 크기를 알 때

 */

function solution (a, b, c) {
    let answer= "YES", max;
    let sum = a + b + c;
    if (a > b) max = a;
    else max = b;
    if (c > max) max = c;
    if ((sum - max) <= max) answer = "NO"

    return answer;
}

// console.log(solution(13,33,17))

// 연필 개수
// 12pcs - 1das
// 1 person - 1pcs
// n person => n das?
// 3 person - 1das
// 13 person - 2das
// 24 person - 2das
// 36 person - 3das
// 48 person - 4das
// 48 / 12 = 4 === 0
// 47 / 12 = n -> 반올림
// 49 / 12 = n -> 반올림


const pencilDas = (persons) => {
    if (persons === 0) return;
    const oneDas = 12;
    let dasCount = 0;
    dasCount = Math.ceil(persons / oneDas);

    return dasCount;
}

const test1 = pencilDas(13);
console.log(test1);

const test2 = pencilDas(25);
console.log(test2);

const test3 = pencilDas(178);
console.log(test3);



// 1부터 N 까지 구하기

const plusData = (num) => {
    let sum = 0;
    for (let i = 0; i <= num; i++){
        sum += i;
    }

    return sum;
}

const test5 = plusData(6);
console.log(test5);

const test6 = plusData(10);
console.log(test6);


// 최솟값 구하기

const searchMinValue = (data) => {
    const a = data[0] < data[1]? data[0] : data[1];
    const b = data[2] < data[3]? data[2] : data[3];
    const c = data[4] < data[5]? data[4] : data[5];
    const d = data[6] < data[7]? data[6] : data[7];

    let A , B;
    if (a < b) A = a;
    else A = b;

    if (c < b) B = c;
    else B = b;


    if (A < B) minNum = A;
    else minNum = B;


    return minNum;
}


const solution2 = (numList) => {
    let answer;
   // let min = Number.MIN_SAFE_INTEGER;
    let min = numList[0];
    for (let i = 0; i < numList.length; i++) {
        if (numList[i] < min) min = numList[i];
    }
    answer = min;
    return answer;

}
const data = [5, 3, 7, 11, 2, 15, 17];
const test7 = searchMinValue(data);
console.log(test7);

const test8 = solution2(data);
console.log(test8);

const solution3 = (arr) => {
    let answer = Math.min(...arr);
    console.log(Math.max(...arr));
    // arr[0], arr[1] , arr[2]  ...arr[6] 까지 펼쳐준다
    // 전개 연산자 안쓰고
    console.log(Math.max.apply(null, arr));

    return answer;
}


const test9 = solution3(data);
console.log(test9);



























