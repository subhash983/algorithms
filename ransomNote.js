// const ransomNotePossible = (magazine, note) => {
//     let magazineWords = magazine.split(' ');
//     let isNotePossible = 'Yes';
//     note.split(' ').forEach(word => {
//         var indx = magazineWords.indexOf(word);
//         if (indx >= 0) {
//             magazineWords.splice(indx, 1);
//         } else {
//             isNotePossible = 'No';
//         }
//     });
//     return isNotePossible;
// };

const ransomNotePossible = (magazine, note) => {
    var words = {};
    for (var word of magazine) {
        if (words[word]) {
            words[word]++;
        } else {
            words[word] = 1;
        }
    }

    for (var word of note) {
        if (words[word] > 0) {
            words[word]--;
        } else {
            return 'NO';
        }
    }
    return 'YES';
};

console.log(ransomNotePossible('two times three is not four', 'two times two is four'));
