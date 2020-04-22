class Space {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        //x and y are from above giving you the exact spot on the table
        this.id = `space-${x}-${y}`;
        //Informs you is a token has been dropped into a space. Starts with null but then is populated with the token object that space contains
        this.token = null;
        this.diameter = 76;
        this.radius = this.diameter/2;
    }

    drawSVGSpace() {

        //Draw SVG space
        const svgSpace = document.createElementNS("http://www.w3.org/2000/svg", "circle");

        svgSpace.setAttributeNS(null, "id", this.id);
        svgSpace.setAttributeNS(null, "data-column", this.x);
        svgSpace.setAttributeNS(null, "cx", (this.x * this.diameter) + this.radius);
        svgSpace.setAttributeNS(null, "cy", (this.y * this.diameter) + this.radius);
        svgSpace.setAttributeNS(null, "r", this.radius - 8);
        svgSpace.setAttributeNS(null, "fill", "black");
        svgSpace.setAttributeNS(null, "stroke", "none");

        document.getElementById("mask").appendChild(svgSpace);
    }
}