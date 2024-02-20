<template>
  <div class="home"></div>
  <UpperBanner />
  <TheFeatures />
  <TopOffers />
  <ProductsComponent
    :products="flashDeals"
    title=" Flash Deals"
    titleColor="red"
  />
  <TopCategories />
  <NewProducts :products="newProducts" />
  <QualityFeatures />
  <ProductsComponent
    :products="Phones"
    title="Top Mobile Phones"
    titleColor="black-lighten-1"
  />
  <v-container fluid>
    <v-row>
      <v-col cols="6" class="pr-6">
        <img src="@/assets/images/band-left-cover.webp" class="w-100"
      /></v-col>
      <v-col cols="6" class="pl-6">
        <img src="@/assets/images/band-right-cover.webp" class="w-100" />
      </v-col>
    </v-row>
  </v-container>

  <ProductsComponent
    :products="fragrances"
    title="Top Fragrances"
    titleColor="black-lighten-1"
  />
  <v-container fluid>
    <v-row>
      <v-col> <img src="@/assets/images/tv-banner.webp" class="w-100" /></v-col>
    </v-row>
  </v-container>

  <ProductsComponent
    :products="skincare"
    title="Top Skin Care"
    titleColor="black-lighten-1"
  />
</template>

<script>
// @ is an alias to /src
import UpperBanner from "@/components/home_pages/UpperBanner";
import TheFeatures from "@/components/home_pages/TheFeatures.vue";
import TopOffers from "@/components/home_pages/TopOffers.vue";
import { productsModule } from "@/stores/products";
import { mapActions, mapState } from "pinia";
import ProductsComponent from "@/components/home_pages/ProductsSwiper.vue";
import TopCategories from "@/components/home_pages/TopCategories.vue";
import NewProducts from "@/components/home_pages/NewProducts.vue";
import QualityFeatures from "@/components/home_pages/QualityFeatures.vue";
export default {
  name: "HomeView",
  components: {
    UpperBanner,
    TheFeatures,
    TopOffers,
    ProductsComponent,
    TopCategories,
    NewProducts,
    QualityFeatures,
  },
  computed: {
    ...mapState(productsModule, [
      "flashDeals",
      "newProducts",
      "Phones",
      "fragrances",
      "skincare",
    ]),
  },
  methods: {
    ...mapActions(productsModule, ["getProducts"]),
  },
  async mounted() {
    await this.getProducts();
  },
};
</script>
