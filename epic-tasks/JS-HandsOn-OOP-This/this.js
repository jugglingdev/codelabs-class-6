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

