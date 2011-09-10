(function() {
  var assert, helper;
  helper = require('../index').Helper;
  assert = require('assert');
  module.exports = {
    'test strip': function() {
      var result;
      result = helper.strip(" abc");
      assert.equal("abc", result);
      result = helper.strip("abc ");
      assert.equal("abc", result);
      result = helper.strip("  abc  ");
      return assert.equal("abc", result);
    },
    'test gsub': function() {
      var result;
      result = helper.gsub("-abc-abc-", /[^a-z0-9 ]/i, '');
      assert.equal("abcabc", result);
      result = helper.gsub("-abc-abc-", /[^a-z0-9 ]/i, '*');
      assert.equal("*abc*abc*", result);
      result = helper.gsub("!@#abc-!@#abc!@#", /[^a-z0-9 ]/i, '');
      return assert.equal("abcabc", result);
    },
    'test gsub with errors': function() {
      var result;
      result = helper.gsub("-abc-abc-");
      assert.equal("-abc-abc-", result);
      result = helper.gsub("-abc-abc-", /(?:)/);
      return assert.equal("-abc-abc-", result);
    },
    'test normalize': function() {
      var normalized_str;
      normalized_str = helper.normalize("a-bc");
      assert.equal("abc", normalized_str);
      normalized_str = helper.normalize("a bc");
      assert.equal("a bc", normalized_str);
      normalized_str = helper.normalize("a-b!@#$%^&*()c");
      return assert.equal("abc", normalized_str);
    }
  };
}).call(this);
