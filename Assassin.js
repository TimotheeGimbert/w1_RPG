class Assassin extends Character {
  constructor(hp = 6, dmg = 6, mana = 20, status = "playing") {
    super(hp, dmg, mana, status);
  }

  shadowHit = (victim) => {
    const specialDamage = 7;
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