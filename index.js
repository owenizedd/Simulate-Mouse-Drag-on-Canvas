let leftVal = window.innerWidth / 2;
let topVal = window.innerHeight / 2;
window.simulateRandomGesture = function (leftPx, topPx) {
    var target = document.querySelector('canvas');

    var simulateMouseEvent = function simulateMouseEvent(type, point) {
        var event = new MouseEvent(type, {
            'view': window,
            'bubbles': true,
            'cancelable': true,
            'clientX': leftVal,
            'clientY': topVal,
            // you can pass any other needed properties here
        });
        const amountHorizontal = Math.floor(Math.abs(leftPx) / 50);
        const amountVertical = Math.floor(Math.abs(topPx) / 50);
        
        leftVal=leftPx > 0 ? leftVal - amountHorizontal : leftVal + amountHorizontal;
        topVal = topPx > 0 ? topVal - amountVertical : topVal + amountVertical; 
        target.dispatchEvent(event);
    };

    var t = 0;
    simulateMouseEvent('mousedown' );
    var move = function move() {
        t += 1;
        if (t > 50) {
            simulateMouseEvent('mouseup');
        } else {
            simulateMouseEvent('mousemove');
            setTimeout(move, 10);
        }
    };
    move();
};
