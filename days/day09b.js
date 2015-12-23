// from: https://www.npmjs.com/package/heaps-permute
function swap(array, pos1, pos2) {
  var temp = array[pos1];
  array[pos1] = array[pos2];
  array[pos2] = temp;
}
function heapsPermute(array, callback, n) {
  n = n || array.length;
  if (n === 1) {
    callback(array.slice());
  } else {
    var i, j;
    for (i = 1; i <= n; i += 1) {
      heapsPermute(array, callback, n - 1);
      if (n % 2) {
        j = 1;
      } else {
        j = i;
      }
      swap(array, j - 1, n - 1);
    }
  }
}
function permute(array) {
  var permutations = [];
  heapsPermute(array, permutations.push.bind(permutations));
  return permutations;
}

class Ways {

  run(data) {
    this.init();

    let lines = this.parseToLines(data);
    lines.forEach((line) => {
      line = this.parseLine(line);
      this.setWay(line.city1, line.city2, line.length);
    });

    let lengths = this.getLengthVariants();
    return this.getMaxLength(lengths);
  }

  init() {
    this.ways = {};
  }

  setWay(city1, city2, length) {
    if (!this.ways[city1]) this.ways[city1] = {};
    if (!this.ways[city2]) this.ways[city2] = {};

    this.ways[city1][city2] = length;
    this.ways[city2][city1] = length;
  }

  getLengthVariants() {
    let lengths = [];

    let variants = permute(Object.keys(this.ways));
    variants.forEach((variant) => {
      let length = 0;
      for (let i=0; i<variant.length-1; i++) {
        length += this.ways[variant[i]][variant[i + 1]];
      }
      lengths.push(length);
    });

    return lengths;
  }

  getMaxLength(lengths) {
    return Math.max.apply(null, lengths);
  }

  parseToLines(data) {
    return data.split(/[\r\n]+/).filter(r => r.length);
  }

  parseLine(line) {
    let ret = {};
    [, ret.city1, ret.city2, ret.length] = line.match(/^([a-z]+) to ([a-z]+) = ([0-9]+)$/i, line);
    ret.length = parseInt(ret.length, 10);
    return ret;
  }

}

module.exports = new Ways();
