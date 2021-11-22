# Brumalis
## Globalization Made Easy

**Brumalis is an Inhouse `AI`, `ML`, and `GeoData` package developed inhouse for the website [fulminata]("https://www.youtube.com/watch?v=dQw4w9WgXcQ"). It is a complete package which includes :-**

- **Language Detection**, using `n-grams` and `naive bayes`
- Whole Bunch of Data 
   - **Phone Number** By Country (If you want to Contact your user using Twilio or something)
   - **Currency By Country** (If you want to add Payments with `Stripe` or something)
   - **Gender Detection** using `naive bayes` and `K-Means`
   - **Native Language** by country (If you want to greet your users _authentically_)

---
## Installation
`npm i brumalis` (for npm)\
<br>
`yarn add brumalis` (for yarn)

Write that and you're ready to go !

## Get Started
Brumalis is supported in both the `import` and `require` syntaxes.

To Add Brumalis, write
```js
const brumalis = require("brumalis");
// or
import * as brumalis from "brumalis";
```

## Some Examples
### Separate First Name and Last Name
```js
const brumalis = require("brumalis");
console.log("First Name = " + brumalis.getFirstName("Tom Brady") + 
           ", Last Name = " + brumalis.getLastName("Tom Brady"));
```
**Output**
```shell
First Name = tom, Last Name = brady
```

### Get Native Text
```js
const brumalis = require("brumalis");
console.log(brumalis.getNativeTextFromLanguageCode("AM"));
```
**Output**
```shell
አማርኛ
```

### Identify Language
```js
const brumalis = require("brumalis");
console.log(brumalis.identifyLanguageFromText("je vole vers les nuages"));
```
**Output**
```shell
{
  Status: 'OK',
  response: {
    maxScore: 0.652,
    percentage: 65,
    langDetected: 'french',
  },
}
```

### Identify Gender
```js
const brumalis = require("brumalis");
console.log(brumalis.getGender("Bob","EN"));
```
**Output**
```shell
male
```

## Docs
`getFirstName(fullName)` : Returns First Name when Given Full Name\
<br>
`getLastName(fullName)` : Returns Last Name when Given Full Name\
<br>
`getGender(firstName,lang = "EN")` : `firstName` is the firstName of the Person we want to get the Gender of, `lang` is the language that person speaks. `lang` is set to english as default.\
<br>
`getCountryCode(country)` : Returns the 2 letter Country Code\
<br>
`getCurrencyFromCountryCode(countryCode)` : Returns the country from the 2 letter Country Code\
<br>
`getNativeTextFromLanguageCode(langCode)` : Returns the Native Text from the 2 letter Language Code\
<br>
`getPhoneCodeFromCountryCode(countryCode)` : Returns the Phone Code from the 2 letter Country Code\
<br>
`getCountryFromCountryCode(countryCode)` : Returns the Country from the 2 letter Country Code

## Why Brumalis ?
 - I'm Asian so you know it's going to work
 - Performance. No 3rd Party Libraries. Renders Package in 0.05s
 - Everything in one place. Globalization in one package
 - Easy to read source code. Only one index file. Easily editable and modifiable
 - I'm out of Reasons PLEASE INSTALL IT

## License
You bet it's MIT

## Creator
That's me, Lakshya Jain, a 13 year old Asian kid from India. So you know this is gonna be great lmao.


Well, That's Pretty Much it! Hoped you like it. I developed this for myself initially while working on [fulminata]("https://www.youtube.com/watch?v=dQw4w9WgXcQ"), but I decided to make it an NPM package.So the source is garbage, pls don't checkout my github
