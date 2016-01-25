import clone from 'clone';

class Simulator {

  getSpells() {
    return [
      { cost:  53, damage: 4, heal: 0, turns: 0, armor: 0, mana: 0 },
      { cost:  73, damage: 2, heal: 2, turns: 0, armor: 0, mana: 0 },
      { cost: 113, damage: 0, heal: 0, turns: 6, armor: 7, mana: 0 },
      { cost: 173, damage: 3, heal: 0, turns: 6, armor: 0, mana: 0 },
      { cost: 229, damage: 0, heal: 0, turns: 5, armor: 0, mana: 101 }
    ];
  }

  getAvailableSpells(maxMana, usingSpells = []) {
    const tmp = usingSpells.map(x => x.cost);
    return this.getSpells().filter(spell => spell.cost <= maxMana && tmp.indexOf(spell.cost) === -1);
  }

  parseEnemyInfo(data) {
    return {
      health: parseInt(data.match(/Hit Points: ([0-9]+)/)[1], 10),
      damage: parseInt(data.match(/Damage: ([0-9]+)/)[1], 10)
    };
  }

  prepareFirstState(enemy) {
    let state = {
      turns: 0,
      turn: 'player',
      enemy: {
        health: enemy.health,
        damage: enemy.damage
      },
      player: {
        health: 50,
        mana: 500,
        manaSpend: 0,
        activeSpells: []
      }
    };

    return state;
  }

  removeLosedStates(states) {
    return states.filter(state => {
      return state.player.health > 0 && state.player.mana >= 53
    });
  }

  isAnyNextStates(states) {
    return states.some(state => {
      return state.player.health > 0 && state.enemy.health > 0 
    });
  }

  getNextStates(states) {
    let nextStates = [];

    states.forEach(state => {
      if (state.enemy.health <= 0) {
        nextStates.push(state);
      } else {
        let playerArmor = 0;
        let playerDamage = 0;

        state.player.activeSpells = state.player.activeSpells.map(spell => {
          playerArmor += spell.armor;
          state.enemy.health -= spell.damage;
          state.player.health += spell.heal;
          state.player.mana += spell.mana;

          spell.turns--;
          return spell;
        }).filter(spell => spell.turns);

        if (state.turn == 'player') {
          const availableSpells = this.getAvailableSpells(state.player.mana, state.player.activeSpells);
          availableSpells.forEach(spell => {
            let newState = clone(state);

            if (!spell.turns) {
              newState.enemy.health -= spell.damage;
              newState.player.health += spell.heal;
              newState.player.mana += spell.mana;
            } else {
              newState.player.activeSpells.push(spell);
            }

            newState.player.manaSpend += spell.cost;
            newState.player.mana -= spell.cost;

            newState.turn = newState.turn == 'player' ? 'enemy' : 'player';
            newState.turns++;
            nextStates.push(newState);
          });
        } else {
          if (state.enemy.health > 0) {
            state.player.health -= Math.max(state.enemy.damage - playerArmor, 1);
          }

          state.turn = state.turn == 'player' ? 'enemy' : 'player';
          state.turns++;
          nextStates.push(state);
        }
      }
    });

    return nextStates;
  }

  run(data) {
    const enemy = this.parseEnemyInfo(data);
    const state = this.prepareFirstState(enemy);
    
    let states = [ state ];

    do {
      states = this.getNextStates(states);
      states = this.removeLosedStates(states);
    } while (this.isAnyNextStates(states));

    let minMana = undefined;
    states.forEach(state => {
      if (typeof minMana == 'undefined' || minMana > state.player.manaSpend) {
        minMana = state.player.manaSpend;
      }
    });

    return minMana;
  }

}

module.exports = new Simulator();
