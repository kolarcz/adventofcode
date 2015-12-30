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
    Object.keys(data).forEach(key => {
      sum += compute(data[key]);
    });
  }

  return sum;
}

export function run(data) {
  return compute(JSON.parse(data));
};
