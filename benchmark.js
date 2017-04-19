'use strict'

const Benchmark = require('benchmark')
const match = require('.')

const suite = new Benchmark.Suite()

suite.add('exact match "Frankreich"', function () {
	match('Frankreich')
})

suite.add('fuzzy match "Großbritannein"', function () {
	match('Großbritannein')
})

suite.add('too many typos "Großbrltannein"', function () {
	match('Großbrltannein')
})

suite.add('invalid input "Test"', function () {
	match('Test')
})

suite
.on('cycle', (e) => console.log(e.target.toString()))
.run({async: true})
