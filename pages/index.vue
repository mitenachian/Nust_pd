<template>
  <div class="container">
      <div>
        <no-ssr>
          <!-- <v-calendar is-expanded :columns="2"></v-calendar> -->
        </no-ssr>
      </div>
      <div class="container">
        <no-ssr>
          <ckeditor :config="editorConfig" :editor="editor" v-model="html_content"></ckeditor>
        </no-ssr>
      </div>
      <div class="container">
        <div>{{html_content}}</div>
      </div>
  </div>
</template>

<script>
let ClassicEditor
if (process.browser) {
  ClassicEditor = require('@ckeditor/ckeditor5-build-classic')
}
// 因node 沒有 window 屬性，故以此方式載入 Classic 樣式

export default {
  data() {
    return {
      attributes: [{
          key: 'today',
          highlight: true,
          dates: new Date()
        }],
      // CK edit
      html_content:'',
      editor: ClassicEditor,// Classic 樣式
      editorConfig: {
        // 客製化設定goes here
         toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ],
      },
    }
  },
  methods:{
    showdata(){
      console.log("===editor內容===");
      console.log(this.html_content);
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.ck-editor__editable_inline {
    min-height: 500px;
    min-width: 800px;
}
</style>
