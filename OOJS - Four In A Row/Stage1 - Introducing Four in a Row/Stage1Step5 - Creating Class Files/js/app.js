const game = new Game();

// let beginGame = document.getElementById('begin-game');
// beginGame.addEventListener('click', function() {
//     game.startGame();
// });

document.getElementById('begin-game').addEventListener('click', function() {
    game.startGame();

    this.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';
});