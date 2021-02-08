<template lang="pug">
    .pagination
        img.pagination__img(
          src="images/arrow-left.svg",
          alt="arrow left",
          :class="{'pagination__img--disable': !hasPrevPage}",
          @click="getPrevPage"
          )
        span.pagination__divider
        img.pagination__img(
          src="images/arrow-right.svg",
          alt="arrow right",
          :class="{'pagination__img--disable': !hasNextPage}",
          @click="getNextPage"
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

  setup(props, { emit }) {
    const getNextPage = () => {
      if (props.hasNextPage) emit('change-page', false);
    };
    const getPrevPage = () => {
      if (props.hasPrevPage) emit('change-page', true);
    };

    return {
      getNextPage,
      getPrevPage,
    };
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
  border-bottom: 2px solid $tertiary-color;

  &__divider {
    width: 0;
    height: 1.4rem;
    border-right: 2px solid get-color-opacity($secondary-color, 0.6);
  }

  &__img {
    cursor: pointer;

    &--disable {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
}
</style>
