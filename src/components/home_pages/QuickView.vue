<!-- <template fluid>
  <div class="quick-view">
    <v-dialog v-model="dialog">
      <v-card>
        <v-card-title><h1>This is Popup</h1></v-card-title>
      </v-card></v-dialog
    >
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: true,
    };
  },
};
</script> -->
<template>
  <div class="quick-view mt-18">
    <v-dialog v-model="dialog" max-width="1000" max-height="700">
      <v-icon
        style="
          position: absolute;
          right: -15px;
          top: -15px;
          background-color: black;
          color: rgb(172, 170, 170);
          font-size: 20px;
          padding: 15px;
          z-index: 10;
        "
        @click="dialog = false"
        >mdi-close</v-icon
      >
      <v-card elevation="0" class="content_card">
        <v-container fluid class="bg-white pt-10 px-10">
          <v-row>
            <v-col cols="7">
              <img
                :src="tab ? tab : Product.thumbnail"
                class="w-100"
                height="500"
                v-if="!loading"
              />
              <v-skeleton-loader v-if="loading" type="image, image, image">
              </v-skeleton-loader>
              <v-tabs center-active height="200" v-model="tab" class="mt-10">
                <v-tab
                  v-for="(img, i) in Product.images"
                  :key="i"
                  class="mx-8"
                  :value="img"
                >
                  <img :src="img" alt="" width="50" height="50"
                /></v-tab>
              </v-tabs>
            </v-col>
            <v-col cols="5" class="pt-0 pl-10">
              <v-skeleton-loader
                v-if="loading"
                type="article, article, article"
              >
              </v-skeleton-loader>
              <v-card elevation="0" v-if="!loading">
                <v-card-title
                  class="px-0"
                  style="
                    font-size: 20px;
                    font-weight: bold;
                    white-space: pre-wrap;
                  "
                  >({{ Product.title }}) simple - {{ Product.category }} For
                  sale
                </v-card-title>
                <div
                  class="rating-parent d-flex align-center"
                  style="gap: 10px"
                >
                  <v-rating
                    v-model="Product.rating"
                    half-increments
                    disabledS
                    color="yellow-darken-2"
                    size="x-small"
                    density="compact"
                  >
                  </v-rating>
                  <span
                    class="mt-1"
                    style="font-size: 15px; color: rgb(97, 97, 97)"
                  >
                    Stock: {{ Product.stock }}
                  </span>
                </div>
                <v-card-text
                  class="px-0"
                  style="font-size: 15px; color: rgb(97, 97, 97)"
                >
                  {{ Product.description }}</v-card-text
                >
                <v-card-text
                  class="pl-0 pt-0"
                  style="font-size: 15px; color: rgb(97, 97, 97)"
                >
                  Brand: {{ Product.brand }}</v-card-text
                >
              </v-card>
              <v-card-text
                class="px-0"
                style="font-size: 15px; color: rgb(97, 97, 97)"
              >
                Availabilty:
                {{ Product.stock ? "In Stock" : "Out Of Stock" }}</v-card-text
              >
              <v-card-text class="pl-0 pt-0">
                <del>${{ Product.price }}</del> From
                <span style="font-weight: 900; font-size: 15px">
                  ${{
                    Math.ceil(
                      Product.price -
                        Product.price * (Product.discountPercentage / 100)
                    )
                  }}
                </span>
              </v-card-text>
              <v-card-text class="pl-0 pt-0">
                Quantity:
                <div
                  class="counter px-1 mt-3"
                  style="
                    border-radius: 30px;
                    border: 1px solid rgb(104, 104, 104);
                    width: fit-content;
                  "
                >
                  <v-icon size="23px" @click="Qts > 1 ? Qts-- : 1">
                    mdi-minus</v-icon
                  >
                  <input
                    type="number"
                    style="
                      border: none;
                      outline: none;
                      width: 50px;
                      font-size: 14px;
                    "
                    class="text-center py-3"
                    min="1"
                    :value="Qts"
                  />
                  <v-icon size="23px" @click="Qts++">mdi-plus</v-icon>
                </div>
                <v-card-text class="pl-0 pt-5">
                  Subtotal:${{
                    Math.ceil(
                      Product.price -
                        Product.price * (Product.discountPercentage / 100)
                    ) * Qts
                  }}</v-card-text
                >
                <v-card-actions class="mt-8 w-75 px-0">
                  <v-btn
                    variant="outlined"
                    density="compact"
                    height="55px"
                    style="
                      text-transform: none;
                      border-radius: 30px;
                      background-color: rgb(20, 19, 19);
                    "
                    class="w-75 text-white"
                    >Add To Cart</v-btn
                  >
                </v-card-actions>
              </v-card-text>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  inject: ["Emitter"],
  data: () => ({
    tab: "",
    loading: false,
    dialog: false,
    Product: "",
    Qts: 1,
  }),

  mounted() {
    this.Emitter.on("openQuickView", (data) => {
      this.loading = true;
      this.Product = data;
      this.dialog = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    });
  },
};
</script>
<style lang="scss">
.content_card {
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-thumb {
    width: 7px;
    background-color: rgb(160, 160, 160);
  }
  &::-webkit-scrollbar-track {
    width: 7px;
    background-color: rgb(213, 212, 212);
  }
}
</style>
