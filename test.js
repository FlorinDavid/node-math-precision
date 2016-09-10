
var chai = require('chai');
var math = require('./index');

var expect = chai.expect;

describe('math', function() {

  it('round(1.2347, 2) = 1.23', function() {
    expect(math.round(1.2347, 2)).to.equal(1.23);
  });

  it('round(1.235, 2) = 1.24', function() {
    expect(math.round(1.235, 2)).to.equal(1.24);
  });

  it('round(1.2, 2) = 1.2', function() {
    expect(math.round(1.2, 2)).to.equal(1.2);
  });

  it('round(1.24569, 3) = 1.246', function() {
    expect(math.round(1.24569, 3)).to.equal(1.246);
  });

  it('round(1234, -2) = 1200', function() {
    expect(math.round(1234, -2)).to.equal(1200);
  });

  it('round(12785.9, -3) = 13000', function() {
    expect(math.round(12785.9, -3)).to.equal(13000);
  });

  it('round(1.2347) = 1', function() {
    expect(math.round(1.2347)).to.equal(1);
  });

  it('round(1.2347, NaN) = 1', function() {
    expect(math.round(1.2347, NaN)).to.equal(1);
  });

  it('round(undefined, 2) = NaN', function() {
    expect(math.round(undefined, 2)).to.deep.equal(NaN);
  });

  it('round(NaN, 2) = NaN', function() {
    expect(math.round(NaN, 2)).to.deep.equal(NaN);
  });

  it('ceil(1.2347, 2) = 1.24', function() {
    expect(math.ceil(1.2347, 2)).to.equal(1.24);
  });

  it('ceil(1.2, 2) = 1.2', function() {
    expect(math.ceil(1.2, 2)).to.equal(1.2);
  });

  it('ceil(1.2341, 3) = 1.235', function() {
    expect(math.ceil(1.2348, 3)).to.equal(1.235);
  });

  it('ceil(1234, -2) = 1300', function() {
    expect(math.ceil(1234, -2)).to.equal(1300);
  });

  it('ceil(123436.87, -3) = 124000', function() {
    expect(math.ceil(123436.87, -3)).to.equal(124000);
  });

  it('ceil(1.2347) = 2', function() {
    expect(math.ceil(1.2347)).to.equal(2);
  });

  it('ceil(1.2347, NaN) = 2', function() {
    expect(math.ceil(1.2347)).to.equal(2);
  });

  it('ceil(undefined, 2) = NaN', function() {
    expect(math.ceil(undefined, 2)).to.deep.equal(NaN);
  });

  it('ceil(NaN, 2) = NaN', function() {
    expect(math.ceil(NaN, 2)).to.deep.equal(NaN);
  });

  it('floor(1.2361, 2) = 1.23', function() {
    expect(math.floor(1.2361, 2)).to.equal(1.23);
  });

  it('floor(1.2367, 3) = 1.236', function() {
    expect(math.floor(1.2367, 3)).to.equal(1.236);
  });

  it('floor(1.8, 2) = 1.8', function() {
    expect(math.floor(1.8, 2)).to.equal(1.8);
  });

  it('floor(1876, -2) = 1800', function() {
    expect(math.floor(1876, -2)).to.equal(1800);
  });

  it('floor(187697.78, 3) = 187000', function() {
    expect(math.floor(187697.78, -3)).to.equal(187000);
  });

  it('floor(1.2361) = 1', function() {
    expect(math.floor(1.2361)).to.equal(1);
  });

  it('floor(1.2361, NaN) = 1', function() {
    expect(math.floor(1.2361)).to.equal(1);
  });

  it('floor(undefined, 2) = NaN', function() {
    expect(math.floor(undefined, 2)).to.deep.equal(NaN);
  });

  it('floor(NaN, 2) = NaN', function() {
    expect(math.floor(NaN, 2)).to.deep.equal(NaN);
  });

});
