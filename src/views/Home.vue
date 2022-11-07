<template>
  <Header />
  <ElementsList />
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import ElementsList from "@/components/ElementsList.vue";

export default {
  name: "Home",
  components: {
    Header,
    ElementsList,
  },
};
</script>
