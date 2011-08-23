// Grainy background with canvas

function generateNoise(opacity, from, to, elem) {  
    if ( !!!document.createElement('canvas').getContext ) {  
        return false;  
    }  
  
    var canvas = document.createElement("canvas"),  
       ctx = canvas.getContext('2d'),  
       x, y,  
       number,  
       opacity = opacity || .2,
       from = from || 180,
       to = to || 255,
       elem = elem || document.body;

    canvas.width = 100;  
    canvas.height = 100;  

    for ( x = 0; x < canvas.width; x++ ) {  
        for ( y = 0; y < canvas.height; y++ ) {  
            number = Math.floor( Math.random() * (to-from) + from);  
            
            ctx.fillStyle = "rgba(" + number + "," + number + "," + number + "," + opacity + ")";  
            ctx.fillRect(x, y, 1, 1);  
        }  
    }  
  
    if(toString.call(elem) === '[object Array]') {
        for (var i = 0, len = elem.length; i < len; i++) {  
            elem[i].style.backgroundImage = "url(" + canvas.toDataURL("image/png") + ")";
        }
    } else {
        elem.style.backgroundImage = "url(" + canvas.toDataURL("image/png") + ")";  
    }
}  
generateNoise(.1, 150, 200, document.getElementById('header'));
generateNoise(1, 25, 30);


// Demo button

var demo = document.getElementById('demo');

demo.onclick = function(e) {
    if(demo.innerHTML === 'DEMO') {
        demo.innerHTML = 'logg("Error");';
    }
    else if(demo.innerHTML === 'logg("Error");') {
        logg('Error');
        demo.innerHTML = 'logg().clear();';
    }
    else if(demo.innerHTML === 'logg().clear();') {
        logg().clear();
        demo.innerHTML = 'logg(915, true);';
    }
    else if(demo.innerHTML === 'logg(915, true);') {
        logg(915, true);
        demo.innerHTML = 'logg().remove();';
    }
    else if(demo.innerHTML === 'logg().remove();') {
        logg().remove();
        demo.innerHTML = 'DEMO';
    }
    
    e.preventDefault();
};