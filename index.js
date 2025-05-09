const testString = '(id, name, email, type(id, name, customFields(c1, c2, c3)), externalId)';

const buildObjResult = (str) => {
  // tokenize the string by ', ', '(', and ')'
  const strArray = str.split(/(?<=[, \(\)]|(?=[, \(\)]))/g);
  // set to 1 to skip first '(';
  let i = 1;

  const parseArray = () => {
    const obj = {};

    while (i < strArray.length) {
      // get the current string
      const str = strArray[i];
      i++;
      // skip ',' and ' '
      if (str === ',' || str === ' ') {
        i++;
        continue;
      }
  
      // end of obj
      if (str === ')') {
        return obj;
      }
  
      // check if the next string is '('
      if (strArray[i] === '(') {
        // skip the '('
        i++;
        obj[str] = parseArray();
      } else {
        // no children, just set it
        obj[str] = null;
      }
    }
  
    return obj;
  }

  return parseArray(strArray);
}

const output = (obj, sorted = false, spaces = 0) => {
  let result = '';

  const keys = Object.keys(obj);
  if (sorted) {
    keys.sort();
  }

  keys.forEach(key => {
    result += '\n';
    result += `${' '.repeat(spaces)}- ${key}`;
    if (obj[key] !== null) {
      // if the value is an object, call output recursively and add 2 spaces
      result += output(obj[key], sorted, spaces + 2);
    }
  });

  return result;
}

const objectResult = buildObjResult(testString);
const unsortedResult = output(objectResult) + '\n';
const sortedResult = output(objectResult, sorted = true) + '\n';

console.log('Unsorted:');
console.log(unsortedResult);
console.log('----------------\n');
console.log('Sorted:');
console.log(sortedResult);
