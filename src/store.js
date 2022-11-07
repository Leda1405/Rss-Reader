import { reactive, readonly } from "vue";

//State to share in components
const state = reactive({
  element: null,
});

export default {
  state: readonly(state),
  actions: {
    /**
     * Set clicked element in list
     */
    setElement(item) {
      state.element = item;
    },
  },
};
