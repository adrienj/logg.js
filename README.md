# logg.js (0.7KB)
The tiny logging library

## Usage

    <script src="logg.js"></script>
    <script>
    logg('Error')
        .logg(false)
        .logg(451);

    logg().clear(); 

    logg('Error', false, 451);
            
    logg().remove();

## Features

* Chaining
* Easy to use
* No external stylesheet needed
* Only 0.7KB!