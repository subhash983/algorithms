const reverseWordsInPlace = sentence => {
  return sentence
    .split(/\s/)
    .map(word =>
      word
        .split("")
        .reverse()
        .join('')
    )
    .join(" ");
};

console.log(reverseWordsInPlace('Hello World'));
