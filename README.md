![Logo](https://s.yimg.com/lq/i/us/pps/yql128.gif)

# proxify-url

A YQL wrapper used to generate a proxy URL to a given resource.

Current version: **1.0.0**

Lead Maintainer: [Halim Qarroum](mailto:hqarroum@awox.com)

## Install

##### Using NPM

```bash
npm install --save proxify-url
```

##### Using Bower

```bash
bower install --save proxify-url
```

## Description

This small component aims to make it possible to issue AJAX requests to third-party resources when it is not possible in normal cases, because of [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) or because the remote service does not support [JSONP](https://en.wikipedia.org/wiki/JSONP) for instance.

The library will generate an URL pointing to the initial resource, but instead of having the browser directly request the remote server for the resource, it will request the Yahoo Query Language API to act as a middle man since it supports `CORS` and `JSONP`.

## Usage

### Proxify an url

Simply require the `proxify-url` according to the environment you are in (Node.js, AMD and the browser are supported), and call the returned function with the given URL. An example in the browser would be as follow :

```javascript
var url = proxify('http://foo.bar/');
```
