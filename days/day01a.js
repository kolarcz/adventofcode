export function run(data) {
  return (data.length - data.replace(/\(/g, '').length) - (data.length - data.replace(/\)/g, '').length);
};
