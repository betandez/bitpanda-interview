<template lang="pug">
    .pagination
        img(
          src="images/arrow-left.svg",
          alt="arrow left",
          :class="{'pagination__img--disable': !hasPrevPage}"
          )
        span.pagination__divider
        img(
          src="images/arrow-right.svg",
          alt="arrow right",
          :class="{'pagination__img--disable': !hasNextPage}"
          )
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Pagination',
  props: {
    hasPrevPage: Boolean,
    hasNextPage: Boolean,
  },
});
</script>

<style lang="scss">
@import '../sass/variables.scss';
@import '../sass/functions.scss';
.pagination {
  width: 4.5rem;
  margin-top: 1rem;
  padding: 0.4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: $main-border-radius;
  font-size: 1.5rem;
  color: $secondary-color;
  background-color: $primary-color;

  &__divider {
    width: 0;
    height: 1.4rem;
    border-right: 2px solid get-color-opacity($secondary-color, 0.6);
  }

  &__img--disable {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>
