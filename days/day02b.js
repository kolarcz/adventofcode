export function run(data) {
  let boxes = data.split(/[\r\n]+/).filter(r => r.length);
  let sum = 0;

  boxes.forEach((box) => {
    box = box.split('x').sort((a, b) => a - b);
    sum += 2 * box[0] + 2 * box[1] + box[0] * box[1] * box[2];
  });

  return sum;
};
