// href
const google = document.querySelector('.google');
console.log(google.href);

const facebook = document.querySelector('.facebook');
console.log(facebook.href = 'https://pesbuk.com');

// value
const username = document.querySelector('.username');
console.log(username.value);

// type
console.log(username.type);
console.log(username.placeholder = 'Please Input Your Username');

// getAttribute(attrName)
const password = document.querySelector('.password');
console.log(password.getAttribute('type'));

// setAttribute(attrName, value)
password.setAttribute('placeholder', 'Input Your Password');
password.setAttribute('type', 'password')