export class Sells {
    private _price = 0;
    private _amount = 0;
    private episode = new Set();
    private arr:number[] = [];
    buy(eps: number, amount: number) {
        this.episode.add(eps);
        this.arr[eps] = amount;
        this._amount += amount;
    }

    get price(){
        this._price += this._amount*100;
        this._price -= this._amount*(this.episode.size-1)*5;
        return this._price;
    }
}
