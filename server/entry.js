/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-09-23 10:18:26
 * @version $Id$
 */
// require('babel-polyfill')
require('babel-register')({
  presets:['es2015','react']
})

require('babel-polyfill');

require('./server.js');


