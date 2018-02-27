'use strict';

var fs        = require('fs');
var path      = require('path');
var basename  = path.basename(__filename);
const files = { }

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0)
      && (file !== basename)
      && (file.slice(-3) === '.js' );
  })
  .forEach(file => {
    const name = file.slice( 0, -3 )
    files[name] = require( path.resolve(__dirname, file) );
  });

module.exports = files;
