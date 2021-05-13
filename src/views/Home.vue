<template>
  <v-form>
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
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@vue/composition-api'
import HelloWorld from '@/components/HelloWorld.vue'
import Editor from '@tinymce/tinymce-vue'
import { store } from '@/store'
import { Dispatcher } from 'vuex-type-helper'
import { TaskActions } from '@/store/task'

export default defineComponent({
  components: {
    HelloWorld,
    Editor,
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

    return {
      body,
      tinyMCEApiKey,
      save,
    }
  }
})
</script>
