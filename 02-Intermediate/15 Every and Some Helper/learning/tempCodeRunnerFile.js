const songs = [
    { name: 'Best Part', duration: 3.21 },
    { name: 'When You Love Someone', duration: 4.21 },
    { name: 'Twenty Two', duration: 5.33},
    { name: 'Champion', duration: 2.59 },
    { name: 'Water', duration: 4.55},
];
const everyResult = songs.every((song) => song.duration > 3.5);
const someResult = songs.some((song) => song.duration < 3.5);
console.log(everyResult);
console.log(someResult);