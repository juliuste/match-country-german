'use strict'

const assert = require('assert')
const match = require('./index.js')

assert(match('Deutschland')==='de')
assert(match('USA')==='us')
assert(match('Vereinigte Staaten von Amerika')==='us')
assert(match('Russland')==='ru')
assert(match('Frankreich')==='fr')
assert(match('Test')===null)
assert(match('Großbrltannein')===null)