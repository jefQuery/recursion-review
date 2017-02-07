// test cases are described in fixtures.js
describe('parseJSON', function() {

  it('should return null, true and false', function() {
    expect(parse.nullBool('null')).to.equal(null);
    parse.index = 0;
    expect(parse.nullBool('true')).to.equal(true);
    parse.index = 0;
    expect(parse.nullBool('false')).to.equal(false);
  });

  it('should parse basic numbers', function() {
    expect(parse.numbers('9')).to.equal(9);
    parse.index = 0;
    expect(parse.numbers('-9')).to.equal(-9);
    parse.index = 0;
    expect(parse.numbers('-0.92')).to.equal(-0.92);
    parse.index = 0;
    expect(parse.numbers('9.65')).to.equal(9.65);
    parse.index = 0;
    expect(parse.numbers('9e6')).to.equal(9000000);
    parse.index = 0;
    expect(parse.numbers('9E6')).to.equal(9000000);
    parse.index = 0;
    expect(parse.numbers('9e-6')).to.equal(0.000009);
    parse.index = 0;
    expect(parse.numbers('9e+6')).to.equal(9000000);
  });
//   it('should match the result of calling JSON.parse', function() {
//     parseableStrings.forEach(function(test) {
//       var result = parseJSON(test);
//       var expected = JSON.parse(test);
//       var equality = _.isEqual(result, expected); // why can't we use `===` here?
      
//       // Replace this line with an `expect` statement that tests
//       expect(equality).to.equal(true);
//       // the behavior described by the `it` string
//       //throw new Error('Test is missing.');
//     });
//   });

//   it('should throw an error for invalid stringified JSON', function() {
//     unparseableStrings.forEach(function(test) {
//       var fn = function() {
//         parseJSON(test);
//       };
//       // if you'd prefer, you can write your version of parseJSON 
//       // so that it passes this test instead of the one on line 21. 
//       // expect(parseJSON(test)).to.equal(undefined);
//       expect(fn).to.throw(SyntaxError);
//     });
//   });

});
