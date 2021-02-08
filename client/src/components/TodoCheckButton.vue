<template lang="pug">
    .check(@click="updateTodo")
      img.check__img(src="images/check.svg", alt="check", v-show="isChecked")
</template>

<script lang="ts">
import { defineComponent, watch, toRefs } from '@vue/composition-api';

import useTodoUpdater from '../composables/useTodoUpdater';

export default defineComponent({
  name: 'TodoCheckButton',
  props: {
    todo: {
      type: String,
      required: true,
    },
    isChecked: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, { emit }) {
    const { isChecked } = toRefs(props);
    const { todoUpdated, updateTodo } = useTodoUpdater(props.todo, isChecked);

    watch(todoUpdated, () => {
      if (!todoUpdated) return console.error(`ERROR - FAILED UPDATE ON TODO ${props.todo}`);

      return emit('task-change', todoUpdated);
    });

    return {
      todoUpdated,
      updateTodo,
    };
  },
});
</script>

<style lang="scss">
@import '../sass/variables.scss';
@import '../sass/functions.scss';

.check {
  height: 2rem;
  min-width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  border: 1px solid get-color-opacity($secondary-color, 0.5);
  cursor: pointer;
}
</style>
