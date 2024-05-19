class MyClass {
  private _myProps: number = 0;

  get myProps(): number {
    return this._myProps;
  }

  set myProps(value: number) {
    this._myProps = value;
  }
}

const myInstance = new MyClass();

console.log(`Current Values: ${myInstance.myProps}`);

myInstance.myProps = 10;
console.log(`Current Values: ${myInstance.myProps}`);
