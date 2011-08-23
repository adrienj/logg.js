/*
 * logg.js - Copyright 2011 Adrienj
 * Licensed under the WTFPL
*/
(function (window, document) {
    
    // Creating the template for log items
    var li = document.createElement('li'),
        style = li.style;
        
    li.className = 'logg';
    
    // Some styling
    style.marginLeft    = '50px';
    style.marginTop     = '5px';
    style.listStyleType = 'disc';

    
    // Log some items
    window.logg = function () {
    
        // If the list doesnt exists, create it
        var o = document.getElementById('loggs') || (function (ul) {
            ul.id = 'loggs';
            
            // Some styling
            var style = ul.style;
            style.margin = style.bottom = style.padding = 0;
            style.overflowY     = 'auto';              style.position   = 'fixed';
            style.width         = '100%';              style.height     = '15%';
            style.background    = 'rgba(0,0,0,0.5)';   style.color      = '#fff';
            
            // Show it
            document.body.appendChild(ul);
            
            return ul;
        })(document.createElement('ul'));
        
        // display each argument
        [].slice.call(arguments).map(function (message) {
            var i = li.cloneNode(false);
            i.appendChild(document.createTextNode(
                typeof message === 'boolean' ? message+"" : message
            ));
            o.appendChild(i);
        });
        
        // Empty the list
        this.clear = function () {
            o.innerHTML = '';
        };
        
        // Remove the list
        this.remove = function () {
            o.parentNode.removeChild(o);
        };
        
        // Chaining
        this.logg = arguments.callee;
        
        return this;
    }; 
    
})(this, document);
