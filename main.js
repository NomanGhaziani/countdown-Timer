"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
function* countdownTimer(second) {
    while (second > 0) {
        yield second;
        second--;
    }
}
let timerInterator = countdownTimer(10);
function displayCountdown() {
    let result = timerInterator.next();
    if (!result.done) {
        const now = new Date();
        const countdownTimer = new Date(now.getTime() + (result.value * 1000));
        const remainingSeconds = (0, date_fns_1.differenceInSeconds)(countdownTimer, now);
        console.log(`Remaning Seconds : ${remainingSeconds}`);
        setTimeout(displayCountdown, 1000);
    }
    else {
        "countdown complete!";
    }
}
displayCountdown();
