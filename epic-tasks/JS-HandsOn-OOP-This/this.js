const clothing = {

    hat: 'beanie',
    shoes: 'sneakers',
    accessory: 'scarf',
    outfit: function() {
        console.log(
            `hat: ${this.hat}` +
            `\nshoes: ${this.shoes}` +
            `\naccessory: ${this.accessory}`
        );
    }
}

clothing.outfit();  /*
                        hat: beanie
                        shoes: sneakers
                        accessory: scarf
                    */

const IndianaJonesClothing = {

    hat: 'fedora',
    shoes: 'boots',
    accessory: 'whip',
    outfit: () => {
        console.log(
            `hat: ${this.hat}` +
            `\nshoes: ${this.shoes}` +
            `\naccessory: ${this.accessory}`
        );
    }
}

IndianaJonesClothing.outfit();  /*
                        hat: undefined
                        shoes: undefined
                        accessory: undefined
                    */