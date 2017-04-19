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

tape('match-country-german', (t) => {
	t.plan(8)
	t.true(match('Deutschland')==='DE')
	t.true(match('USA')==='US')
	t.true(match('Vereinigte Staaten von Amerika')==='US')
	t.true(match('Russland')==='RU')
	t.true(match('Frankreich')==='FR')
	t.true(match('Test')===null)
	t.true(match('England')==='GB')
	// t.true(match('Großbritannein')==='GB') // one typo
	t.true(match('Großbrltannein')===null) // two typos
})
