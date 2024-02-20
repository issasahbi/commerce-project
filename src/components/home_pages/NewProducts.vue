<template>
  <div class="new-products pt-12">
    <div class="title px-5 d-flex align-center justify-space-between">
      <h2 style="font-weight: 900; font-size: 35px">New Products</h2>
      <a href="#" class="text-black" style="font-size: 16px">Shop All</a>
    </div>
    <v-container fluid>
      <v-row>
        <v-col cols="7" v-if="!products.length" style="padding-top: 75px">
          <v-row>
            <v-col cols="4" v-for="num in 3" :key="num">
              <v-skeleton-loader
                type="image, article, button"
              ></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="7" style="padding-top: 75px" v-else
          ><Swiper
            :pagination="{ el: '.swiper-pagination', clickable: true }"
            :modules="modules"
            :slides-per-view="3"
            :space-between="35"
            :autoplay="{ delay: 3000, disableOnInteraction: true }"
            class="pb-10 px-8"
          >
            <swiper-slide v-for="item in products" :key="item.id">
              <v-card elevation="0" class="pb-5">
                <v-hover v-slot="{ isHovering, props }">
                  <div
                    class="img-parent"
                    style="height: 200px; overflow: hidden"
                  >
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
                  <!-- ({{ item.title }})
                  {{
                    item.description.split(" ").length <= 5
                      ? item.description
                      : item.description.split(" ").slice(0, 5).join(" ")
                  }} -->
                  {{
                    `(${item.title})  ${item.description}`.length <= 40
                      ? `(${item.title})  ${item.description}`
                      : `(${item.title})  ${item.description}`.substring(
                          0,
                          38
                        ) + "..."
                  }}
                </v-card-text>
                <v-rating
                  v-model="item.rating"
                  half-increments
                  disabled
                  color="yellow-darken-2"
                  size="x-small"
                  density="compact"
                >
                </v-rating>
                <v-card-text class="pl-0 pt-0">
                  <del>${{ item.price }}</del> From
                  <span style="color: red; font-weight: 900; font-size: 15px">
                    ${{
                      Math.ceil(
                        item.price -
                          item.price * (item.discountPercentage / 100)
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
                    density="compact"
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
            <div class="swiper-pagination"></div> </Swiper
        ></v-col>
        <v-col cols="5">
          <img src="@/assets/images/vr-banner.webp" class="w-100" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Autoplay } from "swiper/modules";
import { VSkeletonLoader } from "vuetify/lib/labs/components.mjs";
export default {
  props: {
    products: {
      type: Array,
    },
  },
  components: {
    Swiper,
    SwiperSlide,
    VSkeletonLoader,
  },
  setup() {
    return {
      modules: [Pagination, Autoplay],
    };
  },
  data: () => ({
    showenItem: {},
  }),
};
</script>
