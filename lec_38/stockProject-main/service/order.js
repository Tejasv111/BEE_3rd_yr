class OrderBook{
    constructor(symbol="BTCUSD"){
        this.bids = [],
        this.ask = [],
        this._nextid = 1;
        this.lastTradedPrice=null;
    }

    _genOrderId(){
        return this._nextid++;
    }

    _sort(sides){
        if(sides==="BUY"){
            this.bids.sort((a,b)=>{
                if(a.price!=b.price){
                    return b.price - a.price
                }
                return a.timestamp - b.timestamp;
            })
        }else{

        }
    }
}

let BTCUSDOrderBook= new OrderBook()
BTCUSDOrderBook.bids.push({
    orderId:1,
    side:"BUY",
    type:"MARKET",
    price:90,
    quantity:10,
    timestamp:Date.now(),
    user:"hhuh"
})
BTCUSDOrderBook.bids.push({
    orderId:3,
    side:"BUY",
    type:"MARKET",
    price:95,
    quantity:10,
    timestamp:Date.now(),
    user:"rrrrrrr"
})
BTCUSDOrderBook.bids.push({
    orderId:3,
    side:"BUY",
    type:"MARKET",
    price:100,
    quantity:10,
    timestamp:Date.now(),
    user:"veer"
})

BTCUSDOrderBook._sort("BUY");
console.log(BTCUSDOrderBook.bids);