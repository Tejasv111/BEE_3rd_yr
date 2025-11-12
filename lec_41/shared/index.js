const {createClient} = require('redis');

let publisher = createClient();
let subscriber = createClient();
publisher.connect()
.then(()=>console.log("connected to client..."));

subscriber.connect()
.then(()=>console.log("connected to subscriber..."));

module.exports = {
    publisher,
    subscriber
};