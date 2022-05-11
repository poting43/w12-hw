export class Sells {
    private _price = 0;
    buy(pins: number) {
        this._price += pins*100;
    }

    get price(){
        return this._price;
    }
}
