import fs from 'fs';
import yargs from 'yargs';

console.log(`
        *                  *                  *                  *
       /.\\                /.\\                /.\\                /.\\
      /..'\\              /..'\\              /..'\\              /..'\\
      /'.'\\              /'.'\\              /'.'\\              /'.'\\
     /.''.'\\            /.''.'\\            /.''.'\\            /.''.'\\
     /.'.'.\\            /.'.'.\\            /.'.'.\\            /.'.'.\\
"'""/'.''.'.\\""'""'"'""/'.''.'.\\""'""'"'""/'.''.'.\\""'""'"'""/'.''.'.\\""'""'
    ^^^[_]^^^          ^^^[_]^^^          ^^^[_]^^^          ^^^[_]^^^
`);

let day, part;
let argv = yargs
  .usage('Usage: npm run start [day]')
  .example('npm run start 01_1')

  .command('[day]', 'Name of the day (([01][0-9]|2[0-5])_([12]))')
  .demand(1, 'Not enough non-option arguments: got 0, need 1')

  .check(({_}) => {
    let inp = String(_[0]);
    let match = inp.match(/^([01][0-9]|2[0-5])_([12])$/);

    if (!match) {
      return 'Day is in bad format';
    }

    [ , day, part ] = match;

    if (!fs.existsSync(`./days/day${day}/part${part}.js`)) {
      return `Script file for day ${day} does not exists`;
    }

    if (!fs.existsSync(`./days/day${day}/part${part}.txt`)) {
      return `Data file for day ${day} does not exists`;
    }

    return true;
  })

  .wrap(79)
  .argv

let script = require(`./days/day${day}/part${part}.js`);
let data = String(fs.readFileSync(`./days/day${day}/part${part}.txt`, 'utf-8'));

console.log('Answer is:', script.run(data.trim()));
