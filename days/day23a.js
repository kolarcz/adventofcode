class Instructions {

  run(data, returningVar = 'b') {
    let lines = this.parseToLines(data);
    let commands = lines.map(line => this.parseLineToCommand(line));

    let vars = this.runCommands(commands, {});
    return vars[returningVar];
  }

  parseToLines(data) {
    return data.split(/[\r\n]+/).filter(r => r.length);
  }

  parseLineToCommand(line) {
    let m;

    if (m = line.match(/^(hlf|tpl|inc) ([a-z]+)$/)) {
      return {
        cmd: m[1],
        var: m[2]
      }
    } else if (m = line.match(/^jmp ([+-][0-9]+)$/)) {
      return {
        cmd: 'jmp',
        offset: parseInt(m[1], 10)
      }
    } else if (m = line.match(/^(jie|jio) ([a-z]+), ([+-][0-9]+)$/)) {
      return {
        cmd: m[1],
        var: m[2],
        offset: parseInt(m[3], 10)
      }
    }
  }

  runCommands(commands, oldData = {}) {
    let newData = Object.assign({}, oldData);

    for (let i=0; i<commands.length; i++) {
      let command = commands[i];

      if (command.var && !newData[command.var]) {
        newData[command.var] = 0;
      }

      switch (command.cmd) {
        case 'hlf':
          newData[command.var] /= 2;
          break;
        case 'tpl':
          newData[command.var] *= 3;
          break;
        case 'inc':
          newData[command.var]++;
          break;
        case 'jmp':
          i += command.offset - 1;
          break;
        case 'jie':
          if (newData[command.var] % 2 == 0) {
            i += command.offset - 1;
          }
          break;
        case 'jio':
          if (newData[command.var] == 1) {
            i += command.offset - 1;
          }
          break;
      }
    }

    return newData;
  }

}

module.exports = new Instructions();
