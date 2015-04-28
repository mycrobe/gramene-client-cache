var LRU = require('lru-cache');
var stringify = require('json-stable-stringify');

module.exports = function(size) {
  var cache = LRU(size || 100);

  return {
    get: function(key) {
      var strKey = stringify(key);
      return cache.get(strKey);
    },

    set: function(key, value) {
      var strKey = stringify(key);
      return cache.set(strKey, value);
    }
  }
};