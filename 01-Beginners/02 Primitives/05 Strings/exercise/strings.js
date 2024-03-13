/*
Strings Exercise:
1. Create variable name (factorFirstName) & store your fav actor name.
2. Create variable name (favActorLastName) & store the last name of (FA)
3. Create variable name (fullName) & concatenate (favActorFirstName, favActorLastName).
4. Create variable name (upperCase) & CAPITALIZE your fav actor name.
5. Create a variable name (message) & store `My favourite Actor Is (favActorName) & say something about your fav actor ` name should be in UPPERCASE.
6. Now append this message to the (message variable `his best show is Silicon Valley)
7. Now log your message.
*/

let factorFirstName = 'Yanto';
let favActorLastName = ' Cukurukuk';
let fullName = factorFirstName.concat(favActorLastName);
console.log(fullName);

let upperCase = factorFirstName;
console.log(upperCase.toUpperCase());

let message = `My favourite Actor Is ${fullName} & `;
console.log(message);

message += 'his best show in Sillicon Valley';
console.log(message);
