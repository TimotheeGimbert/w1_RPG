class Paladin extends Character {
  constructor(hp = 16, dmg = 3, mana = 160, status = "playing") {
    super(hp, dmg, mana, status);
  }

  healingLighting = (victim) => {
    const specialDamage = 4;
    const manaCost = 40;
    const specialHealing = 5;
    if (this.hasEnoughMana(manaCost)) {
      victim.takeDamage(specialDamage);
      this.reduceMana(manaCost);
      this.hp += specialHealing;
    }
    else {
      this.dealDamage(victim);
      console.log("Not enough mana, a basic attack has been performed !");
    }
  }

}