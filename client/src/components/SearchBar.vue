<template lang="pug">
    .search-bar
      img(src="images/search.svg", alt="search")
      input.search-bar__input(type="text",placeholder="Search", v-model="searchQuery")
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'SearchBar',
  props: {},
  setup() {
    const searchQuery = ref('');

    return {
      searchQuery,
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
  align-items: center;
  border-radius: $main-border-radius;
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
