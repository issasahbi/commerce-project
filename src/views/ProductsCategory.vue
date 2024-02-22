<template fluid>
  <div class="categories mt-10 text-center">
    <h1>{{ $route.params.title }}</h1>
    <v-container>
      <v-card :loading="loading" class="pt-5" elevation="0">
        <v-row v-if="loading">
          <v-col cols="3" v-for="i in 4" :key="i">
            <v-skeleton-loader
              type="image, article, button"
            ></v-skeleton-loader>
          </v-col>
        </v-row>
        <v-row v-else>
          <v-col
            cols="3"
            v-for="item in categoryProducts.products"
            :key="item.id"
            class="px-5"
          >
            <v-lazy>
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
                    class="py-1 px-12"
                    height="35"
                    width="350"
                    style="text-transform: none; border-radius: 30px"
                    variant="outlined"
                    @click="
                      $router.push({
                        name: 'products_details',
                        params: { productId: item.id },
                      })
                    "
                  >
                    Choose Options</v-btn
                  >
                </div>
              </v-card>
            </v-lazy>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>
<script>
import { productsModule } from "@/stores/products";
import { mapActions, mapState } from "pinia";

export default {
  data: () => ({
    showenItem: {},
    loading: false,
  }),
  methods: {
    ...mapActions(productsModule, ["getProductsByCategory"]),
  },
  computed: {
    ...mapState(productsModule, ["categoryProducts"]),
  },
  watch: {
    async $route() {
      document.documentElement.scrollTo(0, 0);
      this.loading = true;
      await this.getProductsByCategory(this.$route.params.category);
      this.loading = false;
    },
  },
  async mounted() {
    document.documentElement.scrollTo(0, 0);
    this.loading = true;
    await this.getProductsByCategory(this.$route.params.category);
    this.loading = false;
  },
};
</script>
