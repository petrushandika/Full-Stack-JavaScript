### **Classes dan Interfaces di TypeScript**

**Classes**: Fitur OOP yang berfungsi sebagai blueprint untuk membuat objek, termasuk atribut dan metode.

```typescript
class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} y.o`);
  }
}

const user = new User("Petrus", 22);
user.greet(); // Output: Hello, my name is Petrus and I am 22 y.o
```

**Interfaces**: Digunakan untuk mendefinisikan tipe objek dan struktur data.

```typescript
interface User {
  name: string;
  age: number;
  greet(): void;
}

class Person implements User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} y.o`);
  }
}

const person = new Person("Petrus", 22);
person.greet(); // Output: Hello, my name is Petrus and I am 22 y.o
```

**Perbedaan**:
**Classes** digunakan untuk mendefinisikan objek dengan atribut dan metode.
**Interfaces** digunakan untuk mendefinisikan struktur atau bentuk objek.

### **Array Methods**

**`unshift()`**: Menambahkan satu elemen di awal array.

```typescript
let arr = [1, 2, 3];
arr.unshift(0);
console.log(arr); // Output: [0, 1, 2, 3]
```

**`push()`**: Menambahkan satu elemen di akhir array.

```typescript
let arr = [1, 2, 3];
arr.push(4);
console.log(arr); // Output: [1, 2, 3, 4]
```

### **Getters dan Setters**

**Getter**: Metode untuk mengembalikan nilai dari properti objek.

```typescript
class Person {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }
}

const person = new Person("Petrus");
console.log(person.name); // Output: Petrus
```

**Setter**: Metode untuk mengubah nilai dari properti objek.

```typescript
class Person {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    if (newName) {
      this._name = newName;
    } else {
      console.log("Name cannot be empty.");
    }
  }
}

const person = new Person("Petrus");
person.name = "Handika";
console.log(person.name); // Output: Handika
```

### **Arrow Function**

**Arrow Function**: Cara ringkas untuk menulis fungsi menggunakan tanda panah (`=>`).

```typescript
const x = () => {
  console.log("Hello World");
};

x(); // Output: Hello World
```

### **Menemukan Kelereng Terberat**

1. **Pisahkan**: Bagi 8 kelereng menjadi 2 kelompok: A (4 kelereng) dan B (4 kelereng).
2. **Timbang**: Timbang kelompok A melawan kelompok B.
   Jika berat sama, kelereng terberat ada di kelompok yang tidak ditimbang.
   Jika berat berbeda, kelompok yang lebih berat mengandung kelereng terberat.
3. **Pisahkan**: Dari kelompok terberat, pisahkan menjadi 2 subkelompok: Subkelompok 1 (2 kelereng) dan Subkelompok 2 (2 kelereng).
4. **Timbang**: Timbang Subkelompok 1 melawan Subkelompok 2.
   Jika berat sama, kelereng terberat ada di antara kelereng yang tidak ditimbang.
   Jika berat berbeda, kelompok yang lebih berat mengandung kelereng terberat.
