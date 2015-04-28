var Q = require('q');
var jasminePit = require('jasmine-pit');

jasminePit.install(global);
require('jasmine-expect');

describe('client cache', function () {
  var cache;

  beforeEach(function () {
    cache = require('../../src/cache')();
  });

  it('should be empty', function() {
    // given default state

    // then
    expect(cache.get({some: 'object'})).toBeUndefined();
  });

  it('should allow simple thing to be put in it', function() {
    // when
    cache.set('hello', 'world');

    // then
    expect(cache.get('hello')).toEqual('world');
  });

  it('should allow object keys', function() {
    // given
    var key = {hello: 'world', foo: 'bar'};
    var value = 'value';

    // when
    cache.set(key, value);

    // then
    expect(cache.get(key)).toEqual(value);
  });

  it('should return the correct thing for equivalent objects', function() {
    // given
    var key = {hello: 'world', foo: 'bar'};
    var equivalentKey = {};
    equivalentKey.foo = 'bar';
    equivalentKey.hello = 'world';

    var value = 'value';

    // when
    cache.set(key, value);

    // then
    expect(cache.get(equivalentKey)).toEqual(value);
  });

  it('should only keep the specified number of things in it', function() {
    // given
    var tinyCache = require('../../src/cache')(2);

    // when
    tinyCache.set(1, 'a');
    tinyCache.set({thing: 'stuff'}, 'b');
    tinyCache.set('b', 'c');

    expect(tinyCache.get(1)).toBeUndefined();
  })
});