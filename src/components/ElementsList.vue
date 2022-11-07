<template>
  <div class="elements-list">
    <AddFeedInput @setFeedUrl="doRequest" />
    <div v-if="state.fetching">
      <h2>{{ $t("elementList.loading") }}</h2>
    </div>
    <div class="elements-list__results-container" v-else-if="state.response">

      <span>{{ $t("elementList.info") }}</span>
      <button @click="sortBy('pubDate')">
        {{ $t("elementList.orderTitle") }}
        {{
          sorting.field === "pubDate"
            ? sorting.orderBy
              ? $t("elementList.ascending")
              : $t("elementList.descending")
            : ""
        }}
      </button>
      <ul>
        <ListItem
          v-for="item in orderItems"
          :key="item.id"
          :item="item"
          @click="addElement(item)"
        />
      </ul>
    </div>
    <div class="elements-list__no-results-container" v-else>
      {{ $t("elementList.noResultsToShow") }}
    </div>
  </div>
</template>

<script>
import { computed, reactive, ref } from "vue";
import { useFetch } from "@/hooks/fetch";
import store from "../store";
import ListItem from "./ListItem.vue";
import AddFeedInput from "./AddFeedInput.vue";

export default {
  components: {
    ListItem,
    AddFeedInput,
  },
  setup() {
    const state = reactive({
      response: null,
      error: null,
      fetching: false,
    });

    const searchQuery = ref("");

    const sorting = ref({ field: "pubDate", orderBy: 0 });//1为升序，0为降序

    const orderItems = computed(() => {
      let aux = state.response.filter((item) => {
        return (
          item.title.toLowerCase().indexOf(searchQuery.value.toLowerCase()) !=
          -1
        );
      });
      return aux.sort(
        (a, b) =>
          new Date(a.pubDate).getTime() -
          new Date(b.pubDate).getTime() * sorting.value.orderBy
      );
    });

    function addElement(item) {
      store.actions.setElement(item);
    }


    function doRequest(receivedUrl) {
      const { response, error, fetchData, fetching } = useFetch(
        receivedUrl,
        {}
      );

   
      fetchData();   //调用函数请求获取数据

      state.response = response;
      state.error = error;
      state.fetching = fetching;
    }

    //改变排序方式
    function sortBy(field) {
      sorting.value = { field, orderBy: sorting.value.orderBy ? 0 : 1 };
    }

    return {
      state,
      sorting,
      orderItems,
      addElement,
      sortBy,
      doRequest,
    };
  },
};
</script>

<style lang="scss" scoped>
.elements-list {
  &__no-results-container {
    font-size: 1.5em;
    margin-top: 1em;
  }
}
</style>
