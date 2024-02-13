<template>
  <div class="home"></div>
  <UpperBanner />
  <TheFeatures />
  <TopOffers />
  <FlashDeals :products="flashDeals" />
</template>

<script>
// @ is an alias to /src
import UpperBanner from "@/components/home_pages/UpperBanner";
import TheFeatures from "@/components/home_pages/TheFeatures.vue";
import TopOffers from "@/components/home_pages/TopOffers.vue";
import { productsModule } from "@/stores/products";
import { mapActions, mapState } from "pinia";
import FlashDeals from "@/components/home_pages/ProductsSwiper.vue";
export default {
  name: "HomeView",
  components: {
    UpperBanner,
    TheFeatures,
    TopOffers,
    FlashDeals,
  },
  computed: {
    ...mapState(productsModule, ["flashDeals"]),
  },
  methods: {
    ...mapActions(productsModule, ["getProducts"]),
  },
  async mounted() {
    await this.getProducts();
  },
};
</script>
