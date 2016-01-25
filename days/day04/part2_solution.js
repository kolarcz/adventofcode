import crypto from 'crypto';

export function run(data) {
  const len = 6;
  const prefix = '0'.repeat(len);

  const startsWithZeros = hash => (hash.substr(0, len) == prefix);
  const md5 = string => crypto.createHash('md5').update(string).digest('hex');

  let i = 0;
  while (!startsWithZeros(md5(`${data}${i}`))) {
    i++;
  }

  return i;
};
