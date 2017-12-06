export function run(data) {
  const lines = data.split(/[\r\n]+/).filter(r => r.length);
  let sum = 0;

  lines.forEach(line => {
    sum += line.length - line.replace(/(^"|"$)/g, '').replace(/(\\x[0-9A-F]{2}|\\"|\\\\)/gi, '.').length;
  });

  return sum;
};
