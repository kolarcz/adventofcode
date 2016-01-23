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

let fileSolution, fileInput;
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

    fileSolution = `./days/day${match[1]}/part${match[2]}_solution.js`;
    fileInput = `./days/day${match[1]}/part${match[2]}_input.txt`

    if (!fs.existsSync(fileSolution)) {
      return `Script file for day ${inp} does not exists`;
    }

    if (!fs.existsSync(fileInput)) {
      return `Input file for day ${inp} does not exists`;
    }

    return true;
  })

  .wrap(79)
  .argv

let script = require(fileSolution);
let input = String(fs.readFileSync(fileInput, 'utf-8'));

console.log('Answer is:', script.run(input.trim()));
