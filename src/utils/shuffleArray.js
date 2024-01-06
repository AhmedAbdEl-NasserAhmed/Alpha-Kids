export function shuffleArray(array) {
  let shufffledArray = [];

  let usedIndexes = [];

  let i = 0;

  while (i < array?.length) {
    let randomNumber = Math.floor(Math.random() * array?.length);

    if (!usedIndexes.includes(randomNumber)) {
      //
      shufffledArray.push(array[randomNumber]);

      usedIndexes.push(randomNumber);

      i++;
    }
  }

  return shufffledArray;
}
