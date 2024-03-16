// forEach Helper
const colors = ['Gray', 'Greens', 'Red', 'Blue'];
colors.forEach((color) => {
    console.log(color);
});

const names = ['jamal', 'udin', 'alex', 'ridho', 'riyan'];
names.forEach((word, index, arr) => {
    arr[index] = word[0].toUpperCase() + word.substring(1);
});
console.log(names);