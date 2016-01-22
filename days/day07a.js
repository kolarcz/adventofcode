class Logic {

  run(data) {
    this.setWiresFromData(data);
    return this.runWire('a');
  }

  setWiresFromData(data) {
    this.wires = {};

    let commands = this.parseToLines(data);
    commands.forEach((command) => {
      command = this.parseCommand(command);
      this.runCommand(command.cmd, command.inputs, command.wire);
    });
  }

  parseToLines(data) {
    return data.split(/[\r\n]+/).filter(r => r.length);
  }

  parseCommand(command) {
    var m;

    if (m = command.match(/^([a-z0-9]+) -> ([a-z]+)$/)) {
      return {
        cmd: 'EASY',
        inputs: [m[1]],
        wire: m[2]
      };
    } else if (m = command.match(/^([a-z0-9]+) (AND|OR|LSHIFT|RSHIFT) ([a-z0-9]+) -> ([a-z]+)$/)) {
      return {
        cmd: m[2],
        inputs: [m[1], m[3]],
        wire: m[4]
      };
    } else if (m = command.match(/^NOT ([a-z0-9]+) -> ([a-z]+)$/)) {
      return {
        cmd: 'NOT',
        inputs: [m[1]],
        wire: m[2]
      };
    }
  }

  translateValue(value) {
    if (String(value).match(/^[0-9]+$/)) {
      return parseInt(value, 10);
    } else {
      return this.runWire(value);
    }
  }

  setWire(name, func) {
    this.wires[name] = func;
  }

  runWire(name) {
    return this.wires[name]();
  }

  runCommand(cmd, inputs, wire) {
    let f = {
      EASY: (a) => a,
      NOT: (a) => 65535 - a,
      AND: (a, b) => a & b,
      OR: (a, b) => a | b,
      LSHIFT: (a, b) => a << b,
      RSHIFT: (a, b) => a >> b
    };

    this.setWire(wire, () => {
      inputs = inputs.map(this.translateValue.bind(this));
      return f[cmd](inputs[0], inputs[1]);
    });
  }

}

module.exports = new Logic();
