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

      <div class="field">
        <div class="control">
          <label class="checkbox">
            <input type="checkbox" v-model="form.completed" />
            Finalizei a tarefa
          </label>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Atualizar</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "EditTask",

  data() {
    return {
      form: {
        title: "",
        completed: false,
        userId: false
      },

      authors: []
    };
  },

  async created() {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/" + this.$route.params.id
    );
    this.form = res.data;

    const resUsers = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    this.authors = resUsers.data;
  },

  methods: {
    async submit() {
      const putData = this.form;

      await axios.put(
        "https://jsonplaceholder.typicode.com/todos/" + this.form.id,
        putData
      );
    }
  }
};
</script>
