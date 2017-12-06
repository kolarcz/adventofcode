class Lights {

  run(data) {
    this.init();

    const commands = this.parseToLines(data);
    commands.forEach((command) => {
      command = this.parseCommand(command);
      this.runCommand(
        command.cmd,
        command.x1, command.y1,
        command.x2, command.y2
      );
    });

    return this.getCntOfTurnedOnLights();
  }

  iterate(x1, y1, x2, y2, fn) {
    [x1, x2] = [Math.min(x1, x2), Math.max(x1, x2)];
    [y1, y2] = [Math.min(y1, y2), Math.max(y1, y2)];

    for (let xA=x1; xA<=x2; xA++) {
      for (let yA=y1; yA<=y2; yA++) {
        fn(xA, yA);
      }
    }
  }

  parseToLines(data) {
    return data.split(/[\r\n]+/).filter(r => r.length);
  }

  parseCommand(command) {
    let ret = {};
    [, ret.cmd, ret.x1, ret.y1, ret.x2, ret.y2] = command.match(/(turn on|turn off|toggle) ([0-9]+),([0-9]+) through ([0-9]+),([0-9]+)/);
    return ret;
  }

  runCommand(cmd, x1, y1, x2, y2) {
    this.iterate(x1, y1, x2, y2, (x, y) => {
      if (cmd == 'turn on') {
        this.arr[`${x}|${y}`] = true;
      } else if (cmd == 'turn off') {
        this.arr[`${x}|${y}`] = false;
      } else if (cmd == 'toggle') {
        this.arr[`${x}|${y}`] = !this.arr[`${x}|${y}`];
      }
    });
  }

  getCntOfTurnedOnLights() {
    let cnt = 0;
    for (let key in this.arr) {
      if (this.arr[key]) cnt++;
    }

    return cnt;
  }

  init() {
    this.arr = {};
  }

}

module.exports = new Lights();
