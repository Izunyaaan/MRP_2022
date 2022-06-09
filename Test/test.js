const keyword_extractor = require("keyword-extractor")

const sentence = 'The Prophet (ﷺ) said, "The superiority of `Aisha to other women is like the superiority of Tharid to other kinds of food . "'

const extraction_result =
    keyword_extractor.extract(sentence, {
        language: "english",
        remove_digits: true,
        return_changed_case: true,
        remove_duplicates: false

    });

console.log(extraction_result);