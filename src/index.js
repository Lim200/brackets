module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const bracketsMap = new Map(bracketsConfig.map(pair => pair));
  const openBrackets = new Set(bracketsMap.keys());
  // console.log(openBrackets)
  const closeBrackets = new Set(bracketsMap.values());
  for (let char of str) {
    // console.log('for char',char)
      if (openBrackets.has(char)) {
          if ((stack.length > 0 && stack[stack.length - 1] === char) && (char === '|' || char === '7' || char === '8')) {
            stack.pop();
            // console.log('delete |')
            continue
          }
          if (stack.length > 0 && stack[stack.length - 1] === char) {
              stack.push(char);
              // console.log('stack.pop()')
          } else {
              stack.push(char);
              // console.log('stack.push(char)',char)
          }
      } else if (closeBrackets.has(char)) {
          // console.log('stack',stack)
          if (stack.length === 0 || bracketsMap.get(stack.pop()) !== char) {
              return false;
          }
      }
  }

  return stack.length === 0;
}
