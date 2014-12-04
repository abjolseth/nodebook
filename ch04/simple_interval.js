// Simple interval
var x,y,z;
x=y=z=0;

var displayValues = function() {
    console.log('X=%d; Y=%d; Z=%d',x,y,z);
};

function updateX() {
    x += 1;
};
function updateY() {
    y += 1;
};
function updateZ() {
    z += 1;
    displayValues();
};

setInterval(updateX, 500);
setInterval(updateY, 1000);
setInterval(updateZ, 2000);