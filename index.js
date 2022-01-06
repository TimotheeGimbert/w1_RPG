const players = [];
const Grace = new Fighter();
Grace.name = "Grace";
const Ulder = new Paladin();
Ulder.name = "Ulder";
const Maana = new Monk();
Maana.name = "Maana";
const Draven = new Berzerker();
Draven.name = "Draven";
const Carl = new Assassin();
Carl.name = "Carl";
players.push(Grace, Ulder, Maana, Draven, Carl);

const game = new Game();
game.watchStats(players);

while (game.turnsLeft > 0 && game.playersLeft(players).length > 1) {
  const turn = new Turn(game, players);
  turn.startTurn();
}

console.log(">>>>>>>>>>>>>>>>>>>>>>>>> Winners are :");
game.playersLeft(players).forEach(player => {
  console.log(player.name);
});