function myFunction() {
    'use strict';    
    let y = 3.14; // 报错 (y 未定义)
}

myFunction();


var name = (function() { return 'Anton' }());
