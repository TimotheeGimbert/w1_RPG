class Berzerker extends Character {
  constructor(hp = 8, dmg = 4, mana = 0, status = "playing", name) {
    super(hp, dmg, mana, status, name);
  }

  specialAttack = (victim) => this.rage(victim);

  rage = (victim) => {
    const dmgBonus = 1;
    const hpCost = 1;
    if (this.hp > hpCost) {
      this.dmg += dmgBonus;
      this.hp -= hpCost;
    }
    else {
      console.log("Not enough HP to perform specialty !");
    }
  }

}