# match-country-german

[![Greenkeeper badge](https://badges.greenkeeper.io/juliuste/match-country-german.svg)](https://greenkeeper.io/)

Try to match given german country name with its [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1) code.

[![npm version](https://img.shields.io/npm/v/match-country-german.svg)](https://www.npmjs.com/package/match-country-german)
[![Build Status](https://travis-ci.org/juliuste/match-country-german.svg?branch=master)](https://travis-ci.org/juliuste/match-country-german)
[![dependency status](https://img.shields.io/david/juliuste/match-country-german.svg)](https://david-dm.org/juliuste/match-country-german)
[![dev dependency status](https://img.shields.io/david/dev/juliuste/match-country-german.svg)](https://david-dm.org/juliuste/match-country-german#info=devDependencies)
[![license](https://img.shields.io/github/license/juliuste/match-country-german.svg?style=flat)](LICENSE)

## Usage

```javascript
const match = require('match-country-german')

match('Deutschland') // 'DE'
match('vereinigte staaten von amerika') // 'US'
match('Großbritannin') // 'GB'
match('Großbrltannein') // null
```

For e.g. `Xambia`, there are two possible countries `Sambia` and `Gambia`. In this case, `match` will return `null`.

## Contributing

If you found a bug, want to propose a feature or feel the urge to complain about your life, feel free to visit [the issues page](https://github.com/juliuste/match-country-german/issues).
