import { ref, computed, watch } from "vue";

export default function useSearch(items, searchProp) {
  // data
  const enteredSearchTerm = ref("");
  const activeSearchTerm = ref("");

  // computed

  const availableItems = computed(function () {
    let filteredItems = [];
    if (activeSearchTerm.value) {
      filteredItems = items.value.filter((item) =>
        item[searchProp].includes(activeSearchTerm.value)
      );
    } else if (items.value) {
      filteredItems = items.value;
    }
    return filteredItems;
  });

  // methods
  const updateSearch = (val) => {
    enteredSearchTerm.value = val;
  };

  //watch
  watch(enteredSearchTerm, (newVal) => {
    setTimeout(() => {
      if (newVal === enteredSearchTerm.value) {
        activeSearchTerm.value = newVal;
      }
    }, 300);
  });

  return {
    enteredSearchTerm,
    activeSearchTerm,
    availableItems,
    updateSearch,
  };
}
