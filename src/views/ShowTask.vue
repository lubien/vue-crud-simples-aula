<template>
  <div>
    <div v-if="loading">
      Estou carregando a tarefa de ID = {{ $route.params.id }}
    </div>

    <div v-else>
      <Task :task="task" :show-edit-and-delete="true" />

      <br />

      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">{{ user.name }}</p>
              <p class="subtitle is-6">@{{ user.username }}</p>
            </div>
          </div>

          <div class="content">
            {{ user.website }}
            <br />
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Task from "@/components/Task";

export default {
  name: "ShowTask",

  components: { Task },

  data() {
    return {
      loading: true,
      task: null,
      user: null
    };
  },

  async created() {
    const id = this.$route.params.id;
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/" + id
    );
    this.task = res.data;

    const userRes = await axios.get(
      "https://jsonplaceholder.typicode.com/users/" + this.task.userId
    );
    this.user = userRes.data;

    this.loading = false;
  }
};
</script>
