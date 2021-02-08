<template lang="pug">
    .search-bar
      img(src="images/search.svg", alt="search")
      input(type="text")
</template>

<script lang="ts">
import { defineComponent, watch, toRefs } from '@vue/composition-api';

export default defineComponent({
  name: 'SearchBar',
  props: {},
  setup() {},
});
</script>

<style lang="scss">
@import '../sass/variables.scss';
@import '../sass/functions.scss';

.search-bar {
  background-color: red;
}
</style>
