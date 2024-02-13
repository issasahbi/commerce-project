<template>
  <div class="products-swiper pt-16">
    <div class="title mb-12 px-5 d-flex align-center justify-space-between">
      <h2 style="font-weight: 900; font-size: 35px" class="text-red">
        Flash Deals
      </h2>
      <a href="#" class="text-black" style="font-size: 16px">Shop All</a>
    </div>
    <Swiper
      :pagination="{ el: '.swiper-pagination', clickable: true }"
      :modules="modules"
      :slides-per-view="4"
      :space-between="35"
      :autoplay="{ delay: 2000, disableOnInteraction: true }"
      class="pb-10 px-8"
      :navigation="{ prevIcon: '.swiper-prev', nextIcon: '.swiper-next' }"
    >
      <swiper-slide v-for="item in products" :key="item.id">
        <v-card elevation="0" class="pb-5">
          <v-hover v-slot="{ isHovering, props }">
            <div class="img-parent" style="height: 200px; overflow: hidden">
              <img
                :src="
                  showenItem[item.title]
                    ? showenItem[item.title]
                    : item.thumbnail
                "
                class="w-100"
                :style="`height: 100%; cursor : pointer; transition: .7s all ease-in-out; scale: ${
                  isHovering ? 1.1 : 1
                }`"
                v-bind="props"
              />
            </div>
          </v-hover>

          <v-card-text class="pl-0 pb-0">
            ({{ item.title }})
            {{
              item.description.split(" ").length <= 8
                ? item.description
                : item.description.split(" ").slice(0, 8).join(" ") + "..."
            }}
          </v-card-text>
          <v-rating
            v-model="item.rating"
            half-increments
            disabled
            color="yellow-darken-2"
            size="x-small"
            density="combact"
          >
          </v-rating>
          <v-card-text class="pl-0 pt-0">
            <del>${{ item.price }}</del> From
            <span style="color: red; font-weight: 900; font-size: 15px">
              ${{
                Math.ceil(
                  item.price - item.price * (item.discountPercentage / 100)
                )
              }}
            </span>
          </v-card-text>
          <v-btn-toggle v-model="showenItem[item.title]">
            <v-btn
              v-for="(pic, i) in item.images"
              :value="pic"
              :key="i"
              size="x-small"
              rounded="xl"
              :ripple="false"
            >
              <img
                :src="pic"
                alt=""
                width="30"
                height="30"
                style="border-radius: 50%; border: 1px solid grey"
              />
            </v-btn>
          </v-btn-toggle>
          <div class="mt-5">
            <v-btn
              density="combact"
              class="py-2 px-12"
              style="text-transform: none; border-radius: 30px"
              variant="outlined"
            >
              Choose Options</v-btn
            >
          </div>
        </v-card></swiper-slide
      >
      <div class="swiper-prev"></div>
      <div class="swiper-next"></div>
      <div class="swiper-pagination"></div>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
export default {
  props: {
    products: {
      type: Array,
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation, Autoplay],
    };
  },
  data: () => ({
    showenItem: {},
  }),
};
</script>

<style lang="scss">
.products-swiper {
  .swiper-button-next,
  .swiper-button-prev {
    border: 2px solid rgb(71, 71, 71);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-color: white;
    top: 43%;
    &::after {
      font-size: 15px;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(71, 71, 71);
      font-weight: 900;
    }
  }
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
  }
}
</style>
