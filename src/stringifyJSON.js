// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  
  if(obj === null){
    return 'null';

  } else if (typeof obj !== 'object'){
    if (typeof obj === 'string') {
      return `"${obj}"`;
    }
    return `${obj}`;
  } else if (Array.isArray(obj)) {
    let results = obj.map(item => stringifyJSON(item));

    return `[${results.join(",")}]`;
  } else {
    let results = [];
    
    for (let key in obj) {
      if (typeof obj[key] !== 'function' && obj[key] !== undefined) {
        results.push(`"${key}":${stringifyJSON(obj[key])}`);
      }
    }

    return `{${results.join(',')}}`;
  }

};
