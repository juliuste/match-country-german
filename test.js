'use strict'

const tape = require('tape')
const normalize = require('normalize-for-search')

const countries = require('./countries.json')
const match = require('.')

tape('countries.json has normalized keys', (t) => {
	for (let country in countries) {
		t.equal(country, normalize(country))
	}
	t.end()
})

tape('exact matches', (t) => {
	t.plan(6)
	t.equal(match('Deutschland'), 'DE')
	t.equal(match('USA'), 'US')
	t.equal(match('vereinigte staaten von amerika'), 'US')
	t.equal(match('Russland'), 'RU')
	t.equal(match('frANKreich'), 'FR')
	t.equal(match('England'), 'GB')
})

tape('fuzzy matches', (t) => {
	t.plan(4)
	t.equal(match('Großbritannin'), 'GB') // one typo
	t.equal(match('Sxmbia'), 'ZM')
	t.equal(match('Gxmbia'), 'GM')

	// "Sambia" and "Gambia" both have a distance of 1 to "Xambia"
	t.equal(match('Xambia'), null)
})

tape('invalid inputs', (t) => {
	t.plan(3)
	t.equal(match('Test'), null)
	t.equal(match('Großbritannein'), null) // one typo, distance of 2
	t.equal(match('Großbrltannein'), null) // two typos, distance of 3
})
