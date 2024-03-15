// Default function parameter
function count(value = true) {
    if (value === true) {
        for (let i = 1; i <= 5; i++) {
            console.log(`Value is ${i}`);
        }
    }
}
count();

function rating(rate = 5) {
    if (rate === 5) {
        console.log('High Ratings');
    } else if (rate === 0) {
        console.log('Low Ratings');
    }
}
rating();