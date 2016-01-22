export function run(data) {
  let words = data.split(/[\r\n]+/).filter(r => r.length);
  let sum = 0;

  words.forEach((word) => {
    if (word.replace(/([a-z]{2}).*\1/g, '').length == word.length) {
      return;
    } else if (word.replace(/([a-z]).\1/g, '').length == word.length) {
      return;
    } else {
      sum++;
    }
  });

  return sum;
};
