var should  = require('should');
var proxify = require('../lib');
var url     = require('url');

describe('The proxify function', function () {

    var baseUrl = 'https://query.yahooapis.com/v1/public/yql?';

    /**
     * Invalid input test.
     */
    it('should throw an error if the input URL is not a string', function () {
        (function () {
            proxify();
        }).should.throw('An URL was expected');
    });

    /**
     * Transforming the URL using default options test.
     */
    it('should be able to proxify an URL using default options', function () {
        var result = baseUrl + 'q=SELECT%20*%20FROM%20json%20WHERE%20url%3D%22https%3A%2F%2Fapi.github.com%2Fusers%2Foctocat%22&format=json&jsonCompat=new';
        proxify('https://api.github.com/users/octocat').should.be.eql(result);
    });

    /**
     * Custom output format test.
     */
    it('should be able to proxify an URL using a custom output format options', function () {
        var result = baseUrl + 'q=SELECT%20*%20FROM%20json%20WHERE%20url%3D%22https%3A%2F%2Fapi.github.com%2Fusers%2Foctocat%22&format=xml';
        proxify('https://api.github.com/users/octocat', { outputFormat: 'xml', jsonCompat: false }).should.be.eql(result);
    });

    /**
     * Custom input format test.
     */
    it('should be able to proxify an URL using a custom input format options', function () {
        var result = baseUrl + 'q=SELECT%20*%20FROM%20xml%20WHERE%20url%3D%22https%3A%2F%2Fapi.github.com%2Fusers%2Foctocat%22&format=json&jsonCompat=new';
        proxify('https://api.github.com/users/octocat', { inputFormat: 'xml' }).should.be.eql(result);
    });

    it('should be able to proxify an URL with query parameters', function () {
        var result = baseUrl + 'q=SELECT%20*%20FROM%20json%20WHERE%20url%3D%22https%3A%2F%2Fapi.github.com%2Fsearch%2Frepositories%3Fq%3Dproxify-url%26order%3Dasc%22&format=json&jsonCompat=new';
        proxify('https://api.github.com/search/repositories?q=proxify-url&order=asc').should.be.eql(result);
    });

    /**
     * JSONP callback test.
     */
    it('should be able to proxify an URL using a JSONP callback', function () {
        var result = baseUrl + 'q=SELECT%20*%20FROM%20json%20WHERE%20url%3D%22https%3A%2F%2Fapi.github.com%2Fusers%2Foctocat%22&format=json&jsonCompat=new&callback=foo';
        proxify('https://api.github.com/users/octocat', { callback: 'foo' }).should.be.eql(result);
    });

    /**
     * Secured proxy URL test.
     */
    it('should always be able to return a secured proxy URL', function () {
        url.parse(proxify('http://foo.bar')).protocol.should.be.eql('https:');
    });
});
