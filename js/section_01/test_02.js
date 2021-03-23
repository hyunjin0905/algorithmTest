function overlapWordRemove(count,word) {

    const wordArr = word.split(" ");
    const changedArr = [];

    for (let i = 0; i < count; i++) {
        if (changedArr.indexOf(wordArr[i]) === - 1) {
            changedArr.push(wordArr[i]);
        }
    }

    return changedArr.join(" ");
}

const changedStr01 = overlapWordRemove(5,"good time good time student");
console.log(changedStr01);



function solution(count, word) {
    let answer = "";
    const wordArr = word.split(" ");

    for (let i = 0; i < count; i++) {
        if (wordArr.indexOf(wordArr[i]) === i) {
            answer += wordArr[i]+" ";
        }
    }

    return answer;
}

const changedStr02 = solution(5,"good time good time student");
console.log(changedStr02);



function solution2(count, word) {
    let answer = "";
    const wordArr = word.split(" ");

    for (let i = 0; i < wordArr.length; i++ ) {
        answer = wordArr.filter((value, index) => {
            if(wordArr.indexOf(value) === index) {
                return value;
            }
        })
    }

    return answer;
}

const changeStr_03 = solution2(5,"good time good time student");
console.log(changeStr_03);