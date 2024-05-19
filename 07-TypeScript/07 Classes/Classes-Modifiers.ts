class Human {
  private first: string;
  public last: string;
  protected age: number;

  constructor(first: string, last: string, age: number) {
    this.first = first;
    this.last = last;
    this.age = age;
  }

  getInfo(): string {
    return `${this.first} ${this.last}, Age: ${this.age}`;
  }
}

class People extends Human {
  constructor(first: string, last: string, age: number) {
    super(first, last, age);
    this.age = age;
  }
}

const petrus = new People("Petrus", "Handika", 22);
console.log(petrus);
