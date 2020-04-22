class Token {
    constructor() {
        //owner will hold a reference to the player object that owns the token
        this.owner = owner;
        //The id is needed as we will have many tokens objects in the HTML as the game develops.
        //The id for the token will work with the token method which is stored in the player class. This will be a for loop, index being the new token number from the loop.
        this.id = `token-${index}-${owner.id}`;
        //This will hold a boolean value indicating if the token has been player. flase by default as no tokens have been dropped. 
        this.dropped = false;
    }

    drawHTMLToken() {
        //Create a div in the HTML
        const token = document.createElement('div');
        document.getElementById('game-board-underlay').appendChild(token);
        //set a id for the new div created
        token.setAttribute('id', this.id);
        //set a class for the new div created
        token.setAttribute('class', 'token');
        token.style.backgroundColor = this.owner.colour;
    }
}

