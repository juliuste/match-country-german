'use strict'

const countries = require('./countries.json')
const normalize = require('normalize-for-search')
const levenshtein = require('leven')

const equals = (a, b) => {
	return levenshtein(normalize(a), normalize(b)) === 0
}
// levenshtein not necessary, a relict of an older version. used to tolerate distance 1, but since there is "gambia" vs "sambia" in german, this doesnt work out

const match = (name) => {

	for(let country in countries){
		if(equals(country, name)) return countries[country]
	}
	return null
}


module.exports = match
