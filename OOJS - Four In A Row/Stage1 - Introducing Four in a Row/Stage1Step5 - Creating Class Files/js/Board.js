class Board {
    //No arguments are passed below as they is only one board and we have already set the values
    constructor() {
        this.rows = 6;
        this.columns = 7;
        this.spaces = this.createSpaces();
    }

    //Generates a 2D array of spaces. Providing exact slots within the table. 
    createSpaces() {
        const spaces = [];

        for (let x = 0; x < this.columns; x++) {
            const column = [];

            for (let y = 0; y < this.rows; y++) {
                const space = new Space(x, y);
                column.push(space);
            }

        spaces.push(column);
        }
    
        return spaces;
    }

    drawHTMLBoard() {
        for (let column of this.spaces) {
            for (let space of column) {
                space.drawSVGSpace();
            }

        }
    }

}