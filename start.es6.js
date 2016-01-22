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

let argv = yargs
  .usage('Usage: npm run start [day]')
  .example('npm run start 01a')

  .command('[day]', 'Name of the day (([01][0-9]|2[0-5])[ab])')
  .demand(1, 'Not enough non-option arguments: got 0, need 1')

  .check(({_}) => {
    let day = String(_[0]);

    if (!day.match(/^(([01][0-9]|2[0-5])[ab])$/)) {
      return 'Day is in bad format';
    }

    if (!fs.existsSync(`./days/day${day}.js`)) {
      return `Script file for day ${day} does not exists`;
    }

    if (!fs.existsSync(`./data/day${day}.txt`)) {
      return `Data file for day ${day} does not exists`;
    }

    return true;
  })

  .wrap(79)
  .argv

let script = require(`./days/day${argv._[0]}.js`);
let data = String(fs.readFileSync(`./data/day${argv._[0]}.txt`, 'utf-8'));

console.log('Answer is:', script.run(data.trim()));
