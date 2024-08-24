<template>
  <div>
    <form @submit="handleSubmit">
      <label for="email">Email</label>
      <input
        type="email"
        required
        v-model="email"
      />

      <label for="password">Password</label>
      <input
        type="password"
        required
        v-model="password"
      />
      <div
        v-if="passwordError"
        class="error"
      >
        {{ passwordError }}
      </div>

      <label for="role">Role</label>
      <select>
        <option value="web">Web Developer</option>
        <option value="design">Web Designer</option>
      </select>

      <label for="skills">Skills</label>
      <input
        type="text"
        v-model="tempSkill"
        @keyup.enter="addSkill"
      />
      <div
        v-for="skill in skills"
        :key="skill"
        class="pill"
      >
        <span @click="deleteSkill(skill)">
          {{ skill }}
        </span>
      </div>

      <div class="terms">
        <input
          type="checkbox"
          v-model="terms"
          required
        />
        <label>Accept terms and conditions</label>
      </div>

      <div class="submit">
        <button>Create An Account</button>
      </div>
    </form>
    <p>Email: {{ email }}</p>
    <p>Password: {{ password }}</p>
    <p>Role: {{ role }}</p>
    <p>Terms accepted: {{ terms }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      role: "designer",
      terms: false,
      tempSkill: "",
      skills: [],
      passwordError: "",
    };
  },
  methods: {
    addSkill() {
      if (this.tempSkill.trim() !== "") {
        if (!this.skills.includes(this.tempSkill.trim())) {
          this.skills.push(this.tempSkill.trim());
        }
        this.tempSkill = "";
      }
    },
    deleteSkill(skill) {
      this.skill = this.skills.filter((item) => {
        return skill !== item;
      });
    },
    handleSubmit() {
      this.passwordError =
        this.password.length > 5
          ? ""
          : "Password must be at least 6 character long";
    },
  },
};
</script>

<style>
body {
  background-color: #aaa;
}

form {
  max-width: 420px;
  margin: 30px auto;
  background-color: #fff;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}

.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background-color: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}

button {
  background-color: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: #fff;
  border-radius: 20px;
}

.submit {
  text-align: center;
}

.error {
  color: red;
  font-size: 0.8rem;
}
</style>
