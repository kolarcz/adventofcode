export function run(data) {
  let moves = data.split('');

  let x = { santa: 0, robot: 0 };
  let y = { santa: 0, robot: 0 };
  let even = true;
  let pos = {};

  pos['0|0'] = true;
  moves.forEach((move) => {
    if (move == '^') y[even ? 'santa' : 'robot']--;
    else if (move == 'v') y[even ? 'santa' : 'robot']++;
    else if (move == '<') x[even ? 'santa' : 'robot']--;
    else if (move == '>') x[even ? 'santa' : 'robot']++;

    let actualX = x[even ? 'santa' : 'robot'];
    let actualY = y[even ? 'santa' : 'robot'];
    pos[`${actualX}|${actualY}`] = true;
    even = !even;
  });

  return Object.keys(pos).length;
};
