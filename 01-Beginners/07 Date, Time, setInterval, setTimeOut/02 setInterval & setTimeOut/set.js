// setInterval()
setInterval(() => console.log('Interval executed'), 1000);

// setTimeOut()
setTimeout(() => console.log('Interval stopped'), 10000);

// Execute interval every 10 seconds
const intervalId = setInterval(() => {
    console.log('setInterval Executed');
}, 1000);

// Stopped interval when 100 seconds
setTimeout(() => {
    clearInterval(intervalId);
    console.log('setTimeOut stopped the setInterval');
}, 10000)