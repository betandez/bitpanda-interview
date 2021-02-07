<template lang="pug">
  .list {{list}}
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'TodoList',
  props: ['list'],
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
@import '../sass/globals.scss';
.list {
  width: 80%;
  min-height: 60vh;
  background-color: $primary-color;
  color: $secondary-color;
  font-size: 1rem;
  border-radius: $main-border-radius;
}
</style>
