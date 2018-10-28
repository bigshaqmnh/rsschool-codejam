module.exports = function make(...args) {
  let remember = [...args];
    
  const innerFunc = function ret(...args) {
    if (typeof(args[0]) !== "function") {
      remember.push(...args);
      return ret;
    } else {
      return remember.reduce((prev, current) => args[0](prev, current));
    }
  };

  return innerFunc; 
}