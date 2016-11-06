// Generated by CoffeeScript 1.11.0
(function() {
  'use strict';
  var iterableString;

  iterableString = function(string_) {
    var advance, column, getCoords, getCurrent, getMarked, getNext, hasNext, line, marker, pointer, setMarker, string;
    string = string_ + ' ';
    pointer = 0;
    marker = 0;
    line = 0;
    column = 0;
    getCurrent = function() {
      return string[pointer];
    };
    getNext = function() {
      return string[pointer + 1];
    };
    hasNext = function() {
      return pointer < string.length;
    };
    advance = function() {
      if (getCurrent() === '\n') {
        line++;
        column = 0;
      } else {
        column++;
      }
      pointer++;
    };
    setMarker = function(offset) {
      if (offset == null) {
        offset = 0;
      }
      marker = pointer + offset;
    };
    getMarked = function(offset) {
      if (offset == null) {
        offset = 0;
      }
      return string.substring(marker, pointer + offset);
    };
    getCoords = function() {
      return {
        line: line,
        column: column
      };
    };
    return {
      advance: advance,
      setMarker: setMarker,
      getCurrent: getCurrent,
      getNext: getNext,
      hasNext: hasNext,
      getMarked: getMarked,
      getCoords: getCoords
    };
  };

  window.iterableString = iterableString;

}).call(this);
