<template>
  <div>
    <div class="float-right centered">
      <strong>Completed:</strong><br />
      <input type="checkbox" v-model="task.completed" />
    </div>
    <strong>Título:</strong> {{ task.title }} <br />

    <template v-if="showAuthor">
      <strong>Author:</strong> {{ task.userId }} <br />
    </template>

    <router-link v-if="showOpenButton" :to="`/tasks/${task.id}`">
      Open
    </router-link>

    <router-link v-if="showEditAndDelete" :to="`/edit/${task.id}`">
      Edit Task
    </router-link>

    <div v-if="showEditAndDelete" class="field is-grouped">
      <p class="control">
        <button class="button is-danger" @click="deleteTask()">
          Delete
        </button>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Task",

  props: {
    task: Object,
    showOpenButton: {
      type: Boolean,
      default: false
    },

    showAuthor: {
      type: Boolean,
      default: false
    },

    showEditAndDelete: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    async deleteTask() {
      await axios.delete(
        "https://jsonplaceholder.typicode.com/todos/" + this.task.id
      );
      this.$router.push("/");
    }
  }
};
</script>
