/**
 * build fhir.js first
 * git clone https://github.com/FHIR/fhir.js.git
 * Add nativeFhir: "./src/adapters/native.js" to { entry } in webpack.config.js
 * rm -rf dist
 * ./node_modules/.bin/webpack --progress --colors
 * ./node_modules/.bin/coffee --output lib --compile src
 */
require('es6-promise').polyfill();
require('isomorphic-fetch');
var adapter = require('../../lib/nativeFhir');

(function() {
  var smart = require('../client/entry');
  adapter.fhirjs = adapter;  
  smart(adapter);
}).call(this);