<template id="html_cpn">
  <div class="vue-container note-html" :class="{'content-msg': msgData.htmlMsgShow}">
    <div class="vue-head html-head">
      <div class="head-msg">代码预览（只读）</div>
      <div class="html-headrh">
        <span @click="copyHtml">复制全部</span>
        <span v-if="htmlOpen" @click="openClick" class="head-enlarge">
          <svg
            t="1595060042132"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1098"
            width="20"
            height="20"
          >
            <path
              d="M470.624 553.376a32 32 0 0 1 2.656 42.24l-2.656 3.008L269.28 800l145.984 0.032a32 32 0 0 1 31.776 28.256l0.224 3.744a32 32 0 0 1-28.288 31.776l-3.712 0.224H192l-2.4-0.096-4.032-0.544-3.552-0.96-3.552-1.408-3.136-1.664-3.072-2.144-2.88-2.56a32.32 32.32 0 0 1-3.104-3.584l-2.272-3.52-1.728-3.648-1.12-3.36-0.96-4.8L160 832v-224.128a32 32 0 0 1 63.776-3.712l0.224 3.712-0.032 146.848 201.408-201.344a32 32 0 0 1 45.248 0zM608.736 160H832l2.4 0.096 4.032 0.544 3.552 0.96 3.552 1.408 3.136 1.664 3.072 2.144 2.88 2.56c1.152 1.12 2.176 2.336 3.104 3.584l2.272 3.52 1.728 3.648 1.12 3.36 0.96 4.8L864 192v224.128a32 32 0 0 1-63.776 3.712L800 416.128v-146.88l-201.376 201.376a32 32 0 0 1-47.904-42.24l2.656-3.008L754.688 224h-145.92a32 32 0 0 1-31.808-28.256L576.736 192a32 32 0 0 1 28.288-31.776L608.736 160z"
              p-id="1099"
              fill="#cdcec8"
            />
          </svg>
        </span>
        <span v-else @click="openClick" class="head-enlarge">
          <svg
            t="1595060081960"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1319"
            width="20"
            height="20"
          >
            <path
              d="M224.736 544H448l2.4 0.096 4.032 0.544 3.552 0.96 3.552 1.408 3.136 1.664 3.072 2.144 2.88 2.56c1.152 1.12 2.176 2.336 3.104 3.584l2.272 3.52 1.728 3.648 1.12 3.36 0.96 4.8L480 576v224.128a32 32 0 0 1-63.776 3.712L416 800.128v-146.88l-201.376 201.376a32 32 0 0 1-47.904-42.24l2.656-3.008L370.688 608h-145.92a32 32 0 0 1-31.808-28.256L192.736 576a32 32 0 0 1 28.288-31.776L224.736 544zM854.624 169.376a32 32 0 0 1 2.656 42.24l-2.656 3.008L653.28 416l145.984 0.032a32 32 0 0 1 31.776 28.256l0.224 3.744a32 32 0 0 1-28.288 31.776l-3.712 0.224-225.664-0.096-4.032-0.544-3.552-0.96-3.552-1.408-3.136-1.664-3.072-2.144-2.88-2.56a32.32 32.32 0 0 1-3.104-3.584l-2.272-3.52-1.728-3.648-1.12-3.36-0.96-4.8L544 448V223.872a32 32 0 0 1 63.776-3.712l0.224 3.712v146.816l201.376-201.312a32 32 0 0 1 45.248 0z"
              p-id="1320"
              fill="#cdcec8"
            />
          </svg>
        </span>
      </div>
      <span class="copy-msg" :class="{'copy-animate': copySuccess}">复制成功</span>
    </div>
    <textarea
      id="html_text"
      readonly
      class="html-content"
      name="code"
      placeholder="暂无内容！"
      v-text="txtData"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "htmlCpn",
  props: {
    txtData: String,
    msgData: Object,
  },
  data() {
    return {
      htmlOpen: true,
      copySuccess: false,
    };
  },
  watch: {
    txtData(val) {
      setTimeout(() => {
        $(".CodeMirror") && $(".CodeMirror").remove();
        var editor = CodeMirror.fromTextArea(
          document.querySelector("#html_text"),
          {
            lineNumbers: true, //是否显示每一行的行数
            readOnly: true, //只读
            theme: "monokai", //主题
            indentWithTabs: true, //自动缩进
            matchBrackets: true, //括号匹配
          }
        );
      }, 1);
    },
  },
  methods: {
    openClick() {
      let htmlContainer = document.querySelectorAll(".CodeMirror")[0];
      this.htmlOpen
        ? ((htmlContainer.style.height = "auto"), (this.htmlOpen = false))
        : ((htmlContainer.style.height = "400px"), (this.htmlOpen = true));
    },
    copyHtml() {
      document.querySelector("#html_text").select();
      if (document.execCommand("copy")) {
        document.execCommand("copy");
        if (!this.copySuccess) {
          this.copySuccess = true;
          setTimeout(() => {
            this.copySuccess = !this.copySuccess;
          }, 2000);
        }
      }
    },
    editor() {},
  },
};
</script>

<style scoped>
</style>