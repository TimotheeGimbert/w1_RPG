class Assassin extends Character {
  constructor(hp = 6, dmg = 6, mana = 20, status = "playing", name) {
    super(hp, dmg, mana, status, name);
  }

  specialAttack = (victim) => this.shadowHit(victim);

  shadowHit = (victim) => {
    const specialDamage = 7;
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