function logCar(logMsg, callback) {
    process.nextTick(function(){
        callback(logMsg);
    });
};

var cars = ['Ferrari', 'Porsche', 'Bugatti'];

for (var c in cars) {
    var message = 'Saw a ' + cars[c];
    logCar(message, function(){
        console.log('Normal callback: '+ message);
    });
}

for (var c in cars) {
    var message = 'Saw a ' + cars[c];
    (function(msg){
        console.log('Closure Callback: ' + msg);
    })(message);
}
