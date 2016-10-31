'use strict'

const countries = require('./countries.json')
const slug = require('slug')
const levenshtein = require('fast-levenshtein').get

const equals = (one, two) => (levenshtein(slug(one, ''), slug(two, '')) == 0) // levenshtein not necessary, a relict of an older version. used to tolerate distance 1, but since there is "gambia" vs "sambia" in german, this doesnt work out

const match = (name) => {
	for(let country in countries){
		if(equals(country, name)) return countries[country].toLowerCase()
	}
	return null
}


module.exports = match