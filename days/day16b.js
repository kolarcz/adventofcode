let values = {
  children: /3/, cats: /[7-9]/, samoyeds: /2/, pomeranians: /[0-2]/,
  akitas: /0/, vizslas: /0/, goldfish: /[0-4]/, trees: /[4-9]/,
  cars: /2/, perfumes: /1/
};

function getSueInfo(sueDescription) {
  let info = {
    id: sueDescription.match(/Sue ([0-9]+):/)[1],
  };

  Object.keys(values).forEach(value => {
    let m = sueDescription.match(RegExp(value + ': ([0-9]+)'));
    if (m) { info[value] = m[1]; }
  });

  return info;
}

export function run(data) {
  let lines = data.split(/[\r\n]+/).filter(r => r.length);

  for (let i=0; i<lines.length; i++) {
    let sue = getSueInfo(lines[i]);

    let isOk = Object.keys(values).every(key => (sue[key] === undefined || sue[key].match(values[key])));
    if (isOk) {
      return sue.id;
    }
  }

  return 0;
};
