// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // iterate over the entire JSON string
  let index = 0;
  //trim whitsespace
  return parse.JSON;
};

var parse = {
  index: 0,

  nullBool(json) {
    if (json[this.index] === 'n') {
      if (json.substr(this.index, 4) === 'null') {
        this.index += 4;
        return null;
      }
    } else if (json[this.index] === 't') {
      if (json.substr(this.index, 4) === 'true') {
        this.index += 4;
        return true;
      }
    } else if (json[this.index] === 'f') {
      if (json.substr(this.index, 5) === 'false') {
        this.index += 5;
        return false;
      }
    }
  },

  numbers(json) {
    let resultsStr = '';
    let digit = '123456789'.split('');
    if (json[this.index] === '-') {
      resultsStr += '-';
      this.index++;
    }
    if (json[this.index] === '0') {
      this.index++;
    } else {
      while (digit.includes(json[this.index]) || json[this.index] === '0') {
        resultsStr += json[this.index];
        this.index++;
      }
    }
    //check for .
      //if . , loop though digit
    if (json[this.index] === '.') {
      resultsStr += json[this.index];
      this.index++;
      while (digit.includes(json[this.index]) || json[this.index] === '0') {
        resultsStr += json[this.index];
        this.index++;
      }
    }

    //check for e || E
    if (json[this.index] !== undefined && json[this.index].toLowerCase() === 'e') {
      // if true, check for + or -
      resultsStr += json[this.index];
      this.index++;
      if (json[this.index] === '+' || json[this.index] === '-') {
        resultsStr += json[this.index];
        this.index++;
      }
      // loop though digits until not in digits;
      while (digit.includes(json[this.index]) || json[this.index] === '0') {
        resultsStr += json[this.index];
        this.index++;
      }
    }


    if (typeof Number(resultsStr) === 'number') {
      return Number(resultsStr);
    } else {
      throw new Error ('NaN');
    }
    
  },

  strings(json) {

  },
  
  arrays(json) {

  },
 
  objects(json) {

  },

  JSON(json) {

    json = json.trim();

    // check for what character we are on and what function we should call.
    while (index !== undefined) {

      // if (json[index] === ' ') index++;
      // check for n and that goes into a null function if n is found
      // if (json[index] === 'f' || json[index] === 't' || json[index] === 'n'){
      this.nullBool(json);
      
      // if (json[index] === '"') call string
      // make array of digits and negative sign to check for number
      // if (numberTestArray.includes(json[index])) call number function
      // if (json[index] === '[') call array function
      // if (json[index] === '{') call object function


      index++;//usually
    }
  }

};