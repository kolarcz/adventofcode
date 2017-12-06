import { permutation } from 'js-combinatorics';

class Ways {

  run(data) {
    this.init();

    const lines = this.parseToLines(data);
    lines.forEach(line => {
      line = this.parseLine(line);
      this.setWay(line.city1, line.city2, line.length);
    });

    const lengths = this.getLengthVariants();
    return this.getMinLength(lengths);
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

    permutation(Object.keys(this.ways)).forEach(variant => {
      let length = 0;
      for (let i=0; i<variant.length-1; i++) {
        length += this.ways[variant[i]][variant[i + 1]];
      }
      lengths.push(length);
    });

    return lengths;
  }

  getMinLength(lengths) {
    return Math.min.apply(null, lengths);
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
