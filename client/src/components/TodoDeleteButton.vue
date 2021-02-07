<template lang="pug">
    .delete
        img(src="images/criss-cross.svg", alt="criss-cross", v-show="isVisible")
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'TodoDeleteButton',
  props: {
    todo: String,
    isVisible: Boolean,
  },
});
</script>

<style lang="scss">
.delete {
  min-width: 1.5rem;
  margin-left: auto;
  transform: rotate(45deg);
}
</style>
