<template>
  <Header />
  <GoBackButton />
  <div v-if="state.element" class="info">
    <span class="info__title">{{ state.element.title }}</span>
    <p class="info__description">
      {{ parseContent(state.element.description) }}
    </p>
    <img :src="state.element.thumbnail" />
  </div>
</template>

<script>
import store from "../store";
import { useParse } from "@/hooks/parser.js";
import GoBackButton from "@/components/GoBackButton.vue";
import Header from "@/components/Header.vue";

export default {
  components: {
    GoBackButton,
    Header,
  },
  setup() {
    const { parseContent } = useParse();

    return {
      state: store.state,
      parseContent,
    };
  },
};
</script>

<style lang="scss" scoped>
.info {
  &__title {
    font-size: 1.5em;
  }
}
</style>
