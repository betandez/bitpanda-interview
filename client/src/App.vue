<template lang="pug">
  #app.todo-app
    h1 {{ message }}
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'App',
  setup() {
    // utilise todo-bitpanda-server to get data

    return {
      message: 'Todo list should be here',
    };
  },
});
</script>

<style lang="scss">
@import './sass/globals.scss';

.todo-app {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $bg-color;
}
</style>
