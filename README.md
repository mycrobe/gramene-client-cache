# Gramene client cache
Browser-only cache intended to reduce the amount of queries that gramoogle makes to gramene-search-client. It wraps [lru-cache](https://www.npmjs.com/package/lru-cache) and [json-stable-stringify](https://www.npmjs.com/package/json-stable-stringify).

## Uses
Keys are deterministically serialized to JSON; the expected use case is that you pass in some object representing some query state and you get a cached response or `undefined`.