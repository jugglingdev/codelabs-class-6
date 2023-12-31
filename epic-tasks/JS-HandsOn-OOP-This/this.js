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
};

clothing.outfit();  /*
                        hat: beanie
                        shoes: sneakers
                        accessory: scarf
                    */


const IndianaJonesClothing = {

    hat: 'fedora',
    shoes: 'boots',
    accessory: 'whip',
    outfit: function () {
        
        const arrowFunction = () => {
            console.log(
                `hat: ${this.hat}` +
                `\nshoes: ${this.shoes}` +
                `\naccessory: ${this.accessory}`
            );
        }

        arrowFunction();
    }
};

IndianaJonesClothing.outfit();  /*
                        hat: fedora
                        shoes: boots
                        accessory: whip
                    */

                        
const DevilWearsPradaClothing = {

    hat: 'tweed cap',
    shoes: 'heels',
    accessory: 'Chanel necklace',
    outfit: function() {
        console.log(
            `hat: ${this.hat}` +
            `\nshoes: ${this.shoes}` +
            `\naccessory: ${this.accessory}`
        );
    }
};

const boundOutfit = DevilWearsPradaClothing.outfit.bind(DevilWearsPradaClothing);

boundOutfit();  /*
                    hat: tweed cap
                    shoes: heels                   accessory: Chanel necklace
                */
