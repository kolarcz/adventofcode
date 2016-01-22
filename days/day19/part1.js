function replace(string, a, b) {
  let results = [];

  let tmp, start = 0;
  while ((tmp = string.substr(start).indexOf(a)) !== -1) {
    results.push(string.substr(0, start + tmp) + b + string.substr(start + tmp + a.length));
    start += tmp + 1;
  }

  return results;
}

export function run(data) {
  let lines = data.split(/[\r\n]+/).filter(r => r.length);

  let formula = lines.pop();
  let replacers = lines.map(line => line.split(' => '));

  let variants = [];
  replacers.forEach(replacer => {
    variants = variants.concat(replace(formula, replacer[0], replacer[1]));
  });

  variants = variants.filter((value, index, self) => self.indexOf(value) === index);
  return variants.length;
};
