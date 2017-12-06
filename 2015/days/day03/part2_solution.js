export function run(data) {
  const moves = data.split('');

  let x = { santa: 0, robot: 0 };
  let y = { santa: 0, robot: 0 };
  let pos = { '0|0': true };

  let who = 'robot';

  moves.forEach(move => {
    who = (who == 'santa') ? 'robot' : 'santa';

    if (move == '^') y[who]--;
    else if (move == 'v') y[who]++;
    else if (move == '<') x[who]--;
    else if (move == '>') x[who]++;

    pos[`${x[who]}|${y[who]}`] = true;
  });

  return Object.keys(pos).length;
};
