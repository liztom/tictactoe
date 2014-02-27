var Game = {
  allCoordinates: [],
  create: function(player1, player2) {
   var game = Object.create(Game);
   game.initialize(player1, player2);
   return game;
  },
  initialize: function(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  },
  createBoard: function() {
    var board = Object.create(Board);
    return board;
  }
}

var Player = {
  create: function() {
    var player = Object.create(Player);
    return player;
  },
  initialize: function(playerToken) {
    this.playerToken = playerToken;
  }
}

var Space = {
  create: function(xCoordinate, yCoordinate) {
    var space = Object.create(Space);
    space.initialize(xCoordinate, yCoordinate);
    return space;
  },
  createPlayer: function() {
    var player = Object.create(Player);
    return player;
  },
  initialize: function(xCoordinate, yCoordinate) {
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
  },
  markBy: function(markedBy) {
    this.markedBy = markedBy;
    return markedBy;
  }
}

var Board = {
  a: [1, 1], b: [1, 2], c: [1, 3], d: [2, 1], e: [2, 2], f: [2, 3], 
  g: [3, 1], h: [3, 2], i: [3, 3],
  create: function() {
    var board = Object.create(Board);
    return board;
  }
}
