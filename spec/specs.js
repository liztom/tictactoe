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
      testGame.initialize("player1", "player2");
      testGame.player1.should.equal("player1");
      testGame.player2.should.equal("player2");
    });
  });
  describe("createBoard", function() { 
    it("it creates board for the game", function() {
      var testGame = Object.create(Game);
      var testBoard = testGame.createBoard();
      Board.isPrototypeOf(testBoard).should.equal(true);
    });
  });
});

describe("Player", function() {
  describe("create", function() {
    it("creates a new instance of Player", function() {
      var testPlayer = Player.create(Player);
      Player.isPrototypeOf(testPlayer).should.equal(true);
    });
  });
  describe("initialize", function() {
    it("sets the game piece of the player", function() {
      var testPlayer = Player.create(Player);
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
  describe("createPlayer", function() {
    it("it creates a player object", function(){
      var testSpace = Space.create(Space);
      var testPlayer = testSpace.createPlayer();
      Player.isPrototypeOf(testPlayer).should.equal(true);
    });
  });
  describe("markBy", function() {
    it("lets a player mark the space", function() {
      var testPlayer = Player.create("X");
      var testSpace = Space.create(1, 2);
      testSpace.markBy(testPlayer);
      testSpace.markedBy.should.equal(testPlayer);
    });
  });
});

describe("Board", function() {
  it("create 9 spaces when it is initialized", function() {
    var testBoard = Object.create(Board);
    testBoard.a.should.eql([1, 1]);
  });
  describe("create", function() {
    it("creates a board object", function() {
      var testBoard = Board.create(Board);
      Board.isPrototypeOf(testBoard);
    })
  })
});
