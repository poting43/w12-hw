export class Sells {
    private _price = 0;
    private foo = new Map();

    buy(eps: number, amount: number) {
        if(this.foo.has("eps"))
            this.foo.set(eps,amount+this.foo.get(eps));
        else
            this.foo.set(eps,amount);
    }

    get price(){
        while(this.foo.size){
            switch(this.foo.size){
                case 1:
                    this._price += 100;
                    break;
                case 2:
                    this._price += 190;
                    break;
                default:
                    this._price += 270;
                    break;
            }
            for(let key of this.foo.keys()){
                if(this.foo.get(key)==1)
                    this.foo.delete(key);
                else
                    this.foo.set(key,this.foo.get(key)-1);
            }
        }    
            
        return this._price;
    }
}
