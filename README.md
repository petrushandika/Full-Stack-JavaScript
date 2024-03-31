# Full-Stack-JavaScript

## Keyword This

> The JavaScript this keyword refers to the object it belongs to. It has different values depending on where it is used

|               |                                   |
| ------------- | --------------------------------- |
| In a method   | This refers to the owner object.  |
| Alone         | This refers to the global object. |
| In a function | This refers to the global object. |

### This in a Method

> In an object method, this refers to the "owner" of the method.

```js
fullName : function() {
  return this.firstName + " " + this.lastName;
}
```

### This Alone

> When used alone, the owner is the Global object, so this refers to the Global object.

```js
let x = this;
```

### This in a Function (Default)

> In a JavaScript function, the owner of the function is the default binding for this.
> So, in a function, this refers to the Global object [object Window].

```js
function myFunction() {
  return this;
}
```
