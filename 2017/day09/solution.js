function proccessInput(input) {
  let groups = 0;
  let chars = 0;
  let depth = 0;
  let inGarbage = false;

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (char === '{' && !inGarbage) {
      groups += ++depth;
    } else if (char === '}' && !inGarbage) {
      depth--;
    } else if (char === '<' && !inGarbage) {
      inGarbage = true;
    } else if (char === '>' && inGarbage) {
      inGarbage = false;
    } else if (char === '!' && inGarbage) {
      i++;
    } else if (inGarbage) {
      chars++;
    }
  }

  return { groups, chars };
}

exports.part1 = input => {
  const { groups } = proccessInput(input);
  return groups;
};

exports.part2 = input => {
  const { chars } = proccessInput(input);
  return chars;
};
