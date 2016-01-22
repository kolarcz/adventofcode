function compute(data) {
  let sum = 0;
  let type = typeof data;

  if (type == 'number') {
    sum += data;
  } else if (type == 'object' && data.forEach) {
    data.forEach(item => {
      sum += compute(item);
    });
  } else if (type == 'object' && !data.forEach) {
    let values = Object.keys(data).map(key => data[key]);

    if (values.indexOf('red') === -1) {
      values.forEach(item => {
        sum += compute(item);
      });
    }
  }

  return sum;
}

export function run(data) {
  return compute(JSON.parse(data));
};
