const assert = require("assert");

const {
  getFirstName,
  getLastName,
  getGender,
  getCurrencyFromCountryCode,
  getNativeTextFromLanguageCode,
  getPhoneCodeFromCountryCode,
  getCountryCode,
  getCountryFromCountryCode,
  identifyLanguageFromText,
} = require("./index.js");

assert.equal("lakshya", getFirstName("Lakshya Jain"));
OK(1);
assert.equal("jain", getLastName("Lakshya Jain"));
OK(2);
assert.equal("josh", getFirstName("Josh Smith"));
OK(3);
assert.equal("smith", getLastName("Josh Smith"));
OK(4);

assert.equal("male", getGender("John", "EN"));
OK(5);
assert.equal("female", getGender("Yaroslava", "EN"));
OK(6);
assert.equal("male", getGender("Zophanías", "EN"));
OK(7);
assert.equal("female", getGender("Bernardina", "EN"));
OK(8);

assert.equal("IN", getCountryCode("India"));
OK(9);
assert.equal("BS", getCountryCode("Bahamas"));
OK(10);

assert.equal("INR", getCurrencyFromCountryCode("IN"));
OK(11);
assert.equal("XAF", getCurrencyFromCountryCode("GQ"));
OK(12);

assert.equal("አማርኛ", getNativeTextFromLanguageCode("am"));
OK(13);
assert.equal("Башҡорт", getNativeTextFromLanguageCode("ba"));
OK(14);

assert.equal("267", getPhoneCodeFromCountryCode("BW"));
OK(15);
assert.equal("670", getPhoneCodeFromCountryCode("TL"));
OK(16);

assert.equal("India", getCountryFromCountryCode("IN"));
OK(17);
assert.equal("Bahamas", getCountryFromCountryCode("BS"));
OK(18);

console.log(identifyLanguageFromText("je vole vers les nuages"));

console.log("All Systems go, Everything's working boiz!")

function OK(num){
  console.log("OK : Test " + num + " passed");
}