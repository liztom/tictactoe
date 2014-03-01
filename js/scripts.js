var Game = {
  create: function(player1, player2) {
   var game = Object.create(Game);
   game.initialize(player1, player2);
   //var board = game.createBoard();
   return game;
  },
  initialize: function(player1token, player2token) {
    var player1 = Object.create(Player);
    player1.initialize(player1token);
    this.player1 = player1;

    var player2 = Object.create(Player);
    player2.initialize(player2token);
    this.player2 = player2;

    this.currentPlayer = 1;

    this.board = this.createBoard();
  },
  createBoard: function() {
    var board = Board.create(Board);
    return board;
  },
  createSpace: function() {
    var space = Object.create(Space);
    return space;
  },
  switchPlayer: function() {
    if (this.currentPlayer === 1) {
      this.currentPlayer = 2;
    } else {
      this.currentPlayer = 1;
    }
  }
}

var Player = {
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
  initialize: function(xCoordinate, yCoordinate) {
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
  }
}

var Board = {
  player1: [],
  player2: [],
  spaces: [],
  create: function() {
    var board = Object.create(Board);
    board.initialize();  
    return board;
  },
  initialize: function() {
    for(var x = 1; x < 4; x++){
      for(var y = 1; y < 4; y++){
        this.spaces.push(Space.create(x, y));
      };
    }; 
  },
  find: function(x, y) {
    var xSpaces = [];
    var ySpaces = [];
    var splicedObject;
    var playerTurn = Game.create();

     for (var i = 0; i < this.spaces.length; i++){
      if (this.spaces[i].xCoordinate === x) {
        xSpaces.push(i);
      } 
      if (this.spaces[i].yCoordinate === y) {
        ySpaces.push(i);
      }    
     }; 
    
    for(var i = 0; i < xSpaces.length; i++) {
      if(xSpaces[i] === ySpaces[0] || 
        xSpaces[i] === ySpaces[1] || 
        xSpaces[i] === ySpaces[2]) {
        splicedObject = this.spaces.splice(xSpaces[i], 1);
        if (playerTurn.currentPlayer === 1) {
          Board.player1.push(splicedObject[0]);
        } else {
          Board.player2.push(splicedObject[0]);
        }
        return true;
      } 
    };
    return false;   
  }   
}

$(document).ready(function(){  
  var currentGame = Game.create("X", "O");
  //var currentBoard = currentGame.createBoard();
  console.log(currentGame.board.spaces[1]);
  for(var i = 1; i < 4; i++) {
  $("tr#one").append("<td id=square"+i+">" + "</td>");
  };
  for(var i = 4; i < 7; i++) {
  $("tr#two").append("<td id=square"+i+">" + "</td>");
  };
  for(var i = 7; i < 10; i++) {
  $("tr#three").append("<td id=square"+i+">" + "</td>");
  };
    $("td#square1").click(function() {
      if (currentGame.currentPlayer === 1){
        $("td#square1").text(currentGame.player1.playerToken);
      } else {
        $("td#square1").text(currentGame.player2.playerToken);
      }
      currentGame.switchPlayer();
    });

  $("td#new").data("word", {first: currentGame.board.spaces[1]});
  $("span:first").text($("td#new").data("word").first);
});








