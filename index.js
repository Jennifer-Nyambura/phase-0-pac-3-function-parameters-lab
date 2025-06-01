function logTwoValues(value1, value2) {
  console.log(`Value 1: ${value1}, Value 2: ${value2}`);
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

console.log(introductionWithLanguageOptional("Nifa")); 
// Output: Hi, my name is Nifa and I am learning to program in JavaScript.

console.log(introductionWithLanguageOptional("Nifa", "Python")); 
// Output: Hi, my name is Nifa and I am learning to program in Python.
