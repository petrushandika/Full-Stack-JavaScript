## Dasar-dasar Vue.js

### 1. Template dan Pengikatan Data

**Vue.js:**

Di Vue, template didefinisikan di dalam elemen HTML dengan `id="app"` dan dikelola oleh Vue.js.

**Pengikatan Data:** Vue menggunakan kurung kurawal ganda `{{ }}` untuk mengikat data ke HTML. Ini memungkinkan Anda menampilkan data properti langsung di template.

- **Contoh:** Jika instance Vue Anda memiliki properti `title`, `author`, dan `age`, Anda dapat menampilkan ini di HTML sebagai `{{title}}`, `{{author}}`, dan `{{age}}`.

**React:**

React menggunakan JSX, ekstensi sintaks untuk JavaScript, yang memungkinkan Anda menulis elemen HTML dan komponen langsung dalam kode JavaScript.

**Pengikatan Data:** Di React, pengikatan data dilakukan menggunakan kurung kurawal `{}` di dalam JSX. Ini memungkinkan Anda menyisipkan ekspresi JavaScript ke dalam HTML.

- **Contoh:** Jika state komponen React Anda memiliki properti `title`, `author`, dan `age`, Anda dapat menampilkan nilai-nilai ini di JSX sebagai `{title}`, `{author}`, dan `{age}`.

### 2. Penanganan Event

**Vue.js:**

**Penanganan Event:** Di Vue, Anda dapat menangani event menggunakan direktif `v-on` atau singkatan `@` diikuti dengan nama event. Direktif ini memungkinkan Anda mengikat listener event ke metode.

- **Contoh:** `v-on:click="age++"` atau `@click="age++"` akan menambah nilai `age` setiap kali elemen diklik.

**React:**

**Penanganan Event:** Di React, penanganan event ditambahkan langsung ke elemen JSX menggunakan sintaks camelCase. Anda meneruskan fungsi ke prop handler event.

- **Contoh:** `onClick={() => setAge(age + 1)}` akan menambah state `age` setiap kali elemen diklik. Perhatikan bahwa `setAge` adalah fungsi updater state dari hook `useState`.

### 3. Render Kondisional

**Vue.js:**

**Render Kondisional:** Vue menyediakan direktif seperti `v-if`, `v-else`, dan `v-show` untuk merender elemen secara kondisional.

- **Contoh:** `<div v-if="showTitle">Title is shown</div>` hanya akan merender `div` jika `showTitle` bernilai true.
- `v-show` digunakan untuk elemen yang perlu terlihat secara kondisional tanpa dihapus dari DOM.

**React:**

**Render Kondisional:** React menangani render kondisional menggunakan operator JavaScript seperti operator ternary atau `&&` dalam JSX.

- **Contoh:** `{showTitle && <div>Title is shown</div>}` akan merender `div` hanya jika `showTitle` bernilai true.
- Anda juga bisa menggunakan operator ternary untuk kondisi yang lebih kompleks: `{showTitle ? <div>Title is shown</div> : <div>Title is hidden</div>}`.

### 4. Manajemen State

**Vue.js:**

**Manajemen State:** Vue mengelola state dalam fungsi `data` dari komponen Vue. Fungsi `data` mengembalikan objek yang berisi properti reaktif.

- **Contoh:** `data() { return { age: 0 } }` menginisialisasi properti `age` dengan `0`. Vue secara otomatis melacak perubahan pada properti ini dan memperbarui DOM sesuai kebutuhan.

**React:**

**Manajemen State:** React mengelola state menggunakan hook `useState` di komponen fungsional atau properti state di komponen kelas.

- **Contoh:** `const [age, setAge] = useState(0)` menginisialisasi state `age` dengan `0` dan menyediakan fungsi `setAge` untuk memperbarui state tersebut. React akan merender ulang komponen ketika state berubah.

### 5. Metode

**Vue.js:**

**Metode:** Vue memungkinkan Anda mendefinisikan metode dalam objek `methods` dari instance atau komponen Vue. Metode ini dapat dipanggil dari template atau metode lain.

- **Contoh:** `methods: { changeTitle(newTitle) { this.title = newTitle } }` mendefinisikan metode `changeTitle` yang memperbarui properti `title`.

**React:**

**Metode:** Di React, metode dapat didefinisikan sebagai fungsi reguler dalam komponen. Metode ini biasanya dipanggil dari JSX saat diperlukan.

- **Contoh:** Dalam komponen fungsional, Anda mungkin menggunakan metode seperti `const changeTitle = (newTitle) => { setTitle(newTitle) }` dan memanggilnya dari handler event atau fungsi lain.

### 6. Pengikatan Data Dua Arah

**Vue.js:**

**Pengikatan Data Dua Arah:** Vue.js mendukung pengikatan data dua arah menggunakan direktif `v-model`. Direktif ini secara otomatis menyinkronkan nilai elemen formulir dengan properti data.

- **Contoh:** `<input v-model="title">` mengikat properti `title` ke nilai dari field input. Perubahan pada field input secara otomatis memperbarui `title`, dan perubahan pada `title` secara otomatis memperbarui field input.

**React:**

**Pengikatan Data Dua Arah:** React tidak memiliki pengikatan data dua arah bawaan. Sebaliknya, Anda perlu menangani pembaruan state dan handler event secara manual. Anda menggunakan `value` untuk input dan menangani perubahan dengan event `onChange`.

- **Contoh:** `<input value={title} onChange={e => setTitle(e.target.value)}>`. Pengaturan ini mengharuskan Anda secara manual memperbarui state dengan `setTitle` setiap kali nilai input berubah.
