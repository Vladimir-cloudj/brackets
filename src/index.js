module.exports = function check(str, BracketsConfig) {
  // your solution
  const stack = [];
  const arrBrackets = {};

    BracketsConfig.forEach((b) => (arrBrackets[b[0]] = b[1]));

    const arr = str.split("");

    for (let i = 0; i < arr.length; i++) {
        if (arrBrackets[stack[stack.length - 1]] === arr[i]) {
            stack.pop();
        } else if (arrBrackets.hasOwnProperty(arr[i])) {
            stack.push(arr[i]);
        } else {
            return false;
        }
    }

    return stack.length === 0 ? true : false;
}
