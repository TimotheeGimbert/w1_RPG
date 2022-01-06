class Monk extends Character {
  constructor(hp = 8, dmg = 2, mana = 200, status = "playing") {
    super(hp, dmg, mana, status);
  }

  heal = () => {
    const manaCost = 25;
    const specialHealing = 8;
    if (this.hasEnoughMana(manaCost)) {
      this.reduceMana(manaCost);
      this.hp += specialHealing;
    }
    else {
      console.log("Not enough mana !");
    }
  }

}