// 홀수
const searchOddNumber = (numList) => {

    //let oddNum = [];
    let sumOdd = 0;
    let minOdd;
    for (let i = 0; i < numList.length; i++){
        let minOdd = numList[0]
        if (numList[i] % 2 !== 0) {
            sumOdd += numList[i];
            if (minOdd < numList[i]) minOdd = numList[i]
        }
    }

  //  minOdd = Math.min(...oddNum);
    console.log(sumOdd, minOdd);

}

const numbers = [12, 77, 38,41, 53, 92, 85];

//searchOddNumber(numbers);

// 10 부제
// 날짜 3일
// 운전번호 둘째 자리가 같으면 위반


const searchStopCar = (date, carNumber ) => {

    let carCount = 0;
    for (let i of carNumber) {
        if (i % 10 === date) {
            carCount++;
        }
    }

    console.log(carCount);
}

const carNumber = [12, 20, 54, 30, 87, 91, 30];

searchStopCar(0, carNumber)











































