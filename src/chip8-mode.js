// Generated by CoffeeScript 1.11.0
(function() {
  'use strict';
  ace.define('ace/mode/chip8', function(require_, exports, module) {
    var HighlightRules, Mode, TextMode, Tokenizer, oop;
    oop = require_('ace/lib/oop');
    TextMode = require_('./text').Mode;
    Tokenizer = require_('ace/tokenizer').Tokenizer;
    HighlightRules = require_('ace/mode/chip8-rules').Chip8HighlightRules;
    Mode = function() {
      this.$tokenizer = new Tokenizer(new HighlightRules().getRules());
      this.$keywordList = 'addi|addr|and|bcd|call|cls|digit|dw|iaddr|imovi|jumpoff|jump|load|movi|movr|movs|movt|nsubr|\nor|return|rmovt|rnd|sei|ser|shl|shr|skr|snei|snkr|sner|sprite|store|subr|waitk|xor'.split('|');
    };
    oop.inherits(Mode, TextMode);
    exports.Mode = Mode;
  });

}).call(this);
