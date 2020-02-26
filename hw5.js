
//
function censoredString(str) {
    const a = "ueoai";
    let b = "";
    for (let i = 0; i < str.length; i++) {
      if (a.includes(str[i])) {
        b += "*";
      } 
    }
    return b;
  }
  //
  function getFrequencies(arr) {
    return arr.reduce((op, inp) => {
      op[inp] = op[inp] || 0
      op[inp]++
      return op
    },{})
  }
  //
  function keysAndValues(ob) {
    const arr = [];
    for (const item in ob) {
      arr.push(item);
    }
    for (const item in ob) {
      arr.push(ob[item]);
    }
    return arr;
  }
//
function reverseObject(obj) {
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    const result = {};
    for (let i = 0; i < keys.length; i++) {
      result[values[i]] = keys[i];
    }
    return result;
  }
  //
  function mapLetters(str) {
    const arr = str.split("");
    const result = arr.reduce((accumulator, currentItem, currentIndex) => {
      if (!accumulator[currentItem]) {
        accumulator[currentItem] = [];
        accumulator[currentItem].push(currentIndex);
      } else {
        accumulator[currentItem].push(currentIndex);
      }
      return accumulator;
    }, {});
    return result;
}