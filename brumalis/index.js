const male = require("./data/gender/male");
const female = require("./data/gender/female");
const countries = require("./data/countries");

const languages = require("./data/languages");
const currency = require("./data/currency");
const phone = require("./data/phone");

const LanguageDetect = require("./languagedetect/index");
const lngDetector = new LanguageDetect();

//Extract the first name from a full name string
const getFirstName = function (fullName) {
  return fullName
    .toLowerCase()
    .replace(/^\s+|^0-9+|[^a-z-úñäâàáéèëêïîöôùüûœç\- ]+/g, "")
    .split(/\s/)[0];
};

//Extract the last name from a full name string
const getLastName = function (fullName) {
  const first_name = fullName
    .replace(/^\s+|^0-9+|[^a-z-úñäâàáéèëêïîöôùüûœç\- ]+/g, "")
    .split(/\s/)[0];
  return fullName
    .replace(first_name, "")
    .substring(1)
    .substring(1)
    .toLowerCase();
};

//Get Gender by Name
const getGender = function (firstName, lang) {
  firstName = firstName.toLowerCase();
  if (
    lang &&
    male[firstName] &&
    male[firstName][lang] &&
    female[firstName] &&
    female[firstName][lang]
  ) {
    return "uniSexual";
  } else if (lang && male[firstName] && male[firstName][lang]) {
    return "male";
  } else if (lang && female[firstName] && female[firstName][lang]) {
    return "female";
  } else if (male[firstName] && female[firstName]) {
    return "uniSexual";
  } else if (male[firstName]) {
    return "male";
  } else if (female[firstName]) {
    return "female";
  }
  return "unknown";
};

//Get Phone Code
const getPhoneCodeFromCountryCode = function (countryCode) {
  return phone[countryCode] || "unknown";
};

//Get Languages
const getNativeTextFromLanguageCode = function (languageCode) {
  return languages[languageCode].native || "unknown";
};

//Get Currency
const getCurrencyFromCountryCode = function (countryCode) {
  return currency[countryCode] || "unknown";
};

//Get CountryCode from name
const getCountryCode = function (country) {
  for (let i = 0; i < countries.length; i++) {
    const element = countries[i];
    if (element.name === country) return element.code;
  }
};

//Get Country from Code
const getCountryFromCountryCode = function (countryCode) {
  for (let i = 0; i < countries.length; i++) {
    const element = countries[i];
    if (element.code === countryCode) return element.name;
  }
};

//Language Identifier
const identifyLanguageFromText = function (text) {
  //Response Object from lang_detector
  const resp = lngDetector.detect(text);

  //Define MaxScore and Max Lang
  let max = -1;
  let maxLang = "unknown";

  //Loop through and find the maximum
  resp.map((e) => {
      if (e[1] > max) {
        max = e[1];
        maxLang = e[0];
      }
  });

  //Define Return
  const return_obj = {
    Status: "OK",
    TE: "average",
    Domain: "Outside Fulminata",
    response: {
      maxScore: max,
      percentage: Math.floor(max * 100),
      langDetected: maxLang,
      fullResp: resp,
    },
    auth_key : Math.floor(Math.random() * 1e10).toString() + "_outF"
  };

  return return_obj;
};

module.exports = {
  getFirstName,
  getLastName,
  getGender,
  getCurrencyFromCountryCode,
  getNativeTextFromLanguageCode,
  getPhoneCodeFromCountryCode,
  getCountryCode,
  getCountryFromCountryCode,
  identifyLanguageFromText,
};
