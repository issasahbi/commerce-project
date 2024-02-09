<template>
  <div class="home"></div>
  <UpperBanner />
</template>

<script>
// @ is an alias to /src
import UpperBanner from "@/components/home_pages/UpperBanner";
export default {
  name: "HomeView",
  components: {
    UpperBanner,
  },
};
</script>
