<template>
  <div>
    <v-form class="mb-4">
      <Editor
        :apiKey="tinyMCEApiKey"
        v-model="body"
        :init="{
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
        }"
      />

      <v-btn outlined class="mt-2" @click="save">save</v-btn>
    </v-form>

    <template
      v-for="task in tasks"
    >
      <Task :key="task.id" :task="task" />
    </template>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from '@vue/composition-api'
import Editor from '@tinymce/tinymce-vue'
import Task from '@/components/Task.vue'
import { store } from '@/store'
import { Dispatcher } from 'vuex-type-helper'
import { TaskActions } from '@/store/task'

export default defineComponent({
  components: {
    Editor,
    Task,
  },
  setup() {
    const body = ref('')

    const tinyMCEApiKey = computed(() => {
      return process.env.VUE_APP_TINYMCE_API_KEY
    })

    const save = () => {
      store.dispatch<Dispatcher<TaskActions>>({
        type: 'addTask',
        body: body.value,
      })
      body.value = ''
    }

    const tasks = computed(() => {
      return store.getters.tasks
    })

    onMounted(() => {
      store.dispatch<Dispatcher<TaskActions>>({
        type: 'updateTasks',
      })
    })

    return {
      body,
      tinyMCEApiKey,
      save,
      tasks,
    }
  }
})
</script>
