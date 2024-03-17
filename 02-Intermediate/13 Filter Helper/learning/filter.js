// Filter helper
const songs = [
    {name: 'Best Part', duration: 3.29},
    {name: 'Super Powers', duration: 4.21},
    {name: 'Twenty Two', duration: 2.59},
    {name: 'Golden Hour', duration: 1.55},
    {name: 'Love With Someone', duration: 5.01},
];
const result = songs.filter((song) => song.duration < 3);
result.forEach((song) => {
    console.log(`${song.name} - ${song.duration}`);
})

const computers = [
    {name: 'Asus', price: 2000},
    {name: 'Acer', price: 1500},
    {name: 'HP', price: 1800},
    {name: 'Dell', price: 2500},
    {name: 'Apple', price: 1750}
];
const items = computers.filter((computer) => computer.price < 2000);
if (items.length > 0) {
    items.forEach((computer) => {
        console.log(`${computer.name}`);
    })
} else {
    console.log(`Stock Item Price Up To 2000 Is Sold`);
}