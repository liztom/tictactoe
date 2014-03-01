describe("Game", function() {
  describe("create", function() {
    it("creates a new instance of a Game", function() { 
      var testGame = Game.create(Game);
      Game.isPrototypeOf(testGame).should.equal(true);
    });
  });
  describe("initialize", function() {
    it("sets the players", function() {
      var testGame = Object.create(Game);
      //console.log(testGame.player1)
      testGame.initialize("player1", "player2");
      testGame.player1.playerToken.should.equal("player1");
      testGame.player2.playerToken.should.equal("player2");
    });
  });
  describe("createBoard", function() { 
    it("it creates board for the game", function() {
      var testGame = Object.create(Game);
      var testBoard = testGame.createBoard();
      Board.isPrototypeOf(testBoard).should.equal(true);
    });
  });
  describe("createSpace", function() {
    it("creates space object", function() {
      var testGame = Object.create(Game);
      var testSpace = testGame.createSpace();
      Space.isPrototypeOf(testSpace).should.equal(true);
    });
  });
  describe("switchPlayer", function() {
    it("returns which players turn it is", function() {
      var testGame = Game.create(Game);
      testGame.switchPlayer(1);
      testGame.currentPlayer.should.equal(2);
    })
  })
});

describe("Player", function() {
  describe("initialize", function() {
    it("creates a player", function() {
      var testPlayer = Object.create(Player);
      testPlayer.initialize("X");
      testPlayer.playerToken.should.equal("X"); 
    });
  });
});

describe("Space", function() {
  describe("initialize", function() {
    it("is initialized with an x and y coordinate", function() {
      var testSpace = Object.create(Space);
      testSpace.initialize(1, 2);
      testSpace.xCoordinate.should.equal(1);
      testSpace.yCoordinate.should.equal(2);
    });
  });
  describe("create", function() {
    it("it creates the space", function() {
      var testSpace = Space.create(Space);
      Space.isPrototypeOf(testSpace).should.equal(true);
    });
  });
});

beforeEach(function() {
  Board.player1 = [];
  Board.player2 =[];
});

describe("Board", function() {
  describe("create", function() {
    it("creates a board object", function() {
      var testBoard = Board.create();
      Board.isPrototypeOf(testBoard);
    });
  });
  describe("initialize", function(){
    it("populates the board with spaces", function(){
      var testBoard = Board.create();
      testBoard.spaces[0].xCoordinate.should.equal(1);
    });
  });
  describe("find", function() {
    it("finds the object property that matches those coordinates", function() {
      var testBoard = Board.create();
      testBoard.find(1, 3).should.equal(true);
      testBoard.find(2, 3).should.equal(true);
    });
    it("finds the object property that matches those coordinates", function() {
      var testBoard = Board.create();
      testBoard.find(3, 5).should.equal(false);
    });
    it("pushes the found object into player 1's array", function() {
      var testBoard = Board.create();
      testBoard.find(2, 2);
      testBoard.player1[0].xCoordinate.should.equal(2);
    });
    // it("pushes the found object into player 2's array", function() {
    //   var testGame = Game.create();
    //   testGame.switchPlayer();
    //   testGame.board.find(3, 2);
    //   testGame.board.player2[0].xCoordinate.should.equal(3);
    // });
  });
});
