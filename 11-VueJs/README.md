## Dasar-dasar Vue.js

### 1. Template dan Pengikatan Data

**Vue.js:**

Di Vue, template didefinisikan di dalam elemen HTML dengan `id="app"` dan dikelola oleh Vue.js.

**Pengikatan Data:** Vue menggunakan kurung kurawal ganda `{{ }}` untuk mengikat data ke HTML. Ini memungkinkan Anda menampilkan data properti langsung di template.

**Contoh:** Jika instance Vue Anda memiliki properti `title`, `author`, dan `age`, Anda dapat menampilkan ini di HTML sebagai `{{title}}`, `{{author}}`, dan `{{age}}`.

**React:**

React menggunakan JSX, ekstensi sintaks untuk JavaScript, yang memungkinkan Anda menulis elemen HTML dan komponen langsung dalam kode JavaScript.

**Pengikatan Data:** Di React, pengikatan data dilakukan menggunakan kurung kurawal `{}` di dalam JSX. Ini memungkinkan Anda menyisipkan ekspresi JavaScript ke dalam HTML.

**Contoh:** Jika state komponen React Anda memiliki properti `title`, `author`, dan `age`, Anda dapat menampilkan nilai-nilai ini di JSX sebagai `{title}`, `{author}`, dan `{age}`.

### 2. Penanganan Event

**Vue.js:**

**Penanganan Event:** Di Vue, Anda dapat menangani event menggunakan direktif `v-on` atau singkatan `@` diikuti dengan nama event. Direktif ini memungkinkan Anda mengikat listener event ke metode.

**Contoh:** `v-on:click="age++"` atau `@click="age++"` akan menambah nilai `age` setiap kali elemen diklik.

**React:**

**Penanganan Event:** Di React, penanganan event ditambahkan langsung ke elemen JSX menggunakan sintaks camelCase. Anda meneruskan fungsi ke prop handler event.

**Contoh:** `onClick={() => setAge(age + 1)}` akan menambah state `age` setiap kali elemen diklik. Perhatikan bahwa `setAge` adalah fungsi updater state dari hook `useState`.

### 3. Render Kondisional

**Vue.js:**

**Render Kondisional:** Vue menyediakan direktif seperti `v-if`, `v-else`, dan `v-show` untuk merender elemen secara kondisional.

**Contoh:** `<div v-if="showTitle">Title is shown</div>` hanya akan merender `div` jika `showTitle` bernilai true.

`v-show` digunakan untuk elemen yang perlu terlihat secara kondisional tanpa dihapus dari DOM.

**React:**

**Render Kondisional:** React menangani render kondisional menggunakan operator JavaScript seperti operator ternary atau `&&` dalam JSX.

**Contoh:** `{showTitle && <div>Title is shown</div>}` akan merender `div` hanya jika `showTitle` bernilai true.

Anda juga bisa menggunakan operator ternary untuk kondisi yang lebih kompleks: `{showTitle ? <div>Title is shown</div> : <div>Title is hidden</div>}`.

### 4. Manajemen State

**Vue.js:**

**Manajemen State:** Vue mengelola state dalam fungsi `data` dari komponen Vue. Fungsi `data` mengembalikan objek yang berisi properti reaktif.

**Contoh:** `data() { return { age: 0 } }` menginisialisasi properti `age` dengan `0`. Vue secara otomatis melacak perubahan pada properti ini dan memperbarui DOM sesuai kebutuhan.

**React:**

**Manajemen State:** React mengelola state menggunakan hook `useState` di komponen fungsional atau properti state di komponen kelas.

**Contoh:** `const [age, setAge] = useState(0)` menginisialisasi state `age` dengan `0` dan menyediakan fungsi `setAge` untuk memperbarui state tersebut. React akan merender ulang komponen ketika state berubah.

### 5. Metode

**Vue.js:**

**Metode:** Vue memungkinkan Anda mendefinisikan metode dalam objek `methods` dari instance atau komponen Vue. Metode ini dapat dipanggil dari template atau metode lain.

**Contoh:** `methods: { changeTitle(newTitle) { this.title = newTitle } }` mendefinisikan metode `changeTitle` yang memperbarui properti `title`.

**React:**

**Metode:** Di React, metode dapat didefinisikan sebagai fungsi reguler dalam komponen. Metode ini biasanya dipanggil dari JSX saat diperlukan.

**Contoh:** Dalam komponen fungsional, Anda mungkin menggunakan metode seperti `const changeTitle = (newTitle) => { setTitle(newTitle) }` dan memanggilnya dari handler event atau fungsi lain.

### 6. Pengikatan Data Dua Arah

**Vue.js:**

**Pengikatan Data Dua Arah:** Vue.js mendukung pengikatan data dua arah menggunakan direktif `v-model`. Direktif ini secara otomatis menyinkronkan nilai elemen formulir dengan properti data.

**Contoh:** `<input v-model="title">` mengikat properti `title` ke nilai dari field input. Perubahan pada field input secara otomatis memperbarui `title`, dan perubahan pada `title` secara otomatis memperbarui field input.

**React:**

**Pengikatan Data Dua Arah:** React tidak memiliki pengikatan data dua arah bawaan. Sebaliknya, Anda perlu menangani pembaruan state dan handler event secara manual. Anda menggunakan `value` untuk input dan menangani perubahan dengan event `onChange`.

**Contoh:** `<input value={title} onChange={e => setTitle(e.target.value)}>`. Pengaturan ini mengharuskan Anda secara manual memperbarui state dengan `setTitle` setiap kali nilai input berubah.

### 7. **Komponen**

**Vue.js:**

**Komponen:** Vue.js mendefinisikan komponen menggunakan objek dengan opsi seperti `template`, `data`, `methods`, dan lain-lain. Komponen dapat diregistrasi secara lokal atau global.

