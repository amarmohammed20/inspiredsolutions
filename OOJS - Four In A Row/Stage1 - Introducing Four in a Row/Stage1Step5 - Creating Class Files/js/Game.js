class Game {
    constructor() {
        //board creates a new board for when the game is started
        this.board = new Board;
        this.players = this.createPlayers();
        this.ready = false;
    }

    //Returns active player
    get activePlayer() {
        return this.players.find(player => player.active);
    }

    //Creates two player objects
    createPlayers() {
        const players = [new Player('Player 1', 1, '#e15258', true),
                         new Player('Player 2', 2, '#e59a13')];
        return players;
    }

    //Gets game ready for playing
    startGame() {
        this.board.drawHTMLBoard();
        this.activePlayer.activeToken.drawHTMLBoard();
        this.ready = true;

    }
}