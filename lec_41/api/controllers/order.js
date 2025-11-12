const OrderBook = require("../service/orderService");
let ob=new OrderBook("BTCUSD");  //global object
let {publisher}=require("../../shared/index");
module.exports.postPlaceOrder=async(req,res)=>{

    // to create a new order for user who is placing the order
    let {side,type,price,quantity,user}=req.body;

    //global object islie bnaya h taaki ik hee object bna rhe hr baar nya obj na bne
    let response = ob.placeOrder(side,type,price,quantity,user);

    publisher.PUBLISH("book_Update",JSON.stringify(response.book));

    req.JSON({
        event:"order-update",
        data:{
            
            orderResponse:response.result,
            book:response.book,
        }
    })
    console.log(response);
}