class Fighter extends Character {
  constructor(hp = 12, dmg = 4, mana = 40, status = "playing", name) {
    super(hp, dmg, mana, status, name);
  }

  specialAttack = (victim) => this.darkVision(victim);

  darkVision = (victim) => {
    const specialDamage = 5;
    const manaCost = 20;
    if (manaCost <= this.mana) {
      victim.takeDamage(specialDamage);
      this.mana -= manaCost;
      // Need to add special protection until next round
    }
    else {
      this.dealDamage(victim);
      console.log("Not enough mana, a basic attack has been performed !");
    }
  }

}