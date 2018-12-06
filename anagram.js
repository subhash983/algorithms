// const makeAnagram = (input1, input2) => {
//     let charatersToRemove = [];
//     charatersToRemove = charatersToRemove.concat(input1.split('').filter(ele => !input2.split('').includes(ele)));
//     console.log(charatersToRemove);
//     charatersToRemove = charatersToRemove.concat(input2.split('').filter(ele => !input1.split('').includes(ele)));
//
//     console.log(charatersToRemove);
//     let inpu1Obj = {};
//     let inpu2Obj = {};
//     input1.split('').forEach(ele => {
//         if (!charatersToRemove.includes(ele)) {
//             if (inpu1Obj[ele]) {
//                 inpu1Obj[ele] += 1;
//             } else {
//                 inpu1Obj[ele] = 1;
//             }
//         }
//     });
//
//     input2.split('').forEach(ele => {
//         if (!charatersToRemove.includes(ele)) {
//             if (inpu2Obj[ele]) {
//                 inpu2Obj[ele] += 1;
//             } else {
//                 inpu2Obj[ele] = 1;
//             }
//         }
//     });
//
//     let count = 0;
//     for (var key in inpu2Obj) {
//         count += Math.abs(inpu1Obj[key] - inpu2Obj[key]);
//     }
//     return count + charatersToRemove.length;
// };

function makeAnagram(a, b) {
    var charatersToRemoveObj = {};
    for (var char of a) {
        if (charatersToRemoveObj[char]) {
            charatersToRemoveObj[char]++;
        } else {
            charatersToRemoveObj[char] = 1;
        }
    }

    for (var char of b) {
        if (charatersToRemoveObj[char]) {
            charatersToRemoveObj[char]--;
        } else {
            charatersToRemoveObj[char] = -1;
        }
    }
    let count = 0;
    for (var key in charatersToRemoveObj) {
        count += Math.abs(charatersToRemoveObj[key]);
    }
    return count;
}



console.log(makeAnagram('cde', 'abc'));
