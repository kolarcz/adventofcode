class LookAndSay {

  run(string, repeatNum = 50) {
    let ret = this.repeat(string, repeatNum)
    return ret.length;
  }

  repeat(string, repeatNum) {
    let ret = string;

    for (let i=0; i<repeatNum; i++) {
      ret = this.apply(ret);
    }

    return ret;
  }

  apply(string) {
    return string.replace(/(.)\1*/g, (full, number) => String(full.length) + number);
  }

}

module.exports = new LookAndSay();
