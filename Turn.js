class Turn {
  constructor(game, players) {
    this.game = game;
    this.players = players;
  }

  startTurn = () => {
    game.newTurn();
    console.log(`>>>>>>>>>>>> It's turn ${10 - game.turnsLeft} ! <<<<<<<<<<<<`);

    const playersLeft = game.playersLeft(players);
    playersLeft.forEach(player => {
      if (player.status === "loser") return;
      const victimName = prompt(`${player.name}, what player do you want to attack?`);
      console.log(`${player.name} wants to attack ${victimName}`);
      const victim = players.find(player => player.name === victimName);
      const attackType = prompt("What kind of attack do you want to perform? Basic (B) or Special (S) ?");
      
      console.log(`${victim.name}'s health points before the attack was ${victim.hp}`);
      if (attackType === "B") {
        player.dealDamage(victim);
      }
      else if (attackType === "S") {
        player.specialAttack(victim);
      } 
      console.log(`${victim.name}'s health points are now ${victim.hp}`);
      game.watchStats(players);
    });
  }

}