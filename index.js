'use strict'

const countries = require('./countries.json')
const normalize = require('normalize-for-search')
const levenshtein = require('leven')

const match = (name) => {
	if (countries[name]) return countries[name]

	const normalized = normalize(name)
	if (countries[normalized]) return countries[normalized]

	// levenshtein not necessary, a relict of an older version. used to tolerate distance 1, but since there is "gambia" vs "sambia" in german, this doesnt work out
	for(let country in countries){
		if(levenshtein(country, normalized) === 0) return countries[country]
	}
	return null
}


module.exports = match
