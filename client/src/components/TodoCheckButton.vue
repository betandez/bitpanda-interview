<template lang="pug">
    .check
      img.check__img(src="images/check.svg", alt="check", v-show="isChecked")
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

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
});
</script>

<style lang="scss">
@import '../sass/variables.scss';
@import '../sass/functions.scss';

.check {
  border-radius: 100%;
  height: 2rem;
  min-width: 2rem;
  border: 1px solid get-color-opacity($secondary-color, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
