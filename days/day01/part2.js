export function run(data) {
  let steps = data.split('');
  let floor = 0;

  for (let i=0; i<steps.length; i++) {
    if (steps[i] == '(') {
      floor++;
    } else if (steps[i] == ')') {
      floor--;
    }

    if (floor == -1) {
      return i+1;
    }
  }

  return 0;
};
