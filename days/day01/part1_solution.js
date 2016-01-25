export function run(data) {
  return  data.replace(/\)/g, '').length - data.replace(/\(/g, '').length;
};
