<template>
  <div class="carousel-item">
    <img
      v-if="image"
      :style="{ width: `${width}px` }"
      class="carousel-item__img"
      :src="require('../assets/imgs/' + item.img)"
      alt=""
    />
    <div
      :style="{ 'min-width': `${width}px` }"
      v-else
      class="carousel-item__alter"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarouselRItem",
  props: {
    item: {
      type: Object,
    },
    image: {
      type: Boolean,
      default: true,
    },
    width: {
      type: Number,
      default: 300,
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel-item {
  // width: 300px;
  min-height: 50px;
  &__img {
    // width: 300px;
    min-height: 50px;
  }
  &__alter {
    // width: 300px;
    text-align: center;
    margin-top: 20px;
  }
}
</style>
