<template>
  <div class="wrapper">
    <div
      ref="inner"
      class="carousel"
      :style="{ 'margin-left': '-' + 100 * currentIndex + '%' }"
    >
      <CarouselRItem
        v-for="(item, index) in content"
        :key="index"
        :item="item"
        :image="image"
        :width="slideWidth"
      >
        <p>Morning</p>
        <slot></slot>
      </CarouselRItem>
    </div>
    <button @click="prev" class="btns">Prev</button>
    <button @click="next" class="btns">Next</button>
  </div>
</template>

<script>
import CarouselRItem from "./CarouselRItem.vue";

export default {
  name: "CarouselR",
  props: {
    items: {
      type: Array,
    },
    interval: {
      type: Number,
      default: 0,
    },
    slideWidth: {
      type: Number,
      default: 300,
    },
    image: {
      type: Boolean,
      default: true,
    },
    infinity: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    CarouselRItem,
  },
  data() {
    return {
      currentIndex: 0,
      content: [],
    };
  },
  mounted() {
    if (this.interval > 0) {
      setInterval(() => this.next(), this.interval);
    }
    this.content = this.items;
    console.log(this.items.length - 1);
  },
  methods: {
    next() {
      if (this.currentIndex < this.items.length - 1) {
        this.currentIndex++;
      } else if (this.currentIndex === this.items.length - 1 && this.infinity) {
        const item = this.content.shift();
        console.log(item);
        this.content.push(item);

        console.log(this.content);
      } else {
        return;
      }
    },
    prev() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else if (this.infinity && this.currentIndex === 0) {
        // this.currentIndex = this.items.length - 1;
        const item = this.content.pop();
        this.content.unshift(item);
      } else {
        return;
      }
    },
    afterTransition(callback) {
      const listener = () => {
        callback();
        this.$refs.inner.removeEventListener("transitionend", listener);
      };
      this.$refs.inner.addEventListener("transitionend", listener);
    },
    resetTranslate() {
      this.innerStyles = {
        transition: "all ease 0.3s",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 50px auto;
  width: 300px;
  max-height: 300px;
  overflow: hidden;
}

.carousel {
  display: flex;
  transition: all ease 0.3s;
}

.btns {
  margin: 5px;
  padding: 10px;
  border: 1px solid grey;
  border-radius: 5px;
}
</style>
