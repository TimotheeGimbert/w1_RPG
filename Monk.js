class Monk extends Character {
  constructor(hp = 8, dmg = 2, mana = 200, status = "playing", name) {
    super(hp, dmg, mana, status, name);
  }

  specialAttack = (victim) => this.heal(victim);

  heal = () => {
    const manaCost = 25;
    const specialHealing = 8;
    if (manaCost <= this.mana) {
      this.hp += specialHealing;
      this.mana -= manaCost;
    }
    else {
      console.log("Not enough mana !");
    }
  }

}