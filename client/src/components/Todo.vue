<template lang="pug">
  .todo(@mouseover="showOptions", @mouseleave="hideOptions", :class="{'todo--last': isLast}")
    check-button(@task-change="updateHandler", :todo="item._id", :isChecked="item.done")
    .todo__content
        span.todo__descr(:class="{'todo__descr--strike':item.done}") {{ item.description }}
        small.todo__time {{ "- " + lastUpdate }}
    delete-button(@task-delete="deleteHandler", :todo="item._id", :isVisible="areOptionsVisible")
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
  toRefs,
} from '@vue/composition-api';

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
    isLast: Boolean,
  },
  setup(props) {
    const areOptionsVisible = ref(false);
    const showOptions = () => {
      areOptionsVisible.value = true;
    };
    const hideOptions = () => {
      areOptionsVisible.value = false;
    };

    const { item } = toRefs(props);
    const lastUpdate = computed(() => getDateDiffOnText(item.value.updatedAt));

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
  display: flex;
  justify-content: left;
  align-items: center;
  border-bottom: 2px solid $tertiary-color;
  font-size: 1rem;
  color: inherit;
  cursor: context-menu;

  &--last{
    border-bottom: none;
  }

  &__content {
    margin: 0 0.5rem;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-wrap: wrap;
  }

  &__descr {
    font-size: 1rem;
    color: $secondary-color;

    &--strike {
      color: get-color-opacity($secondary-color, 0.5);
      text-decoration: line-through;
    }
  }

  &__time {
    margin-left: 0.5rem;
    font-size: 0.6rem;
    white-space: nowrap;
    color: get-color-opacity($secondary-color, 0.5);
  }
}
</style>
