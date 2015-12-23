export function run(data) {
  let moves = data.split('');

  let x = 0, y = 0;
  let pos = {};

  pos['0|0'] = true;
  moves.forEach((move) => {
    if (move == '^') y--;
    else if (move == 'v') y++;
    else if (move == '<') x--;
    else if (move == '>') x++;

    pos[`${x}|${y}`] = true;
  });

  return Object.keys(pos).length;
};
