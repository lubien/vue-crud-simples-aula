<template>
  <div>
    <form @submit.prevent="submit">
      <div class="field">
        <label class="label">Título</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Título da tarefa"
            v-model="form.title"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Autor</label>
        <div class="control">
          <div class="select">
            <select v-model="form.userId">
              <option disabled>Selecione o autor</option>
              <option v-for="user in authors" :key="user.id" :value="user.id">
                {{ user.name }}
              </option>
            </select>
          </div>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Criar</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CreateTask",

  data() {
    return {
      form: {
        title: "",
        userId: false
      },

      authors: []
    };
  },

  async created() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    this.authors = res.data;
  },

  methods: {
    async submit() {
      const form = this.form;
      const postData = {
        ...form,
        completed: false
      };

      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        postData
      );

      res;

      this.$router.push("/tasks/200");
    }
  }
};
</script>
