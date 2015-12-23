export function run(data) {
  let boxes = data.split(/[\r\n]+/).filter(r => r.length);
  let sum = 0;

  boxes.forEach((box) => {
    box = box.split('x');
    let sizes = [box[0]*box[1], box[1]*box[2], box[2]*box[0]].sort((a, b) => a - b);
    sum += 3 * sizes[0] + 2 * sizes[1] + 2 * sizes[2];
  });

  return sum;
};
