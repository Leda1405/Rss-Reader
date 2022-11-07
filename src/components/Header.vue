<template>
  <div class="header">
    <h1>{{ $t("header.title") }}</h1>
    <SwitchLanguage />
  </div>
</template>

<script>
import SwitchLanguage from "./SwitchLanguage.vue";

export default {
  components: {
    SwitchLanguage,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  width: 100%;
  align-content: space-around;
  justify-content: space-between;
}
</style>
