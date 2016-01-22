import crypto from 'crypto';

export function run(data) {
  let i = 0;
  let len = 6;

  let prefix = Array(len + 1).join('0');

  while (true) {
    let hash = crypto.createHash('md5').update(data + i).digest('hex');

    if (hash.substr(0, len) == prefix) {
      return i;
    }

    i++;
  }

  return Object.keys(pos).length;
};
