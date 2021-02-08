<template lang="pug">
  .todo(@mouseover="showOptions", @mouseleave="hideOptions" :key="item._id")
    check-button(@task-change="updateHandler", :todo="item._id", :isChecked="item.done")
    .todo__content
        span.todo__descr(:class="{'todo__descr--strike':item.done}") {{ item.description }}
        small.todo__time {{ "- " + lastUpdate }}
    delete-button(@task-delete="deleteHandler", :todo="item._id", :isVisible="areOptionsVisible")
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

import getDateDiffOnText from '../utils/getDateDiffOnText';
import TodoCheckButton from './TodoCheckButton.vue';
import TodoDeleteButton from './TodoDeleteButton.vue';

export default defineComponent({
  name: 'Todo',
  components: {
    'check-button': TodoCheckButton,
    'delete-button': TodoDeleteButton,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
    updateHandler: {
      type: Function,
      required: true,
    },
    deleteHandler: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const areOptionsVisible = ref(false);
    const showOptions = () => {
      areOptionsVisible.value = true;
    };
    const hideOptions = () => {
      areOptionsVisible.value = false;
    };

    const lastUpdate = getDateDiffOnText(props.item.updatedAt);

    return {
      areOptionsVisible,
      showOptions,
      hideOptions,
      lastUpdate,
    };
  },
});
</script>

<style lang="scss">
@import '../sass/variables.scss';
@import '../sass/functions.scss';

.todo {
  width: 100%;
  padding: 1.5rem 1rem;
  font-size: 1rem;
  color: inherit;
  display: flex;
  justify-content: left;
  align-items: center;
  cursor: context-menu;

  &__content {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 0 0.5rem;
    flex-wrap: wrap;
  }

  &__descr {
    color: $secondary-color;
    font-size: 1rem;

    &--strike {
      color: get-color-opacity($secondary-color, 0.5);
      text-decoration: line-through;
    }
  }

  &__time {
    font-size: 0.6rem;
    color: get-color-opacity($secondary-color, 0.5);
    margin-left: 0.5rem;
    white-space: nowrap;
  }
}
</style>
