const data = {
    user: {
        id: 123,
        name: 'Petrus Handika',
        age: 22,
        email: 'petrushandikasinaga@gmail.com',
        address: {
            city: 'Jakarta',
            country: 'Indonesia'
        },
        hobbies: ['Workout', 'Coding', 'Reading'],
        scores: {
            math: 90,
            science: 95,
            history: 85,
        },
        education: {
            "Junior High School": 'SMP Regina Caeli',
            "Senior High School": 'SMA Regina Caeli',
            "University": 'Gunadarma University',
        },
    },
    products: [
        { id: 1, name: 'Laptop', price: 1500 },
        { id: 2, name: 'Tablet', price: 1000 },
        { id: 3, name: 'Phone', price: 500},
    ],
    settings: {
        darkMode: true,
        notification: {
            email: true,
            sms: false,
            instagram: true
        },
        language: 'English',
    },
};

const {
    user: {
        name,
        age,
        email,
        address: { city, country },
        hobbies,
        scores: { math, science, history},
        education: {
            "Junior High School": jhc,
            "Senior High School": shc,
            "University": univ,
        }
    },
    products: [product1, product2, product3],
    settings: {
        darkMode,
        notification: {
            email: emailNotification,
            sms: smsNotification,
            instagram: instagramNotification,
        },
        language,
    },
} = data;

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Email: ${email}`);
console.log(`Address: ${city}, ${country}`);
console.log(`Hobbies: ${hobbies.join(", ")}`);
console.log(`Scores: ${math}, ${science}, ${history}`);
console.log(`Junior High School: ${jhc}`);
console.log(`Senior High School: ${shc}`);
console.log(`University: ${univ}`);
console.log(`Product 1: ${product1.name} ${product1.price}`);
console.log(`Product 2: ${product2.name} ${product2.price}`);
console.log(`Product 3: ${product3.name} ${product3.price}`);
console.log(`Dark Mode: ${darkMode}`);
console.log(`Email Notification: ${emailNotification}`);
console.log(`SMS Notification: ${smsNotification}`);
console.log(`Instagram Notification: ${instagramNotification}`);
console.log(`Language: ${language}`);