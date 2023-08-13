class TollTheDead extends Item {
    constructor(data, options) {
        super(data, options);
        CONFIG.Item.documentClass = TollTheDead;
    }

    async castSpell() {
        console.log("Casting Toll The Dead");
    }
}