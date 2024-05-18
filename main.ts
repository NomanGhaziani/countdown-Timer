import { differenceInSeconds, DifferenceInSecondsOptions } from "date-fns";

function* countdownTimer(second : number){
    while(second > 0) {
        yield second;
        second--;
    }
}
let timerInterator = countdownTimer(10);

function displayCountdown(){
    let result = timerInterator.next();
if(!result.done){
    const now = new Date();
    const countdownTimer =new Date(now.getTime()+(result.value * 1000))
    const remainingSeconds = differenceInSeconds(countdownTimer , now)
    console.log(`Remaning Seconds : ${remainingSeconds}`)
    setTimeout(displayCountdown, 1000)
}else{"countdown complete!"}
}
displayCountdown();