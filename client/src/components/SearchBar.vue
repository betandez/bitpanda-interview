<template lang="pug">
    .search-bar
      img(src="images/search.svg", alt="search")
      input.search-bar__input(
        @keyup.enter="submitQuery",
        v-model="searchQuery"
        type="text",
        placeholder="Search",
      )
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'SearchBar',
  props: {},
  setup(_, { emit }) {
    const searchQuery = ref('');
    const submitQuery = () => {
      emit('query-submit', searchQuery);
    };

    return {
      searchQuery,
      submitQuery,
    };
  },
});
</script>

<style lang="scss">
@import '../sass/variables.scss';
@import '../sass/functions.scss';

.search-bar {
  width: 100%;
  padding: 0.2rem 0.5rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: left;
  border-radius: $main-border-radius;
  align-items: center;
  background-color: $tertiary-color;

  &__input {
    height: 2rem;
    margin-left: 1rem;
    width: 100%;
    border: none;
    font-size: 1rem;
    outline: none;
    background: transparent;
  }
}
</style>
