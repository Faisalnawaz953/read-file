let wordOccurence = [];
// function replace all occurences of string in a string
const replaceAll = (string, search, replace) => {
  return string.split(search).join(replace);
};
// function to calculate words occurence
const calculateWordsOccurance = (wordsArray) => {
  wordsArray.forEach((word, i) => {
    let isExists = wordOccurence?.findIndex(
      (singleWord, i) => singleWord?.word?.toLowerCase() === word?.toLowerCase()
    );
    if (isExists !== -1) {
      wordOccurence[isExists].count++;
    } else {
      wordOccurence.push({ count: 1, word });
    }
  });
};
function readFile(input) {
  let file = input.files[0];
  const results = document.getElementById('results');

  let reader = new FileReader();

  reader.readAsText(file);

  reader.onload = function () {
    let fileData = replaceAll(reader.result, '.', ''); // remove . from file data
    fileData = fileData.replace(/(\r\n|\n|\r)/gm, ' '); // remove line breaks from data
    fileData = fileData?.split(' '); // convert string into array splitting by space
    calculateWordsOccurance(fileData);
    wordOccurence.map((word) => {
      results.innerHTML += `<p>
         ${word?.count}
          ${'  '} ${word?.word}
 </p>`;
    });
  };

  reader.onerror = function () {
    console.log(reader.error);
  };
}
