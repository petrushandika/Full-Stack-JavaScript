const songs = [
    {name: 'Best Part', singer: 'Daniel Caesar', duration: 4.51},
    {name: 'Super Powers', singer: 'Daniel Caesar', duration: 4.30},
    {name: '22', singer: 'Taylor Swift', duration: 4.00},
    {name: 'Just Say You Won\'t Let Go', singer: 'James Arthur', duration: 4.55},
    {name: 'Golden Hour', singer: 'JVKE', duration: 3.29}
]

const [, , {singer : s}] = songs;
console.log(s);