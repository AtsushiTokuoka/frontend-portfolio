<template>
  <router-view />
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "App",
  data() {
    return {
      msg: "test"
    };
  },
  methods: {
    getMessage(): string {
      return this.msg + "message";
    }
  }
});
</script>

<style lang="scss" scoped>
h1 {
  font-size: 3rem;
}
</style>
