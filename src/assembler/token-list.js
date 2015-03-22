// Generated by CoffeeScript 1.8.0
(function() {
  'use strict';
  var tokenList;

  tokenList = function(tokens_) {
    var advance, expect, getCurrent, getMarked, hasNext, marker, pointer, reset, setMarker, tokens;
    pointer = 0;
    marker = 0;
    tokens = tokens_;
    hasNext = function() {
      return pointer < tokens.length;
    };
    reset = function() {
      pointer = 0;
      return marker = 0;
    };
    advance = function() {
      pointer++;
    };
    getCurrent = function() {
      return tokens[pointer];
    };
    expect = function(type, message) {
      var token;
      token = getCurrent();
      advance();
      if (token.type !== type) {
        throw Error("" + message + ", line " + token.coords.line + ", column " + token.coords.column);
      }
    };
    setMarker = function() {
      return marker = pointer;
    };
    getMarked = function() {
      return tokens.slice(marker, +pointer + 1 || 9e9);
    };
    return {
      hasNext: hasNext,
      reset: reset,
      advance: advance,
      getCurrent: getCurrent,
      expect: expect,
      setMarker: setMarker,
      getMarked: getMarked
    };
  };

  window.tokenList = tokenList;

}).call(this);