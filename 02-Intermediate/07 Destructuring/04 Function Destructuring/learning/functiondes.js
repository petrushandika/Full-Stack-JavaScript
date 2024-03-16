const person = {
    name: 'John',
    age: 22,
    country: 'Indonesia'
}

function personInfo({name, age, country}) {
    console.log(`${name}`);
    console.log(`${age}`);
    console.log(`${country}`);
}
personInfo(person);

let school = {
    name: 'Regina Caeli',
    grade: [10, 11, 12],
    student: ['Petrus', 'Ujang', 'Rachel']
}

function infoSchool({
    name,
    grade,
    student: [Petrus, Ujang, Rachel],
    location: loc = 'Jakarta'
}) {
    console.log(`${name}`);
    console.log(`${grade}`);
    console.log(Petrus, Ujang, Rachel);
    console.log(loc);
}
infoSchool(school);


let option = {
    title: 'My menu',
    items: ['Chicken', 'Beef', 'Rice'],
    price: [200, 300, 400]
}

function showMenu({
    title,
    items,
    price
}) {
    console.log(`${title}`);
    items.forEach((item, index) => {
        console.log(`${item} = ${price[index]}`);
    })
}
showMenu(option);