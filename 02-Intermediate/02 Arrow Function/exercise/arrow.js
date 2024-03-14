/*
Arrow Function Exercise:
- setTimeout(function() {
    console.log("Hello");
    setTimeout(function() {
        console.log('Hey');
        setTimeout(function() {
            console.log('Namaste');
            setTimeout(function() {
                console.log('Hi');
                setTimeout(function() {
                    console.log('Bonjor')
                }, 2000)
            }, 2000)
        }, 2000)
    }, 2000)
}, 2000)
*/

setTimeout(() => {
    console.log('Hello');
    setTimeout(() => {
        console.log('Hey');
        setTimeout(() => {
            console.log('Namaste');
            setTimeout(() => {
                console.log('Hi');
                setTimeout(() => {
                    console.log('Bonjor');
                }, 2000)
            }, 2000)
        }, 2000)
    }, 2000)
}, 2000)