
/**
 * Module dependencies.
 */

var url = require('url');
var querystring = require('querystring');

/**
 * Expose `IOAuth` function
 */

module.exports = IOAuth;

/**
 * Handler WordPress.com implicit open authentication
 *
 * @param {String} client_id
 * @param {Object} opts
 * @return {Function}
 */

function IOAuth(client_id, opts){
  opts = opts || {};

  if (!client_id) {
    throw '`client_id` is undefined';
  }

  return function(fn){
  };
}
