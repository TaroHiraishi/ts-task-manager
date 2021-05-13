<template>
  <Editor
    :apiKey="tinyMCEApiKey"
    :init="{
      menubar: false,
      plugins: [
        'advlist autolink lists link image charmap print preview anchor',
        'searchreplace visualblocks code fullscreen',
        'insertdatetime media table paste code help wordcount'
      ],
    }"
  />
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api'
import HelloWorld from '@/components/HelloWorld.vue'
import Editor from '@tinymce/tinymce-vue'

export default defineComponent({
  components: {
    HelloWorld,
    Editor,
  },
  setup() {
    const tinyMCEApiKey = computed(() => {
      return process.env.VUE_APP_TINYMCE_API_KEY
    })

    return {
      tinyMCEApiKey,
    }
  }
})
</script>
