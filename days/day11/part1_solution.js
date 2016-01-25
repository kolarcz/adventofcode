class Password {

  constructor() {
    this.firstCharCode = 'a'.charCodeAt(0);
    this.lastCharCode = 'z'.charCodeAt(0);
    this.badCharCodes = ['i', 'o', 'l'].map(char => char.charCodeAt(0));
  }

  run(actualPassword) {
    return this.getNext(actualPassword);
  }

  getNext(password) {
    do { password = this.increment(password); }
    while (!this.isValid(password));

    return password;
  }

  hasSequence(string) {
    for (let i=0; i<string.length-2; i++) {
      const a = string.charCodeAt(i);
      const b = string.charCodeAt(i+1);
      const c = string.charCodeAt(i+2);

      if (a == b-1 && b-1 == c-2 && c-2 == a) {
        return true;
      }
    }

    return false;
  }

  hasPairs(string) {
    return !!string.match(/([a-z])\1.*([a-z])\2/);
  }

  isValid(string) {
    return this.hasPairs(string) && this.hasSequence(string);
  }

  explode(string) {
    return string
      .split('')
      .map(char => char.charCodeAt(0))
      .reverse();
  }

  implode(explodedString) {
    return explodedString
      .reverse()
      .map(charCode => String.fromCharCode(charCode))
      .join('');
  }

  increment(string) {
    let result = '';

    let exploded = this.explode(string);
    exploded[0]++;

    for (let i=0; i<exploded.length; i++) {
      do {
        if (exploded[i] > this.lastCharCode) {
          exploded[i] -= this.lastCharCode - this.firstCharCode + 1;
          exploded[i+1] = exploded[i+1] ? exploded[i+1] + 1 : this.firstCharCode;
        }

        if (this.badCharCodes.indexOf(exploded[i]) !== -1) {
          exploded[i]++;
          exploded = exploded.fill(this.firstCharCode, 0, i);
        }
      } while (exploded[i] > this.lastCharCode);
    }

    return this.implode(exploded);
  }

}

module.exports = new Password();
