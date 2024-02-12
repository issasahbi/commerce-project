<template>
  <div class="home"></div>
  <UpperBanner />
  <TheFeatures />
  <TopOffers />
</template>

<script>
// @ is an alias to /src
import UpperBanner from "@/components/home_pages/UpperBanner";
import TheFeatures from "@/components/home_pages/TheFeatures.vue";
import TopOffers from "@/components/home_pages/TopOffers.vue";
export default {
  name: "HomeView",
  components: {
    UpperBanner,
    TheFeatures,
    TopOffers,
  },
};
</script>