**Contoh:**

```javascript
Vue.component("my-component", {
  template: "<div>A custom component!</div>",
  data() {
    return {
      message: "Hello Vue!",
    };
  },
});
```

**React:**

**Komponen:** React mendefinisikan komponen sebagai fungsi atau kelas. Komponen fungsi menggunakan hook untuk mengelola state dan side effects.

**Contoh Komponen Fungsi:**

```javascript
function MyComponent() {
  const [message, setMessage] = useState("Hello React!");
  return <div>{message}</div>;
}
```

### 8. **Props (Properti)**

**Vue.js:**

**Props:** Vue menggunakan properti `props` untuk mengirim data dari komponen induk ke komponen anak. Props dideklarasikan di dalam objek `props` dan bisa memiliki tipe data serta nilai default.

**Contoh:**

```javascript
Vue.component("child-component", {
  props: ["title"],
  template: "<h1>{{ title }}</h1>",
});
```

**React:**

**Props:** React mengirim data ke komponen anak melalui atribut dalam elemen JSX. Komponen anak menerima data ini sebagai argumen di fungsi atau kelas.

**Contoh:**

```javascript
function ChildComponent({ title }) {
  return <h1>{title}</h1>;
}
```

### 9. **Lifecycle Hooks**

**Vue.js:**

**Lifecycle Hooks:** Vue menyediakan serangkaian hook lifecycle seperti `created()`, `mounted()`, `updated()`, dan `destroyed()` yang memungkinkan Anda menjalankan kode pada tahap tertentu dalam siklus hidup komponen.

**Contoh:**

```javascript
new Vue({
  data() {
    return {
      message: "Hello Vue!",
    };
  },
  mounted() {
    console.log("Component has been mounted");
  },
});
```

**React:**

**Lifecycle Hooks:** Di komponen fungsi, React menggunakan hook seperti `useEffect()` untuk menangani side effects. Dalam komponen kelas, metode lifecycle seperti `componentDidMount()` digunakan.

**Contoh:**

```javascript
useEffect(() => {
  console.log("Component has been mounted");
}, []);
```

### 10. **Computed Properties vs Memoization**

**Vue.js:**

**Computed Properties:** Vue menyediakan properti terkomputasi (`computed`) untuk nilai yang bergantung pada data reaktif. Properti ini otomatis dihitung ulang ketika data yang terkait berubah.

**Contoh:**

```javascript
new Vue({
  data() {
    return { a: 1, b: 2 };
  },
  computed: {
    sum() {
      return this.a + this.b;
    },
  },
});
```

**React:**

**Memoization:** React menggunakan hook seperti `useMemo()` untuk menghindari perhitungan ulang nilai kecuali dependensinya berubah, mirip dengan computed properties di Vue.

**Contoh:**

```javascript
const sum = useMemo(() => a + b, [a, b]);
```

### 11. **Slot dan Children**

**Vue.js:**

**Slot:** Vue menggunakan slot untuk menempatkan konten dinamis di dalam komponen anak. Slot menyediakan cara untuk menyisipkan konten dalam elemen komponen.

**Contoh:**

```javascript
<template>
  <div>
    <slot></slot>
  </div>
</template>
```

**React:**

**Children:** React mengakses konten dinamis yang ditempatkan dalam komponen melalui `props.children`. Ini adalah cara standar untuk menampilkan konten anak di dalam komponen.

**Contoh:**

```javascript
function ParentComponent({ children }) {
  return <div>{children}</div>;
}
```

### 12. **Directives vs Conditional Rendering**

**Vue.js:**

**Directives:** Vue menggunakan direktif seperti `v-bind`, `v-model`, `v-if`, dan `v-for` untuk memberikan perilaku khusus pada elemen DOM.

**Contoh:**

```html
<div v-if="isVisible">Hello World</div>
```

**React:**

**Conditional Rendering:** React menggunakan ekspresi JavaScript di dalam JSX untuk render kondisional, seperti operator `&&` atau ternary.

**Contoh:**

```javascript
{
  isVisible && <div>Hello World</div>;
}
```

### 13. **Transition dan Animation**

**Vue.js:**

**Transition dan Animation:** Vue memiliki dukungan built-in untuk transisi dan animasi melalui komponen `<transition>` dan `<transition-group>`, yang memudahkan penerapan animasi pada komponen atau elemen DOM.

**Contoh:**

```javascript
<transition name="fade">
  <div v-if="show">Content goes here</div>
</transition>
```

**React:**

**Animation Libraries:** React biasanya menggunakan library
eksternal seperti `React Transition Group` atau `Framer Motion` untuk mengelola
animasi.

**Contoh:**

```javascript
import { CSSTransition } from "react-transition-group";

<CSSTransition
  in="{show}"
  timeout="{300}"
  classNames="fade"
>
  <div>Content goes here</div>
</CSSTransition>;
```

### 14. **Plugins vs. HOC** **Vue.js:**

**Plugins:**

Vue menyediakansistem plugin untuk menambahkan fitur global ke aplikasi Vue. Plugin dapat
mendaftarkan komponen global, menambahkan metode instance, dan sebagainya.

**Contoh:**

Vue Router dan Vuex adalah contoh plugin yang digunakan untuk
routing dan manajemen state global.

**React:**

**Higher-Order Components(HOC):**

React sering menggunakan HOC, yaitu fungsi yang mengambil komponen dan
mengembalikan komponen baru dengan kemampuan tambahan. HOC digunakan untuk
mengelola concerns seperti routing, manajemen state, dan banyak lagi.

**Contoh:**

```javascript
function withLogger(WrappedComponent) { return
function (props) { console.log("Logging props", props); return
<WrappedComponent {...props} />
; }; } `

```
