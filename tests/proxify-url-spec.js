var should  = require('should');
var proxify = require('../lib');
var url     = require('url');

describe('The proxify function', function () {

    it('should throw an error if the input URL is not a string', function () {
        (function () {
            proxify();
        }).should.throw('An URL was expected');
    });

    it('should be able to proxify an URL using default options', function () {
        var result = 'https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20json%20WHERE%20url%3D%22https%3A%2F%2Fapi.github.com%2Fusers%2Foctocat%22&format=json&jsonCompat=new';
        proxify('https://api.github.com/users/octocat').should.be.eql(result);
    });

    it('should be able to proxify an URL using user options', function () {
        var result = 'https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20json%20WHERE%20url%3D%22https%3A%2F%2Fapi.github.com%2Fusers%2Foctocat%22&format=xml';
        proxify('https://api.github.com/users/octocat', { outputFormat: 'xml', jsonCompat: false }).should.be.eql(result);
    });

    it('should always be able to return a secured proxy URL', function () {
        url.parse(proxify('http://foo.bar')).protocol.should.be.eql('https:');
    });
});