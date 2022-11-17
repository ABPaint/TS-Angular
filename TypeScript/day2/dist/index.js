"use strict";
var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["Match"] = 2] = "Match";
    Month[Month["April"] = 3] = "April";
    Month[Month["May"] = 4] = "May";
    Month[Month["Jun"] = 5] = "Jun";
    Month[Month["July"] = 6] = "July";
})(Month || (Month = {}));
function isitsummer(month) {
    let isummer;
    switch (month) {
        case Month.Jun:
        case Month.July:
            isummer = true;
            break;
        default:
            isummer = false;
            break;
    }
    return isummer;
}
console.log(isitsummer(4));
//# sourceMappingURL=index.js.map