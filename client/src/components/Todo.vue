<template lang="pug">
  .todo(@mouseover="showOptions", @mouseleave="hideOptions" :key="item._id")
    .check
      img.check__img(src="images/check.svg", alt="check", v-show="item.done")
    .todo__content
        span.todo__descr(:class="{'todo__descr--strike':item.done}") {{ item.description }}
        small.todo__time {{ "- " + item.updatedAt }}
    .delete
        img(src="images/criss-cross.svg", alt="criss-cross", v-show="areOptionsVisible")
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'Todo',
  props: {
    item: Object,
  },
  setup() {
    const areOptionsVisible = ref(false);
    const showOptions = () => {
      areOptionsVisible.value = true;
    };
    const hideOptions = () => {
      areOptionsVisible.value = false;
    };

    return {
      areOptionsVisible,
      showOptions,
      hideOptions,
    };
  },
});
</script>

<style lang="scss">
@import '../sass/globals.scss';
.todo {
  width: 100%;
  padding: 1.5rem 1rem;
  font-size: 1rem;
  color: inherit;
  display: flex;
  justify-content: left;
  align-items: center;
  cursor: pointer;

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

.check {
  border-radius: 100%;
  height: 2rem;
  min-width: 2rem;
  border: 1px solid get-color-opacity($secondary-color, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  &__img {
    margin: 0 auto;
  }
}

.delete {
  width: 1rem;
  margin-left: auto;
  transform: rotate(45deg);
}
</style>
