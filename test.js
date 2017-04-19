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
	t.equal(match('Vereinigte Staaten von Amerika'), 'US')
	t.equal(match('Russland'), 'RU')
	t.equal(match('Frankreich'), 'FR')
	t.equal(match('England'), 'GB')
})

tape('invalid inputs', (t) => {
	t.plan(3)
	t.equal(match('Test'), null)
	// t.equal(match('Großbritannein'), 'GB') // one typo
	t.equal(match('Großbritannein'), null) // one typo
	t.equal(match('Großbrltannein'), null) // two typos
})
