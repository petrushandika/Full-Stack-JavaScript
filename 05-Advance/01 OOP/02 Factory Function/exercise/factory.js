// create a factory function that generates different types of vehicles. Each vehicle object should have properties like type, brand, model, and year.
function vehicle(type, brand, model, year) {
    return {
        type,
        brand,
        model,
        year,
        vehicles: function() {
            console.log(`type: ${type} brand: ${brand} model: ${model} year: ${year}`);
        },
    };
};
const myCar = vehicle('Car', 'Toyota', 'Camry', 2015);
myCar.vehicles();

function anotherVehicle(type, brand, model, year) {
    return {type, brand, model, year};
};
const anotherVehicles = anotherVehicle('Motorcycle', 'Honda', 'CB15R', 2022);
console.log(anotherVehicles);