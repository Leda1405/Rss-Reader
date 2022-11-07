<template>
  <div class="add-feed-input">
    <span>{{ $t("addFeedInput.info") }}</span>
    <input
      class="add-feed-input__url"
      ref="input"
      type="text"
      v-model="url"
      @keydown.enter="onEnterPress"
    />
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  props: {},
  emits: ["setFeedUrl"],
  setup(props, { emit }) {
    const input = ref("");
    const url = ref("");
    const feedUrl = computed(
      () => `https://api.rss2json.com/v1/api.json?rss_url=${url.value}`
    );

    function onEnterPress(e) {
      e.preventDefault();
      emit("setFeedUrl", feedUrl.value);
      feedUrl.value = "";
      input.value?.blur();
    }

    return {
      url,
      input,
      onEnterPress,
    };
  },
};
</script>

<style lang="scss" scoped>
.add-feed-input {
  margin-bottom: 0.5em;

  &__url {
    width: 25em;
  }
}
</style>
