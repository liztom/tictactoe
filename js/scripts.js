var Game = {
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
  },
  createSpace: function() {
    var space = Object.create(Space);
    return space;
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
  markBy: function(player) {
    return this.markedBy = player;
  },
}

var Board = {
  create: function() {
    var board = Space.create(Board);
    board.initialize;  
    return board;
  },
  initialize: function() {
    this.spaces = [];
    for(var x = 1; x < 4; x++){
      for(var y = 1; y < 4; y++){
        this.spaces.push(Space.create(x, y));
      };
    };
  // space = {create: function, createPlayer: function, initialize: function, markBy: function} -- xCoordinate, yCoordinate --> this.spaces
  },
  find: function() {
    for (var x = 1; x < 4; x++) {
      for (var y = 1; y < 4; y++) {
        Space.create.spaces.some(function(number){
          return number === (x,y)
        });
        // space.spaces.some(function(number) {
        //   return number === (x,y)  
        // });
      };
    };
    return false;
  }
} 


$(document).ready(function(){  
  for(var i = 1; i < 4; i++) {
  $("tr#one").append("<td>" + "</td>");
  };
  for(var i = 4; i < 7; i++) {
  $("tr#two").append("<td>" + "</td>");
  };
  for(var i = 7; i < 10; i++) {
  $("tr#three").append("<td>" + "</td>");
  };
});








