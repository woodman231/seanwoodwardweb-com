export default function slugifyString(stringToSlugify) {
    var allWordsInString = stringToSlugify.split(' ');

    for (var w = 0; w < allWordsInString.length; w++) {
        // Remove any punctuation from each word.
        // Set the result to Lower Case Letters
        allWordsInString[w] = allWordsInString[w].replace(/[^\w\s]|_/g, '').toLowerCase();
    }

    // Join each word with a dash
    var lowerCasePunctuationlessString = allWordsInString.join('-');

    return lowerCasePunctuationlessString;
}