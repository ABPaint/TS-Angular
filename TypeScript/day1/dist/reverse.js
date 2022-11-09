"use strict";
let str = "Hello World!";
let reverse = '';
function reversed(a) {
    for (let i = str.length; i >= 0; i--) {
        reverse = reverse + str.charAt(i);
    }
}
reversed(str);
console.log(reverse);
//# sourceMappingURL=reverse.js.map