// Example using closures for private and protected members
function MyClass(publicField, privateField, protectedField) {
  // Public field
  this.publicField = publicField;

  // Private field
  const _privateField = privateField;

  // Protected field
  const _protectedField = protectedField;

  // Public method
  this.publicMethod = function () {
    return `Public method: ${this.publicField}`;
  };

  // Private method (closure)
  function _privateMethod() {
    return `Private method: ${_privateField}`;
  }

  // Protected method (closure)
  function _protectedMethod() {
    return `Protected method: ${_protectedField}`;
  }

  // Method to access protected method
  this.accessProtectedMethod = function() {
    return _protectedField();
  }
}

const myObject = new MyClass("Public Data", "Private Data", "Protected Data");
console.log(myObject);
console.log(myObject.publicField); // Accessing public field
console.log(myObject.publicMethod()); // Accessing public method