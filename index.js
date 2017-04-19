'use strict'

const countries = require('./countries.json')
const normalize = require('normalize-for-search')
const levenshtein = require('leven')

const matchCountry = (name) => {
	if (countries[name]) return countries[name]

	const normalized = normalize(name)
	if (countries[normalized]) return countries[normalized]

	let matches = 0
	let match = null
	for (let country in countries){
		if (levenshtein(country, normalized) <= 1) {
			if (matches > 0) return null
			matches++
			match = countries[country]
		}
	}
	return match
}


module.exports = matchCountry
