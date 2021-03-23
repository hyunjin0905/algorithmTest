function overlapStringRemove(str) {
    const strArr = [];
    for (let i = 0; i < str.length; i++) {
       if (strArr.indexOf(str[i]) === -1) {
           strArr.push(str[i]);
       }
    }
    return strArr.join('');
}
const changedStr_01 = overlapStringRemove("ksekkset");
console.log(changedStr_01);



function solution_01(str) {
    let answer = "";
    for (let i = 0; i < str.length; i++) {
        // str.indexOf(str[i]) 단어의 최초위치
        console.log(str[i], i, str.indexOf(str[i]));
        if (str.indexOf(str[i]) === i) {
          answer += str[i];
        }

    }
    return answer;
}

const changedStr_02 = solution_01("ksekkset");
console.log(changedStr_02)



function solution_02(str) {
    let count = 0;
    let position = str.indexOf("k");
    while (position !== -1) {
        count++;
        position = str.indexOf("k", position + 1);
    }
    return count;
}

const changedStr_03 = solution_02("ksekkset");
console.log(changedStr_03)