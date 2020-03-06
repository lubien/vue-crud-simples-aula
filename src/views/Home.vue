<template>
  <div class="home">
    <ul>
      <li v-for="(task, i) in tasks" :key="i" class="list-element">
        <Task :task="task" :show-open-button="true" :show-author="true" />
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import Task from "@/components/Task";

export default {
  name: "Home",

  components: { Task },

  data() {
    return {
      tasks: []
    };
  },

  async created() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    this.tasks = res.data;
  }
};
</script>

<style>
.list-element {
  margin-bottom: 10px;
  border-bottom: 1px solid #dedede;
}

.float-right {
  float: right;
}

.centered {
  text-align: center;
}
</style>
