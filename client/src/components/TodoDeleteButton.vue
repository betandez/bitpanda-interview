<template lang="pug">
    .delete(@click="removeTodo")
        img(src="images/criss-cross.svg", alt="criss-cross", v-show="isVisible")
</template>

<script lang="ts">
import { defineComponent, watch } from '@vue/composition-api';

import useTodoRemover from '../composables/userTodoRemover';

export default defineComponent({
  name: 'TodoDeleteButton',
  props: {
    todo: {
      type: String,
      required: true,
    },
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, { emit }) {
    const { isSuccess, removeTodo } = useTodoRemover(props.todo);

    watch(isSuccess, () => {
      if (isSuccess) emit('task-delete');
    });

    return {
      isSuccess,
      removeTodo,
    };
  },
});
</script>

<style lang="scss">
.delete {
  min-width: 1.5rem;
  margin-left: auto;
  transform: rotate(45deg);
  cursor: pointer;
}
</style>
