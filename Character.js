class Character {
  constructor(hp, dmg, mana, status) {
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.status = status;
  }

  takeDamage = (dmgReceived) => {
    this.hp -= dmgReceived;
    if (this.hp <= 0) {
      this.loser();
    }  
  }

  dealDamage = (victim) => {
    victim.takeDamage(this.dmg);
    if (victim.status === "loser") {
      const manaBonus = 20;
      this.mana += manaBonus;
    }
  }

  loser = () => {
    this.status = "loser";
  }

  hasEnoughMana = (manaCost) => {
    manaCost <= this.mana ? true : false;
  }

  reduceMana = (manaCost) => {
    this.mana -= manaCost;
  }

}