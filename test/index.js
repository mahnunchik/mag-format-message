
/*global describe, it */

var format = require('../');
var util = require('util');
var expect = require('chai').expect;

describe('mag-format-message', function () {
  it('should format message from arguments by "util.format"', function (done) {
    var stream = format();
    var arg0 = 'test %s';
    var arg1 = 'arg1';
    var arg2 = {test: 'test'};

    stream.on('readable', function(){
      var data = stream.read();
      expect(data.message).is.a('string')
        .that.to.equal(util.format(arg0, arg1, arg2));
        done();
    });
    stream.write({arguments: [arg0, arg1, arg2]});
  });

  it('should not format message when message was specified', function (done) {
    var stream = format();
    var arg0 = 'test %s';
    var arg1 = 'arg1';
    var arg2 = {test: 'test'};
    var message = 'test message';

    stream.on('readable', function(){
      var data = stream.read();
      expect(data.message).is.a('string')
        .that.to.equal(message);
        done();
    });
    stream.write({
      arguments: [arg0, arg1, arg2],
      message: message
    });
  });

  it('should format message by "util.inspect" when no message and no arguments',
    function (done) {
    var stream = format();
    var log = {
      noArguments: null,
      noMessage: null
    };

    stream.on('readable', function(){
      var data = stream.read();
      expect(data.message).is.a('string')
        .that.to.equal(util.inspect(log));
        done();
    });
    stream.write({
      noArguments: null,
      noMessage: null
    });
  });

});
