class Game {
  constructor(turnsLeft = 10) {
    this.turnsLeft = turnsLeft;
  }

  newTurn = () => {
    this.turnsLeft -= 1;
    if (this.turnsLeft === 0) console.log("Last turn before end of game !");
  }

  watchStats = (players) => {
    players.forEach(player => {
      console.log(`
      Player ${player.name} : ${player.constructor.name} (is ${player.status}) \n
      Health Points : ${player.hp} 
      Damages : ${player.dmg} 
      Mana : ${player.mana}
      `);
    });
  }

  playersLeft = (players) => {
    const playersLeft = [];
    players.forEach(player => {
      if (player.status === "playing") playersLeft.push(player);
    });
    return playersLeft;
  }

}
