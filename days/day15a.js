function variants(num, to, fn, from = 0, attribs = []) {
  if (num == 1) { from = to; }

  for (var i=from; i<=to; i++) {
    let newAttribs = attribs.concat();
    newAttribs.push(i);

    if (num > 1) {
      variants(num-1, to-i, fn, from, newAttribs);
    } else {
      fn(newAttribs);
    }
  }
}

function getIngredientInfo(ingredientDescription) {
  let info = {
    capacity: ingredientDescription.match(/capacity (-?[0-9]+)/i)[1],
    durability: ingredientDescription.match(/durability (-?[0-9]+)/i)[1],
    flavor: ingredientDescription.match(/flavor (-?[0-9]+)/i)[1],
    texture: ingredientDescription.match(/texture (-?[0-9]+)/i)[1],
    calories: ingredientDescription.match(/calories (-?[0-9]+)/i)[1]
  };

  return info;
}

export function run(data) {
  let lines = data.split(/[\r\n]+/).filter(r => r.length);

  let ingredients = [];
  let max = 0;

  lines.forEach(line => {
    ingredients.push(getIngredientInfo(line));
  });

  variants(ingredients.length, 100, attribs => {
    let tmp = {
      capacity: 0,
      durability: 0,
      flavor: 0,
      texture: 0,
    };

    ingredients.forEach((ingredient, i) => {
      tmp.capacity += ingredient.capacity * attribs[i];
      tmp.durability += ingredient.durability * attribs[i];
      tmp.flavor += ingredient.flavor * attribs[i];
      tmp.texture += ingredient.texture * attribs[i];
    });

    let sum = Math.max(0, tmp.capacity)
            * Math.max(0, tmp.durability)
            * Math.max(0, tmp.flavor)
            * Math.max(0, tmp.texture);

    if (sum > max) {
      max = sum;
    }
  });

  return max;
};
