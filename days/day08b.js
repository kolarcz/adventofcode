export function run(data) {
  let lines = data.split(/[\r\n]+/).filter(r => r.length);
  let sum = 0;

  lines.forEach((line) => {
    sum += 2 + line.replace(/("|\\)/g, '..').length - line.length;
  });

  return sum;
};
