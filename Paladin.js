class Paladin extends Character {
  constructor(hp = 16, dmg = 3, mana = 160, status = "playing", name) {
    super(hp, dmg, mana, status, name);
  }

  specialAttack = (victim) => this.healingLighting(victim);

  healingLighting = (victim) => {
    const specialDamage = 4;
    const manaCost = 40;
    const specialHealing = 5;
    if (manaCost <= this.mana) {
      victim.takeDamage(specialDamage);
      this.hp += specialHealing;
      this.mana -= manaCost;
    }
    else {
      this.dealDamage(victim);
      console.log("Not enough mana, a basic attack has been performed !");
    }
  }

}