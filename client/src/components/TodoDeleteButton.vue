<template lang="pug">
    .delete
        img(src="images/criss-cross.svg", alt="criss-cross", v-show="isVisible")
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

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
