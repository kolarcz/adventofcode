import { permutation } from 'js-combinatorics';

class Happiness {

  run(data) {
    this.init();

    const lines = this.parseToLines(data);
    lines.forEach((line) => {
      line = this.parseLine(line);
      this.setVariant(line.person, line.nextPerson, line.happiness);
    });

    const happiness = this.getHappinessVariants();
    return this.getMaxHappiness(happiness);
  }

  init() {
    this.variants = {};
  }

  setVariant(person, nextPerson, happiness) {
    if (!this.variants[person]) this.variants[person] = {};

    this.variants[person][nextPerson] = happiness;
  }

  getHappinessVariants() {
    let happiness = [];

    permutation(Object.keys(this.variants)).forEach(combine => {
      let happy = 0;
      for (let i=0; i<combine.length; i++) {
        const prevI = i == 0 ? combine.length - 1 : i - 1;
        const nextI = i == combine.length - 1 ? 0 : i + 1;

        happy += this.variants[combine[i]][combine[prevI]] + this.variants[combine[i]][combine[nextI]];
      }
      happiness.push(happy);
    });

    return happiness;
  }

  getMaxHappiness(happiness) {
    return Math.max.apply(null, happiness);
  }

  parseToLines(data) {
    return data.split(/[\r\n]+/).filter(r => r.length);
  }

  parseLine(line) {
    let ret = {};
    let gainLose;
    [, ret.person, gainLose, ret.happiness, ret.nextPerson] = line.match(/^([a-z]+) would (gain|lose) ([0-9]+) happiness units by sitting next to ([a-z]+)\.$/i, line);
    ret.happiness = parseInt(ret.happiness, 10) * (gainLose == 'gain' ? 1 : -1);
    return ret;
  }

}

module.exports = new Happiness();
