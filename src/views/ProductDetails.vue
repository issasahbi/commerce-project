<template>
  <div class="product-details mt-15">
    <v-container fluid>
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
          <v-tabs center-active height="220" v-model="tab" class="mt-10">
            <v-tab
              v-for="(img, i) in Product.images"
              :key="i"
              class="mx-15"
              :value="img"
            >
              <img :src="img" alt="" width="100" height="100"
            /></v-tab>
          </v-tabs>
        </v-col>
        <v-col cols="5" class="pt-0 pl-10">
          <v-skeleton-loader v-if="loading" type="article, article, article">
          </v-skeleton-loader>
          <v-card elevation="0" v-if="!loading">
            <v-card-title
              class="px-0"
              style="font-size: 20px; font-weight: bold"
            >
              ({{ Product.title }}) simple - {{ Product.category }} Form sale
            </v-card-title>
            <div class="rating-parent d-flex align-center" style="gap: 10px">
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
              Subtotal: ${{
                Math.ceil(
                  Product.price -
                    Product.price * (Product.discountPercentage / 100)
                ) * Qts
              }}</v-card-text
            >
            <v-card-actions class="mt-10 w-75 px-0">
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
  </div>
</template>
<script>
import { productsModule } from "@/stores/products";
import { mapActions, mapState } from "pinia";
export default {
  data: () => ({
    tab: "",
    loading: false,
    // product: {
    //   id: 1,
    //   title: "iPhone 9",
    //   description: "An apple mobile which is nothing like apple",
    //   price: 549,
    //   discountPercentage: 12.96,
    //   rating: 4.69,
    //   stock: 94,
    //   brand: "Apple",
    //   category: "smartphones",
    //   thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    //   images: [
    //     "https://cdn.dummyjson.com/product-images/1/1.jpg",
    //     "https://cdn.dummyjson.com/product-images/1/2.jpg",
    //     "https://cdn.dummyjson.com/product-images/1/3.jpg",
    //     "https://cdn.dummyjson.com/product-images/1/4.jpg",
    //     "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    //   ],
    // },
    Qts: 1,
  }),
  computed: {
    ...mapState(productsModule, ["Product"]),
  },
  methods: {
    ...mapActions(productsModule, ["getSingleProducts"]),
  },
  async beforeMount() {
    this.loading = true;
    await this.getSingleProducts(this.$route.params.productId);
    this.loading = false;
  },
};
</script>
