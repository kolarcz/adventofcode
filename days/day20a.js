function getHouseGifts(houseNumber) {
  let dividers = [];
  for (let i=1; i<=Math.sqrt(houseNumber); i++) {
    if (houseNumber % i == 0) {
      dividers.push(i);
      if (i != houseNumber / i) {
        dividers.push(houseNumber / i);
      }
    }
  }

  let gifts = 0;
  dividers.forEach(divider => {
    gifts += divider * 10;
  });

  return gifts;
}

export function run(data) {
  let minGifts = parseInt(data, 10);

  let houseNumber = 0
  let giftsInHouse = 0;

  while (giftsInHouse < minGifts && ++houseNumber) {
    giftsInHouse = getHouseGifts(houseNumber);
  }

  return houseNumber;
};
