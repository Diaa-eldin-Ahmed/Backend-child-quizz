const { wordList } = require("./../model/TestData.json");

module.exports = (request, response) => {
    // I used map as a data structure to remove duplicates objects automatically
    // without the need to check if the selected object already exists or not
    let map = new Map();

    // Step1: First I will make sure that the map has at least 1 noun, 1 adverb, 1 adjective, 1 verb
    // Step2: Then I just insert the rest of randomly picked objects into the map
    const flags = {
        hasNoun: false,
        hasVerb: false,
        hasAdjective: false,
        hasAdverb: false,
    };

    //Step1
    while (map.size < 4) {
        let randomNumber = Math.floor(Math.random() * wordList.length);

        if (wordList[randomNumber].pos === "noun" && !flags.hasNoun) {
            map.set(wordList[randomNumber].id, wordList[randomNumber]);
            flags.hasNoun = true;
        }
        if (wordList[randomNumber].pos === "verb" && !flags.hasVerb) {
            map.set(wordList[randomNumber].id, wordList[randomNumber]);
            flags.hasVerb = true;
        }
        if (wordList[randomNumber].pos === "adjective" && !flags.hasAdjective) {
            map.set(wordList[randomNumber].id, wordList[randomNumber]);
            flags.hasAdjective = true;
        }
        if (wordList[randomNumber].pos === "adverb" && !flags.hasAdverb) {
            map.set(wordList[randomNumber].id, wordList[randomNumber]);
            flags.hasAdverb = true;
        }
    }

    //Step2
    while (map.size < 10) {
        let randomNumber = Math.floor(Math.random() * wordList.length);
        // Map will not insert any duplicate objects
        map.set(wordList[randomNumber].id, wordList[randomNumber]);
    }

    response.status(200).send(Array.from(map.values()));
};
