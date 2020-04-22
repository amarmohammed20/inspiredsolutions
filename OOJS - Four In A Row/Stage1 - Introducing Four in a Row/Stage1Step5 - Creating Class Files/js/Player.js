//Active is false by default assuming its not the player turn, this can be overridden when it is there turn
//Tokens have not been passed in as a parameter as this will be later a method 

class Player {
    constructor(name, id, colour, active = false) {
        this.name = name;
        //id is used to help identify which player the toekn belongs to
        this.id = id;
        //The colour property is used to identify whos tokens are placed where, linking to the HTML
        this.colour = colour;
        this.active = active;
        //The token array will hold the number of tokens for the player. A method will be created for this.
        this.tokens = this.createTokens(21);
    }

    //below method creates token objects for player. The number parameter is the number of token objects to be created, currently at 21.  
    createTokens(num) {
        const tokens = [];

        for (let i = 0; i < num; i++) {
            //The variable is equal to a new token object. This information will be passed to the id property in the token object in the token class 
            let tokens = new Token(i, this);
            //Push the newly created token to the tokens array
            tokens.push(token);
        }

        return tokens;
    }

    //Gets all tokens that haven't been dropped
    get unusedTokens() {
        return this.tokens.filter(token => !token.dropped);
    }

    //Gets the active token by returning the first token in the array of unused tokens
    get activeToken() {
        return this.unusedTokens[0];
    }
}