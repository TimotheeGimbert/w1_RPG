class Fighter extends Character {
  constructor(hp = 12, dmg = 4, mana = 40, status = "playing") {
    super(hp, dmg, mana, status);
  }

  darkVision = (victim) => {
    const specialDamage = 5;
    const manaCost = 20;
    if (this.hasEnoughMana(manaCost)) {
      victim.takeDamage(specialDamage);
      this.reduceMana(manaCost);
      // Need to add special protection until next round
    }
    else {
      this.dealDamage(victim);
      console.log("Not enough mana, a basic attack has been performed !");
    }
  }

}