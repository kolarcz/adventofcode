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

  let variants = [formula];
  let tmp, step = 0;

  while (++step) {
    tmp = [];

    replacers.forEach(replacer => {
      variants.forEach(variant => {
        tmp = tmp.concat(replace(variant, replacer[1], replacer[0]));
      });
    });

    variants = tmp.filter((value, index, self) => self.indexOf(value) === index);

    if (variants.indexOf('e') !== -1) {
      return step;
    }
  }
};
