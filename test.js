'use strict'

const tape = require('tape')
const match = require('./index.js')

tape('match-country-german', (t) => {
	t.plan(8)
	t.true(match('Deutschland')==='DE')
	t.true(match('USA')==='US')
	t.true(match('Vereinigte Staaten von Amerika')==='US')
	t.true(match('Russland')==='RU')
	t.true(match('Frankreich')==='FR')
	t.true(match('Test')===null)
	t.true(match('England')==='GB')
	t.true(match('Großbrltannein')===null)
})