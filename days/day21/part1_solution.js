import { power } from 'js-combinatorics';

class RPG {

  getShopWeapons() {
    return [
      {cost:  8, damage: 4, armor: 0},
      {cost: 10, damage: 5, armor: 0},
      {cost: 25, damage: 6, armor: 0},
      {cost: 40, damage: 7, armor: 0},
      {cost: 74, damage: 8, armor: 0}
    ];
  }

  getShopArmors() {
    return [
      {cost:  13, damage: 0, armor: 1},
      {cost:  31, damage: 0, armor: 2},
      {cost:  53, damage: 0, armor: 3},
      {cost:  75, damage: 0, armor: 4},
      {cost: 102, damage: 0, armor: 5}
    ];
  }

  getShopRings() {
    return [
      {cost:  25, damage: 1, armor: 0},
      {cost:  50, damage: 2, armor: 0},
      {cost: 100, damage: 3, armor: 0},
      {cost:  20, damage: 0, armor: 1},
      {cost:  40, damage: 0, armor: 2},
      {cost:  80, damage: 0, armor: 3}
    ];
  }

  getAllPlayerCombinations() {
    const weapons = this.getShopWeapons();
    const armors = this.getShopArmors();
    const rings = this.getShopRings();

    let combines = [];

    for (let weaponI=0; weaponI<=4; weaponI++) {
      for (let armorI=-1; armorI<=4; armorI++) {
        power([0, 1, 2, 3, 4, 5]).forEach(ringsI => {
          let cost = 0, damage = 0, armor = 0;

          if (weapons[weaponI]) {
            cost += weapons[weaponI].cost;
            damage += weapons[weaponI].damage;
            armor += weapons[weaponI].armor;
          }

          if (armors[armorI]) {
            cost += armors[armorI].cost;
            damage += armors[armorI].damage;
            armor += armors[armorI].armor;
          }

          ringsI.forEach(ringI => {
            if (rings[ringI]) {
              cost += rings[ringI].cost;
              damage += rings[ringI].damage;
              armor += rings[ringI].armor;
            }
          });

          combines.push({ cost, damage, armor });
        });
      }
    }

    return combines;
  }

  parseEnemyInfo(data) {
    return {
      health: parseInt(data.match(/Hit Points: ([0-9]+)/)[1], 10),
      damage: parseInt(data.match(/Damage: ([0-9]+)/)[1], 10),
      armor: parseInt(data.match(/Armor: ([0-9]+)/)[1], 10)
    };
  }

  canPlayerWin(player, enemy) {
    let units = {
      player: Object.assign({}, player),
      enemy: Object.assign({}, enemy)
    }

    let attacker = 'player';
    let defender = 'enemy';

    while (units['player'].health > 0 && units['enemy'].health > 0) {
      units[defender].health -= Math.max(units[attacker].damage - units[defender].armor, 1);
      [ attacker, defender ] = [ defender, attacker ];
    }

    return units['player'].health > 0;
  }

  run(data) {
    const enemy = this.parseEnemyInfo(data);
    const playerCombinations = this.getAllPlayerCombinations();

    let minCost;

    playerCombinations.forEach(player => {
      player.health = 100;

      if (this.canPlayerWin(player, enemy) && (minCost === undefined || minCost > player.cost)) {
        minCost = player.cost;
      }
    });

    return minCost;
  }

}

module.exports = new RPG();
