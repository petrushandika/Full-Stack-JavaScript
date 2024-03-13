/*
Object Exercise:
1. Create object name (car).
2. Add (type, model, color) as properties.
3. Check the type of object.
4. Update the type property to 'Toyota'.
5. Add new property wheels.
6. Log car to the console.
*/

let car = {
    type: 'Honda',
    model: 'Sedan',
    color: {
        favColor: ['red', 'blue', 'black', 'white']
    }   
}
console.log(car.type);

car.type = 'Toyota';
console.log(car.type);

console.log(car);