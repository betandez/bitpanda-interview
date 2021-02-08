<template lang="pug">
    .add-todo
        input.add-todo__input(type="text", placeholder="Take a note")
        img(src="images/criss-cross.svg", alt="criss-cross")
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'AddTodo',
  props: {},
});
</script>

<style lang="scss">
@import '../sass/variables.scss';
@import '../sass/functions.scss';

.add-todo {
  width: 100%;
  padding: 1.5rem;
  display: flex;
  justify-content: left;
  align-items: center;
  border-top-left-radius: $main-border-radius;
  border-top-right-radius: $main-border-radius;
  background-color: get-color-opacity($tertiary-color, 0.3);

  &__input {
    height: 2rem;
    width: 100%;
    border: none;
    margin-right: auto;
    font-size: 1rem;
    outline: none;
    background: transparent;
  }
}
</style>
