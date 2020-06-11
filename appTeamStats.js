const team = {
  _players: [ 
    {
      firstName: 'Pablo',
      lastname: 'Shanchez',
      age: 28
    }, 
    {
      firstName: 'Umberto',
      lastname: 'Rodriguez',
      age: 25 
    },
    {
      firstName: 'Kroe',
      lastname: 'Drogba',
      age: 25
    }

  ],
  _games: [
    {
      opponent: 'Broncos',
      teamPoints: 37,
      opponentPoints: 22
    },
    {
      opponent: 'Canadian',
      teamPoints: 42,
      opponentPoints: 5
    },
    {
      opponent: 'WorldCupFinal',
      teamPoints: 500,
      opponentPoints: 499
    }

  ],
  get games(){
    return this._games;
  },
  get players(){
    return this._players;
  },
  addPlayer(firstName,lastName,age){
    let player = {
      firstName: firstName,
      lastname: lastName,
      age: age
    };
    this.players.push(player);
  },
  addGame(opponent,teamPoints,opponentPoints){
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    this.games.push(game);
  }

};

team.addPlayer('Steph', 'Curry' , 28);
team.addPlayer('Lisa', 'Leslie' , 44);
team.addPlayer('Bugs', 'Bunny' , 76);