# Brumalis
#### AI / ML / IDK

Brumalis is an Inhouse `AI`, `ML`, and `GeoData` package developed inhouse for the website [fulminata]("https://www.youtube.com/watch?v=dQw4w9WgXcQ"). It is a complete package which includes

- Language Detection, using `n-grams` and `naive bayes`
- Whole Bunch of Data 
   - Phone Number By Country (If you want to Contact your user using Twilio or something)
   - Currency By Country (If you want to add Payments with `Stripe` or something)
   - Gender Detection using `naive bayes` and `K-Means`
   - Native Language by country (If you want to greet your users _authentically_)

### Installation
`npm i Brumalis` (for npm)
`yarh add Brumalis` (for yarn)

Write that and you're ready to go !

### Get Started
Brumalis is supported in both the `import` and `require` syntaxes.

To Add Brumalis, write
```js
const brumalis = require("brumalis");
console.log(brumalis.getGender("John","EN"));
```

### Some Examples
#### Separate First Name and Last Name
```js
const brumalis = require("brumalis");
console.log("First Name = " + brumalis.getFirstName("Lakshya Jain") + 
           ", Last Name = " + brumalis.getLastName("Lakshya Jain"));
```
**Output**
```shell
First Name = lakshya, Last Name = jain
```

#### Get Native Text
```js
const brumalis = require("brumalis");
console.log(brumalis.getNativeTextFromLanguageCode("AM"));
```
**Output**
```shell
አማርኛ
```

#### Identify Language
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

#### Docs
`getFirstName(fullName)` : Returns First Name when Given Full Name
`getLastName(fullName)` : Returns Last Name when Given Full Name
`getGender(firstName,lang = "EN")` : `firstName` is the firstName of the Person we want to get the Gender of, `lang` is the language that person speaks. `lang` is set to english as default.
`getCountryCode(country)` : Returns the 2 letter Country Code
`getCurrencyFromCountryCode(countryCode)` : Returns the country from the 2 letter Country Code
`getNativeTextFromLanguageCode(langCode)` : Returns the Native Text from the 2 letter Language Code
`getPhoneCodeFromCountryCode(countryCode)` : Returns the Phone Code from the 2 letter Country Code
`getCountryFromCountryCode(countryCode)` : Returns the Country from the 2 letter Country Code

#### License
You bet it's `MIT`

#### Creator
That's me, Lakshya Jain


Well, That's Pretty Much it! Hoped you like it. I developed this for myself initially while working on [fulminata]("https://www.youtube.com/watch?v=dQw4w9WgXcQ"), but I decided to make it an NPM package.So the source is garbage, pls don't checkout my github