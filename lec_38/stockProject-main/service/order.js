class OrderBook{
    constructor(symbol="BTCUSD"){
        this.bids = [],
        this.ask = [],
        this._nextId = 1;
        this.lastTradedPrice = null;
    }
    _genOrderId(){
        return this._nextId++;
    }
    _sort(sides){
        if(sides=="BUY"){
            this.bids.sort((a,b)=>{
                if(a.price!=b.price){
                    return b.price-a.price;
                }
                return a.timestamp-b.timestamp;
            })
        }
        else{

        }
    }
    //function to place a new order in orderbbok
    /*
    1. create new order {orderId,side,type,price?,originalqnty,remainingqnty,execqty,timesamp user} 
    2. match type if type==market, call marketmatch else call limit_match
    */
    placeOrder(side,type,price=null,quantity,user){
        // basic validation to be done
        let order={
            orderId:this._genOrderId(),
            symbol:this.symbol,
            side:side,
            type:type,
            price:price,
            originQty:originQty,
            remainQty:remainQty,
            exectQty:0,
            timestamp:Date.now(),
            user:user   
        }
        let trades = [];
        if(type=="MARKET"){
            this._marketMatch(order);
        }
        else{
            this._limitMatch(order);
        }
    }
    //execute order if it is a market order
    /* 
     bids: [] sorted desecending order
     ask: [] sorted ascending order
     1. type:buy|sell
     2. if buy start buying from asks array stating from index 0.
          loop while order.remainingQty>0 && asks.length>0
    */ 
    _marketMatch(){

    }
    
    _limitMatch(){
        
    }
}
//if a function or variable start with _ is just for naming it mean this variable is use in speciffic class only (private)
// let orderBook = new OrderBook("BTCUSD")



BTCUSDOrderBook.bids.push(
    {orderId:2,side:"BUY",type:"MARKET",
    price:100,quantity:10,timestamp:Date.now(),user:"Mehak"
})

    
BTCUSDOrderBook.bids.push(
    {orderId:2,side:"BUY",type:"MARKET",
    price:90,quantity:10,timestamp:Date.now(),user:"Raju"}
)

    
BTCUSDOrderBook.bids.push(
    {orderId:2,side:"BUY",type:"MARKET",
    price:70,quantity:10,timestamp:Date.now(),user:"Utkarsh"}
)

BTCUSDOrderBook._sort("BUY")
console.log(BTCUSDOrderBook.bids);class OrderBook{
    constructor(symbol="BTCUSD"){
        this.bids = [],
        this.ask = [],
        this._nextId = 1;
        this.lastTradedPrice = null;
    }
    _genOrderId(){
        return this._nextId++;
    }7
    _sort(sides){
        if(sides=="BUY"){
            this.bids.sort((a,b)=>{
                if(a.price!=b.price){
                    return b.price-a.price;
                }
                return a.timestamp-b.timestamp;
            })
        }
        else{

        }
    }
    //function to place a new order in orderbbok
    /*
    1. create new order {orderId,side,type,price?,originalqnty,remainingqnty,execqty,timesamp user} 
    2. match type if type==market, call marketmatch else call limit_match
    */
    placeOrder(side,type,price=null,quantity,user){
        // basic validation to be done
        let order={
            orderId:this._genOrderId(),
            symbol:this.symbol,
            side:side,
            type:type,
            price:price,
            originQty:originQty,
            remainQty:remainQty,
            exectQty:0,
            timestamp:Date.now(),
            user:user   
        }
        let trades = [];
        if(type=="MARKET"){
            this._marketMatch(order);
        }
        else{
            this._limitMatch(order);
        }
    }
    //execute order if it is a market order
    /* 
     bids: [] sorted desecending order
     ask: [] sorted ascending order
     1. type:buy|sell
     2. if buy start buying from asks array stating from index 0.
          loop while order.remainingQty>0 && asks.length>0
          buy min(order.remainingQty, asks[0].remainingQty)
    */ 
    _marketMatch(order){
        if(type=="BUY"){
            let asksArr= this.ask
            let top = asksArr[0]
            while(order.remainQty>0 && asksArr.length>0){
                let orderfill = Math.min(order.remainQty,top.remainQty);
                order.exectQty = order.exectQty + orderfill;
                order.remainQty = order.remainQty - orderfill;

                top.exectQty = top.exectQty + orderfill;
                top.remainQty = top.remainQty - orderfill;

                if(top.remainQty<=0){
                    asksArr.shift()
                }
            }
        }
    }
    
    _limitMatch(){
        
    }

    getBookSnapShot(){
        return{
            lastUpdated:Date.now()
            
        }
    }
}
//if a function or variable start with _ is just for naming it mean this variable is use in speciffic class only (private)
// let orderBook = new OrderBook("BTCUSD")

let BTCUSDOrderBook= new OrderBook()

BTCUSDOrderBook.bids.push(
    {orderId:2,side:"BUY",type:"MARKET",
    price:100,quantity:10,timestamp:Date.now(),user:"Mehak"
})

    
BTCUSDOrderBook.bids.push(
    {orderId:2,side:"BUY",type:"MARKET",
    price:90,quantity:10,timestamp:Date.now(),user:"Raju"}
)

    
BTCUSDOrderBook.bids.push(
    {orderId:2,side:"BUY",type:"MARKET",
    price:70,quantity:10,timestamp:Date.now(),user:"Utkarsh"}
)

BTCUSDOrderBook._sort("BUY")
console.log(BTCUSDOrderBook.bids);