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
삼각형의 결정조건
세 변의 길이를 알 때 (가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야)
두 변의 길이와 그 사이 끼인각의 크기를 알 때
한 변의 길이와 양쪽 끝각의 크기를 알 때

function