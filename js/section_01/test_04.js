// 홀수
const searchOddNumber = (numList) => {

    let oddNum = [];
    let sumOdd = 0;
    let minOdd;
    for (let i = 0; i < numList.length; i++){
        if (numList[i] % 2 !== 0) {
            sumOdd += numList[i];
            oddNum.push(numList[i]);
        }
    }

    minOdd = Math.min(...oddNum);
    console.log(sumOdd, minOdd);

}

const numbers = [12, 77, 38,41, 53, 92, 85];

searchOddNumber(numbers);

// 10 부제










































