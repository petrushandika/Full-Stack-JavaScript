// In JavaScript, we can achieve encapsulation by using closures to create private members.

function Counter() {
    let _count = 0; // Private variable
  
    // Public methods that can access and modify the private variable
    this.increment = function() {
        _count++;
    };

    this.decrement = function() {
        _count--;
    };

    this.getCount = function() {
        return _count;
    };
};

const counter = new Counter();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCount());

counter.decrement();
counter.decrement();
counter.decrement();
console.log(counter.getCount());

console.log(counter._count);