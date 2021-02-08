<template lang="pug">
    .add-todo
        input.add-todo__input(
            type="text",
            placeholder="Take a note",
            v-model="todoDescription",
            @keyup.enter="submitTodo",
            )
        img(src="images/criss-cross.svg", alt="criss-cross", @click="submitTodo")
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'AddTodo',
  props: {},
  setup(_, { emit }) {
    const todoDescription = ref('');
    const submitTodo = () => {
      if (!todoDescription.value) return;

      emit('add-todo', todoDescription);
      todoDescription.value = '';
    };

    return {
      todoDescription,
      submitTodo,
    };
  },
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
  border-bottom: 2px solid $tertiary-color;
  background-color: get-color-opacity($tertiary-color, 0.2);

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
