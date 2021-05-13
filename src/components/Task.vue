<template>
  <div v-html="task.body" class="Task pa-3 mb-4" />
</template>

<script lang="ts">
import { Task } from '@/models/task'
import { defineComponent } from '@vue/composition-api'

type Props = {
  task: Task
}

export default defineComponent({
  props: {
    task: {}
  }
})
</script>

<style scoped>
.Task {
  background-color: aquamarine;
  border-radius: 10px;
}
</style>
