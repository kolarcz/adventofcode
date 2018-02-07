function isConditionTrue(first, operand, second) {
  switch (operand) {
    case '<': return first < second;
    case '<=': return first <= second;
    case '>': return first > second;
    case '>=': return first >= second;
    case '!=': return first !== second;
    case '==': return first === second;
    default: return null;
  }
}

function runCommand(register, command) {
  const [, variable, cmd, number, f, operand, s] = command.match(/^(\D+) (inc|dec) (-?\d+) if (\D+) (\S+) (-?\d+)$/);
  const first = register.get(f) || 0;
  const second = Number(s);

  if (isConditionTrue(first, operand, second)) {
    let value = register.get(variable) || 0;
    value += (cmd === 'inc' ? 1 : -1) * number;
    register.set(variable, value);
    return value;
  }

  return false;
}

exports.part1 = (input) => {
  const register = new Map();

  const rows = input.split(/[\r\n]+/);
  rows.forEach(row => runCommand(register, row));

  const max = Math.max(...register.values());
  return max;
};

exports.part2 = (input) => {
  const register = new Map();

  let last;
  let max = -Infinity;

  const rows = input.split(/[\r\n]+/);
  rows.forEach((row) => {
    last = runCommand(register, row);
    if (max < last) max = last;
  });

  return max;
};
