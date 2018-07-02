var events =require('events')
var eventEmitter =new events.EventEmitter();

eventEmitter.on('SayHi',function(){
console.log('Hi......')

})
eventEmitter.on('SayHello',function(){
    console.log('Hello......')
    })
    console.log('Before sayHi')
eventEmitter.emit('SayHi')
    console.log('after SayHi')
    console.log('before sayHello')
    eventEmitter.emit('sayHello')
    console.log('after sayHello')