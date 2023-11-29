/**
 * return a Map of the unique letters and arrays of words that are made up of those letters
 * @param {array} words An array  of words
 */
function sameLetters(words) {
	const results = new Map();

	for (let word of words) {
		let letters = new Set(word.toLowerCase());
		let lettersArr = [...letters].sort();
		let sortedWord = lettersArr.join('');
  
    if (results.has(sortedWord)) {
      results.get(sortedWord).push(word)
    } else {I
      results.set(sortedWord, [word])
    }
  }

	return results;
}

module.exports = sameLetters;
